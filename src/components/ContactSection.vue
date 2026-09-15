<script setup>
import githubIcon from '@/assets/icons/github.svg'
import whatsappIcon from '@/assets/icons/whatsapp-icon.svg'
import emailIcon from '@/assets/icons/email-square-icon.svg'

const cvUrl = `${import.meta.env.BASE_URL}Reham-Alamri-CV.pdf`

const socials = [
  {
    label: 'Email',
    href: 'mailto:reham788@outlook.com',
    icon: emailIcon,
    type: 'image'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/rehamm333',
    icon: githubIcon,
    type: 'image'
  },
  {
    label: 'LinkedIn',
    href: '#',
    type: 'linkedin'
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/966544695535?text=Hello%20Reham',
    icon: whatsappIcon,
    type: 'image'
  }
]
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">

      <!-- Contact title -->
      <div class="contact-header">
        <span>Contact</span>
        <div class="contact-line"></div>
      </div>

      <!-- Main content -->
      <div class="contact-content">

        <!-- Main heading -->
        <div class="contact-heading">
          <span class="heading-shadow">
            Let's Work
          </span>

          <h2 class="heading-main">
            Together.
          </h2>
        </div>

        <!-- Your text -->
        <p class="contact-description">
          I'm passionate about building modern and user-friendly web experiences.
        </p>

        <p class="contact-description contact-description-muted">
          If you're looking for a dedicated developer or want to collaborate,
          <br class="desktop-break" />
          don't hesitate to reach out.
        </p>

        <!-- Social icons -->
        <ul class="social-row">
          <li
            v-for="social in socials"
            :key="social.label"
            class="social-item"
          >
            <a
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <span class="social-circle">

                <!-- Normal icons -->
                <img
                  v-if="social.type === 'image'"
                  :src="social.icon"
                  :alt="social.label"
                  class="social-icon"
                />

                <!-- LinkedIn icon -->
                <svg
                  v-else-if="social.type === 'linkedin'"
                  class="linkedin-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v11.7H3.3V9Zm6.1 0H13v1.6h.1c.5-.9 1.7-2 3.6-2 3.9 0 4.6 2.5 4.6 5.8v6.3h-3.8v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.4V9Z"
                  />
                </svg>

              </span>

              <span class="social-label">
                {{ social.label }}
              </span>
            </a>
          </li>
        </ul>

        <!-- CV -->
        <a
          :href="cvUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="cv-button"
        >
          <span class="cv-icon">▤</span>

          <span>View My CV</span>

          <span class="cv-arrow">→</span>
        </a>

      </div>
    </div>
  </section>
</template>

<style scoped>

/* =========================
   CONTACT SECTION
========================= */

.contact-section {
  position: relative;

  /* مهم لكي ينزل Contact لبداية الشاشة */
  min-height: calc(100vh - 75px);

  padding-top: 28px;
  padding-bottom: 150px;

  scroll-margin-top: 74px;

  overflow: hidden;
}


/* Purple glow */
.contact-section::before {
  content: '';

  position: absolute;

  width: 650px;
  height: 650px;

  left: 50%;
  top: 220px;

  transform: translateX(-50%);

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(139, 124, 255, 0.12) 0%,
      rgba(139, 124, 255, 0.04) 42%,
      transparent 72%
    );

  filter: blur(30px);

  pointer-events: none;
}


/* =========================
   CONTAINER
========================= */

.contact-container {
  position: relative;
  z-index: 2;

  width: 100%;

  padding-inline: clamp(35px, 4vw, 65px);
}


/* =========================
   CONTACT HEADER
========================= */

.contact-header {
  display: flex;
  align-items: center;

  gap: 26px;

  width: 100%;
}

.contact-header span {
  font-family: var(--font-ui);
  font-size: 1.05rem;
  font-weight: 600;

  color: var(--text);
}

.contact-line {
  flex: 1;

  height: 1px;

  background: var(--line);
}


/* =========================
   MAIN CONTENT
========================= */

.contact-content {
  max-width: 1000px;

  margin: 55px auto 0;

  text-align: center;
}


/* =========================
   TITLE
========================= */

.contact-heading {
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  margin-bottom: 34px;
}


/* Let's Work */
.heading-shadow {
  font-family: var(--font-display);

  font-size: clamp(4rem, 7vw, 6.5rem);

  font-weight: 700;

  line-height: 0.78;

  letter-spacing: -0.04em;

  color: rgba(139, 124, 255, 0.07);

  transform: translateY(14px);

  white-space: nowrap;
}


