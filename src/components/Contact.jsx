import { useState } from 'react';
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import PageHeader from './PageHeader';

// Initial form values
const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

// ======================================================
// PASTE YOUR WEB3FORMS ACCESS KEY HERE
// ======================================================
const ACCESS_KEY = 'PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE';

// ======================================================
// YOUR GMAIL ADDRESS
// ======================================================
const YOUR_EMAIL = 'akmon5071@gmail.com';

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const [status, setStatus] = useState('idle');

  const update = (key) => (event) => {
    setForm((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  // ======================================================
  // SUBMIT FORM
  // ======================================================
  async function submit(event) {
    event.preventDefault();

    // Check Access Key
    if (
      !ACCESS_KEY ||
      ACCESS_KEY === 'PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE'
    ) {
      setStatus('config');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },

          body: JSON.stringify({
            access_key: ACCESS_KEY,

            name: form.name,

            email: form.email,

            subject:
              form.subject || 'Portfolio Contact Message',

            message: form.message,

            // Email that should receive replies
            replyto: form.email,

            // Name shown as sender
            from_name: 'Akash Mondal Portfolio',

            // Honeypot spam protection
            botcheck: '',
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus('success');

        // Clear form after successful submission
        setForm(initialForm);
      } else {
        console.error('Web3Forms Error:', result);
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
    }
  }

  // ======================================================
  // BUTTON TEXT
  // ======================================================
  const buttonText = {
    idle: 'Send message',
    sending: 'Sending...',
    success: 'Message sent!',
    error: 'Try again',
    config: 'Configure email',
  };

  return (
    <section className="section-view contact-view">

      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <PageHeader
        eyebrow="05 · CONTACT"
        title="Let’s build something thoughtful."
        intro="Have an opportunity, project idea or collaboration in mind? Send me a message using the form below."
      />

      <div className="contact-grid">

        {/* ==================================================
            CONTACT INFORMATION
        ================================================== */}

        <motion.div
          className="contact-info glass-panel"
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <span className="muted-label">
            GET IN TOUCH
          </span>

          <h2>
            Open to opportunities, collaborations and
            conversations.
          </h2>

          <p>
            If you have an opportunity, project idea or
            simply want to connect, feel free to send me a
            message.
          </p>

          {/* Contact Details */}

          <div className="contact-lines">

            <a href={`mailto:${"akmon5071@gmail.com"}`}>
              <FiMail />
              {"akmon5071@gmail.com"}
            </a>

            <span>
              <FiMapPin />
              Kolkata, India
            </span>

          </div>

          {/* Social Links */}

          <div className="hero-socials contact-socials">

            <a
              href="https://github.com/akash-mondal-tech"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/akashmondaltech"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
              LinkedIn
            </a>

          </div>
        </motion.div>

        {/* ==================================================
            CONTACT FORM
        ================================================== */}

        <motion.form
          className="contact-form glass-panel"
          onSubmit={submit}
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >

          {/* Name + Email */}

          <div className="form-row">

            <label>
              Name

              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={update('name')}
                placeholder="Your name"
                disabled={status === 'sending'}
              />
            </label>

            <label>
              Email

              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={update('email')}
                placeholder="you@example.com"
                disabled={status === 'sending'}
              />
            </label>

          </div>

          {/* Subject */}

          <label>
            Subject

            <input
              required
              type="text"
              name="subject"
              value={form.subject}
              onChange={update('subject')}
              placeholder="Let's talk about..."
              disabled={status === 'sending'}
            />
          </label>

          {/* Message */}

          <label>
            Message

            <textarea
              required
              name="message"
              rows="7"
              value={form.message}
              onChange={update('message')}
              placeholder="Tell me a little about your idea or opportunity..."
              disabled={status === 'sending'}
            />
          </label>

          {/* ==================================================
              SUCCESS MESSAGE
          ================================================== */}

          {status === 'success' && (
            <div className="form-status form-success">
              ✓ Message sent successfully! Check your Gmail.
            </div>
          )}

          {/* ==================================================
              ERROR MESSAGE
          ================================================== */}

          {status === 'error' && (
            <div className="form-status form-error">
              ✕ Something went wrong. Please try again.
            </div>
          )}

          {/* ==================================================
              ACCESS KEY WARNING
          ================================================== */}

          {status === 'config' && (
            <div className="form-status form-error">
              ✕ Web3Forms Access Key is not configured yet.
            </div>
          )}

          {/* ==================================================
              SEND BUTTON
          ================================================== */}

          <button
            className="button button-solid submit-button"
            type="submit"
            disabled={status === 'sending'}
          >
            {buttonText[status]}

            <FiSend />
          </button>

        </motion.form>

      </div>

      {/* ====================================================
          FOOTER
      ==================================================== */}

      <footer className="site-footer">

        <div>
          <strong>
            Akash Mondal
          </strong>

          <span>
            AI / ML Enthusiast & Genarative Ai
          </span>
        </div>

        {/* Footer Social Links */}

        <div className="footer-links">

          <a
            href="https://github.com/akash-mondal-tech"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/akashmondaltech"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>

          <a
            href={`mailto:${"akmon5071@gmail.com"}`}
            aria-label="Email"
          >
            <FiMail />
          </a>

        </div>

        {/* Back To Top */}

        <button
          className="footer-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          Back to top

          <FiArrowUpRight />
        </button>

      </footer>

    </section>
  );
}