<script setup>
const groups = [
  {
    icon: '🎨',
    title: 'Frontend Development',
    type: 'list',
    items: [
      'HTML5',
      'CSS3 (Flexbox, Grid, Responsive Design)',
      'JavaScript (ES6+)',
      'Vue.js',
      'DOM Manipulation',
      'UI/UX Implementation'
    ]
  },
  {
    icon: '🛠',
    title: 'Tools & Platforms',
    type: 'list',
    items: [
      'Git & GitHub',
      'VS Code',
      'Figma',
      'Canva',
      'Microsoft PowerPoint',
      'Microsoft Excel',
      'Microsoft Word'
    ]
  },
  {
    icon: '✨',
    title: 'Other Skills',
    type: 'list',
    items: [
      'Communication',
      'Time Management',
      'Attention to Detail',
      'Teamwork',
      'Fast Learner',
      'Problem Solving'
    ]
  },
  {
    icon: '💡',
    title: 'Creative Thinking & Innovation',
    type: 'description',
    description:
      'Ability to generate unique ideas and develop creative solutions to improve user experience and design.'
  },
  {
    icon: '🌟',
    title: 'Adaptability & Leadership',
    type: 'description',
    description:
      'Highly adaptable and motivated individual with strong interpersonal, organizational, and leadership skills, capable of working effectively in diverse environments.'
  }
]
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="skills-wide">

      <!-- عنوان Skills مع الخط -->
      <div class="skills-heading">
        <h2>Skills</h2>
        <span class="heading-line"></span>
      </div>

      <!-- Skills Cards -->
      <div class="skills-grid">

        <article
          v-for="group in groups"
          :key="group.title"
          class="skill-card"
        >
          <span class="skill-icon">
            {{ group.icon }}
          </span>

          <h3>{{ group.title }}</h3>

          <ul v-if="group.type === 'list'">
            <li
              v-for="item in group.items"
              :key="item"
            >
              <span class="arrow">→</span>
              {{ item }}
            </li>
          </ul>

          <p
            v-else
            class="skill-description"
          >
            {{ group.description }}
          </p>
        </article>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================
   SKILLS SECTION
========================= */

.skills-section {
  position: relative;
  margin-top: clamp(60px, 8vw, 95px);
  margin-bottom: clamp(80px, 10vw, 120px);

  /* عشان النافبار ينزل للمكان الصحيح */
  scroll-margin-top: 105px;
}

.skills-wide {
  width: 100%;
  padding-inline: clamp(20px, 4vw, 60px);
}


/* =========================
   SKILLS TITLE + LINE
========================= */

.skills-heading {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 22px;
}

.skills-heading h2 {
  margin: 0;
  white-space: nowrap;

  font-family: var(--font-ui);
  font-size: clamp(1.25rem, 2vw, 1.65rem);
  font-weight: 600;

  color: var(--text);
}

.heading-line {
  flex: 1;
  height: 1px;

  background: linear-gradient(
    90deg,
    rgba(139, 124, 255, 0.6),
    rgba(139, 124, 255, 0.15)
  );
}


/* =========================
   GRID
========================= */

.skills-grid {
  margin-top: 38px;

  display: grid;
  grid-template-columns: repeat(6, 1fr);

  gap: 20px;
}


/* أول 3 مربعات */

.skill-card:nth-child(1),
.skill-card:nth-child(2),
.skill-card:nth-child(3) {
  grid-column: span 2;
}


/* المربعين تحت */

.skill-card:nth-child(4) {
  grid-column: 2 / span 2;
}

.skill-card:nth-child(5) {
  grid-column: 4 / span 2;
}


/* =========================
   CARD
========================= */

.skill-card {
  position: relative;

  min-height: 330px;

  padding: 26px 25px;

  background: var(--surface);

  border: 1px solid rgba(139, 124, 255, 0.3);
  border-radius: 13px;

  box-shadow:
    8px 9px 0 rgba(8, 7, 14, 0.5);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}


/* المربعين السفليين */

.skill-card:nth-child(4),
.skill-card:nth-child(5) {
  min-height: 210px;
}


/* =========================
   HOVER
========================= */

.skill-card:hover {
  transform: translateY(-4px);

  background: var(--surface-hover);

  border-color: var(--accent);

  box-shadow:
    8px 12px 0 rgba(8, 7, 14, 0.6),
    0 0 22px rgba(139, 124, 255, 0.08);
}


/* =========================
   ICON
========================= */

.skill-icon {
  display: block;

  font-size: 1.7rem;
  line-height: 1;

  margin-bottom: 22px;
}


/* =========================
   CARD TITLE
========================= */

.skill-card h3 {
  margin: 0 0 18px;

  font-family: var(--font-ui);

  font-size: 0.98rem;
  font-weight: 600;

  color: var(--text);
}


/* =========================
   LIST
========================= */

.skill-card ul {
  margin: 0;
  padding: 0;

  list-style: none;
}

.skill-card li {
  display: flex;
  align-items: baseline;

  gap: 10px;

  padding-block: 6px;

  color: var(--text-muted);

  font-size: 0.86rem;
  line-height: 1.45;
}

.arrow {
  color: var(--accent);

  flex-shrink: 0;
}


/* =========================
   DESCRIPTION
========================= */

.skill-description {
  margin: 0;

  color: var(--text-muted);

  font-size: 0.88rem;
  line-height: 1.7;
}


/* =========================
   TABLET
========================= */

@media (max-width: 950px) {

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .skill-card:nth-child(1),
  .skill-card:nth-child(2),
  .skill-card:nth-child(3),
  .skill-card:nth-child(4),
  .skill-card:nth-child(5) {
    grid-column: auto;
  }

  .skill-card {
    min-height: 290px;
  }

  .skill-card:nth-child(4),
  .skill-card:nth-child(5) {
    min-height: 200px;
  }
}


/* =========================
   MOBILE
========================= */

@media (max-width: 650px) {

  .skills-wide {
    padding-inline: 18px;
  }

  .skills-heading {
    gap: 15px;
  }

  .skills-heading h2 {
    font-size: 1.25rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 17px;
    margin-top: 30px;
  }

  .skill-card {
    min-height: auto;
    padding: 24px 22px;
  }

  .skill-card:nth-child(4),
  .skill-card:nth-child(5) {
    min-height: auto;
  }
}
</style>