/* Together */
.heading-main {
  position: relative;
  z-index: 2;

  margin: 0;

  font-family: var(--font-display);

  font-size: clamp(4.1rem, 7.2vw, 6.8rem);

  font-weight: 700;

  line-height: 0.95;

  letter-spacing: -0.04em;

  color: var(--accent);

  text-shadow:
    0 0 18px rgba(139, 124, 255, 0.18),
    0 0 45px rgba(139, 124, 255, 0.08);
}


/* =========================
   DESCRIPTION
========================= */

.contact-description {
  margin: 0 auto;

  font-family: var(--font-ui);

  font-size: clamp(1rem, 1.35vw, 1.1rem);

  line-height: 1.7;

  color: var(--text);
}

.contact-description-muted {
  margin-top: 5px;

  color: var(--text-muted);
}


/* =========================
   SOCIAL ICONS
========================= */

.social-row {
  display: flex;

  justify-content: center;
  align-items: flex-start;

  gap: clamp(28px, 4vw, 52px);

  margin-top: 36px;

  padding: 0;

  list-style: none;
}

.social-item {
  margin: 0;
}

.social-link {
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 9px;

  color: var(--text-muted);

  text-decoration: none;

  transition:
    transform 0.25s ease,
    color 0.25s ease;
}


/* Circle */
.social-circle {
  width: 70px;
  height: 70px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  border: 1px solid rgba(139, 124, 255, 0.3);

  background: rgba(20, 19, 26, 0.6);

  color: #ffffff;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}


/* Normal SVG icons */
.social-icon {
  width: 25px;
  height: 25px;

  object-fit: contain;

  filter: brightness(0) invert(1);

  opacity: 0.9;
}


/* LinkedIn */
.linkedin-icon {
  width: 27px;
  height: 27px;

  color: #ffffff;
}


/* Labels */
.social-label {
  font-family: var(--font-ui);

  font-size: 0.85rem;

  color: var(--text-muted);
}


/* Social hover */
.social-link:hover {
  transform: translateY(-4px);
}

.social-link:hover .social-circle {
  border-color: var(--accent);

  background: rgba(139, 124, 255, 0.1);

  box-shadow:
    0 0 24px rgba(139, 124, 255, 0.18);
}

.social-link:hover .social-label {
  color: var(--accent);
}


/* =========================
   CV BUTTON
========================= */

.cv-button {
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 14px;

  width: 360px;

  max-width: 90%;

  margin: 40px auto 0;

  padding: 20px 30px;

  border-radius: 9px;

  background:
    linear-gradient(
      110deg,
      #8072ff,
      #a28aff
    );

  color: var(--ink);

  font-family: var(--font-ui);

  font-size: 1rem;

  font-weight: 700;

  text-decoration: none;

  box-shadow:
    0 10px 30px rgba(139, 124, 255, 0.2);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.cv-button:hover {
  transform: translateY(-4px);

  box-shadow:
    0 14px 38px rgba(139, 124, 255, 0.3);
}

.cv-icon {
  font-size: 1.3rem;
}

.cv-arrow {
  font-size: 1.2rem;

  transition: transform 0.25s ease;
}

.cv-button:hover .cv-arrow {
  transform: translateX(6px);
}


/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {

  .contact-section {
    min-height: 100vh;

    padding-top: 20px;
    padding-bottom: 120px;

    scroll-margin-top: 72px;
  }

  .contact-container {
    padding-inline: 20px;
  }

  .contact-header {
    gap: 18px;
  }

  .contact-content {
    margin-top: 55px;
  }

  .heading-shadow {
    font-size: clamp(3rem, 15vw, 4rem);

    white-space: normal;
  }

  .heading-main {
    font-size: clamp(3.2rem, 16vw, 4.3rem);
  }

  .desktop-break {
    display: none;
  }

  .social-row {
    flex-wrap: wrap;

    gap: 22px;
  }

  .social-circle {
    width: 61px;
    height: 61px;
  }

  .social-icon {
    width: 22px;
    height: 22px;
  }

  .linkedin-icon {
    width: 24px;
    height: 24px;
  }

  .cv-button {
    width: 290px;

    padding: 17px 25px;

    margin-top: 36px;
  }
}
</style>