'use client';

import { useState } from 'react';
import { cx } from '../../../utils/cx.js';
import { Button, Icon, TextField } from '../../atoms/index.js';
import { FilterPills } from '../FilterPills/FilterPills.jsx';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY = { name: '', email: '', company: '', message: '', website: '' };

/** Check the fields; returns { field: message } for anything invalid (empty object = valid). */
function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!EMAIL.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (values.message.trim().length < 10) errors.message = 'Please write a little more (at least 10 characters).';
  return errors;
}

/**
 * Contact form card: topic pills, name / email / company / message, posts JSON to /api/contact.
 * Copy comes from `content` (see hero.form in src/data/contact.js).
 */
export function ContactForm({ content, className = '' }) {
  const [topic, setTopic] = useState(content.topics[0]?.value);
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const { fields } = content;

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`contact-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, topic }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('sent');
      setValues(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className={cx('contact-form', 'contact-form--sent', className)} role="status">
        <span className="contact-form__done-icon"><Icon name="circle-check" size={56} /></span>
        <h2 className="contact-form__title">{content.success.title}</h2>
        <p className="contact-form__text">{content.success.text}</p>
        <Button label={content.success.again} variant="outline" onClick={() => setStatus('idle')} />
      </div>
    );
  }

  return (
    <form className={cx('contact-form', className)} onSubmit={onSubmit} noValidate>
      <h2 className="contact-form__title">{content.title}</h2>
      <p className="contact-form__text">{content.text}</p>

      <div className="contact-form__topic">
        <p className="contact-form__label" id="contact-topic-label">{content.topicLabel}</p>
        <FilterPills options={content.topics} active={topic} onChange={setTopic} label={content.topicLabel} className="contact-form__pills" />
      </div>

      <div className="contact-form__row">
        <TextField id="contact-name" name="name" label={fields.name.label} placeholder={fields.name.placeholder} autoComplete="name" required value={values.name} onChange={update('name')} error={errors.name} />
        <TextField id="contact-email" name="email" type="email" label={fields.email.label} placeholder={fields.email.placeholder} autoComplete="email" required value={values.email} onChange={update('email')} error={errors.email} />
      </div>
      <TextField id="contact-company" name="company" label={fields.company.label} placeholder={fields.company.placeholder} autoComplete="organization" value={values.company} onChange={update('company')} />
      <TextField id="contact-message" name="message" multiline label={fields.message.label} placeholder={fields.message.placeholder} required value={values.message} onChange={update('message')} error={errors.message} />

      {/* Spam trap: hidden from people, bots tend to fill it in. */}
      <div className="contact-form__trap" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update('website')} />
      </div>

      {status === 'error' && <p className="contact-form__alert" role="alert">{content.error}</p>}

      <Button
        type="submit"
        label={status === 'sending' ? content.sending : content.submit}
        iconRight="send"
        size="lg"
        block
        disabled={status === 'sending'}
      />
      <p className="contact-form__privacy">{content.privacy}</p>
    </form>
  );
}
