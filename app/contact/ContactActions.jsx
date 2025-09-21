'use client';

import { useState } from 'react';
import { ClipboardCheck, Clipboard } from 'lucide-react';
import { CONTACT_EMAIL } from '../../lib/constants';

export default function ContactActions() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a className="btn" href={`mailto:${CONTACT_EMAIL}`}>
        Email me
      </a>
      <button className="badge inline-flex items-center gap-2" onClick={copyEmail} type="button">
        {copied ? <ClipboardCheck size={16} aria-hidden /> : <Clipboard size={16} aria-hidden />}
        {copied ? 'Copied!' : 'Copy email'}
      </button>
    </div>
  );
}
