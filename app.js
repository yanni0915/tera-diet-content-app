/* ── Tera Diet Content Generator ── */

// ── Tab Config ─────────────────────────────────────────
const TAB_META = {
  ideas:   { title: 'Content Ideas',    subtitle: "Fresh ideas for Tera Diet — Malaysia's #1 insect-based pet food brand" },
  caption: { title: 'Captions',         subtitle: 'Compelling captions optimised for each platform' },
  hook:    { title: 'Hooks',            subtitle: 'Attention-grabbing opening lines to stop the scroll' },
  script:  { title: 'Video Script',     subtitle: 'Full word-for-word video script ready to shoot' },
  angles:  { title: 'Shooting Angles',  subtitle: 'Cinematography tips to make your pet food content stand out' },
};

// ── Content Databases ──────────────────────────────────

function getIdeas(topic, platform, tone) {
  const t = topic || 'insect-based pet food';
  return [
    {
      title: `"Is Insect Food Safe for My Pet?" — Myth Busting`,
      body: `Address the #1 concern pet owners have about ${t}. Show the science, certifications, and real pet reactions. Great for building trust with first-time buyers.`,
      tags: ['Education', 'Trust-Building'],
    },
    {
      title: `My Pet Tries Tera Diet for the First Time`,
      body: `Film your dog or cat's first reaction to Tera Diet's insect-based food. Raw, unscripted, genuine. First-taste videos always go viral in the pet space.`,
      tags: ['Pet Reaction', 'Viral'],
    },
    {
      title: `Why Insects? The Protein Behind Tera Diet`,
      body: `Break down why Black Soldier Fly larvae is one of the most complete proteins for pets — higher digestibility, lower allergen risk, and sustainable farming. Use infographic overlays.`,
      tags: ['Education', 'Science'],
    },
    {
      title: `Tera Diet vs Regular Pet Food — Side by Side`,
      body: `Compare ingredients label of a conventional pet food vs Tera Diet. Highlight fillers, allergens, and processing in mainstream brands vs clean insect protein in Tera Diet.`,
      tags: ['Comparison', 'Awareness'],
    },
    {
      title: `Malaysia's First: The Story Behind Tera Diet`,
      body: `Founder story or brand origin content. Why did Tera Diet start? What gap did it fill in Malaysia's pet food market? Great for brand loyalty and press coverage.`,
      tags: ['Brand Story', 'Founder'],
    },
    {
      title: `Pet with Allergies? This Changed Everything`,
      body: `Feature a pet owner whose dog/cat had chronic allergies or sensitive stomachs. Show how switching to Tera Diet's hypoallergenic insect protein resolved the issue.`,
      tags: ['Testimonial', 'Relatable'],
    },
    {
      title: `The Eco-Angle: Why Insect Pet Food is Greener`,
      body: `Show the carbon footprint of traditional meat vs insect farming. Position Tera Diet as the sustainable choice for conscious Malaysian pet owners. Use statistics and animations.`,
      tags: ['Sustainability', 'Awareness'],
    },
    {
      title: `Vet Talks: What Experts Say About ${capitalize(t)}`,
      body: `Interview or collab with a Malaysian vet or animal nutritionist endorsing insect protein. Expert validation content drives massive trust and shares.`,
      tags: ['Expert', 'Credibility'],
    },
  ];
}

function getCaptions(topic, platform, tone) {
  const t = topic || 'insect-based pet food';
  const hashtags = `#TeraDiet #MalaysiaPetFood #InsectProtein #PetHealth #SustainablePetFood #MalaysiaFirstInsectPetFood #${platform === 'tiktok' ? 'PetTok' : 'PetsOfInstagram'} #CleanIngredients`;
  return [
    {
      label: 'Option A — Storytelling',
      text: `My dog had itchy skin, low energy, and tummy issues for over a year.\n\nWe tried everything — different brands, vet diets, expensive supplements.\n\nThen we switched to Tera Diet. Malaysia's first insect-based pet food.\n\nWeek 3: the scratching stopped. Week 5: she started running again. Week 8: her coat was shinier than ever.\n\nInsect protein isn't weird. It's actually the cleanest, most digestible protein your pet can get. 🐾\n\nSave this if your pet has allergies or sensitive stomach.\n\n${hashtags}`,
    },
    {
      label: 'Option B — Education-First',
      text: `Most pet food is full of fillers your pet can't digest. Here's what Tera Diet does differently:\n\n🐛 Black Soldier Fly protein — hypoallergenic & highly digestible\n🌱 Sustainably farmed in controlled environments\n🇲🇾 Made in Malaysia — fresh, traceable ingredients\n✅ No artificial preservatives, no mystery meat\n\nYour pet deserves better than "chicken by-products". Try the future of pet food.\n\nDrop a 🐾 if your pet is already on clean food!\n\n${hashtags}`,
    },
    {
      label: 'Option C — Curiosity Hook',
      text: `Would you feed your pet insects? 🐛\n\nBefore you say no — hear us out.\n\nInsect protein has been used in aquaculture and livestock feed for decades. It's higher in amino acids than chicken, easier to digest, and produces 98% less greenhouse gas than beef farming.\n\nTera Diet is Malaysia's FIRST to bring this to your pet's bowl.\n\nLink in bio to see what all the buzz is about 👇\n\n${hashtags}`,
    },
    {
      label: 'Option D — Short & Bold',
      text: `Your pet's gut called. It wants insect protein. 🐾\n\nTera Diet — Malaysia's first insect-based pet food. Clean. Sustainable. Actually good for them.\n\nTry it. Your pet will thank you.\n\n${hashtags}`,
    },
  ];
}

function getHooks(topic, platform, tone) {
  const t = topic || 'insect-based pet food';
  return [
    {
      label: 'Hook 1 — Shock / Curiosity',
      text: `"I switched my dog to insect food. Here's what happened after 30 days." 🐛`,
    },
    {
      label: 'Hook 2 — Controversy',
      text: `"Unpopular opinion: the pet food brand you trust is probably hurting your pet. This is what Malaysians aren't being told."`,
    },
    {
      label: 'Hook 3 — Bold Claim',
      text: `"This tiny insect has more protein than chicken, beef, AND fish — and Malaysia's first insect pet food is built around it."`,
    },
    {
      label: 'Hook 4 — Pet Owner Relatability',
      text: `"If your dog has been scratching, bloated, or low energy — it's probably the food. We found out the hard way."`,
    },
    {
      label: 'Hook 5 — Malaysia Pride',
      text: `"Malaysia baru ada first insect-based pet food — and the science behind it will blow your mind."`,
    },
    {
      label: 'Hook 6 — Direct Challenge',
      text: `"Try Tera Diet for 14 days. If your pet isn't healthier, shinier, and more energetic — we'll talk. But they will be."`,
    },
    {
      label: 'Hook 7 — Visual Tease',
      text: `"POV: You open a bag of pet food and the first ingredient is actually protein. Not fillers. Not by-products. This is Tera Diet."`,
    },
  ];
}

function getScript(topic, platform, tone) {
  const t = topic || 'insect-based pet food';
  const dur = platform === 'youtube' ? '60 sec' : '30 sec';
  return {
    title: `"The Truth About What You're Feeding Your Pet — And Why We Switched to Tera Diet"`,
    duration: dur,
    sections: [
      {
        tag: 'Hook',
        time: '0–3s',
        content: [
          { type: 'direction', text: '[Close-up of dog scratching or low energy — then cut to healthy, energetic dog]' },
          { type: 'vo', text: `"If your pet has been sick, itchy, or tired — it's probably the food. We learned this the hard way."` },
        ],
      },
      {
        tag: 'Problem',
        time: '3–10s',
        content: [
          { type: 'direction', text: '[Show conventional pet food bag, flip it — highlight unrecognisable ingredients]' },
          { type: 'vo', text: `"Most mainstream pet food in Malaysia is packed with fillers, artificial preservatives, and low-quality meat by-products. We were unknowingly feeding our dog all of this for two years."` },
        ],
      },
      {
        tag: 'Discovery',
        time: '10–18s',
        content: [
          { type: 'direction', text: '[Show Tera Diet product, hold it up, open the bag — clean, visible kibble]' },
          { type: 'vo', text: `"Then we found Tera Diet — Malaysia's FIRST insect-based pet food. The main protein? Black Soldier Fly larvae. It sounds wild but it's actually one of the cleanest proteins on earth. Hypoallergenic, highly digestible, sustainably farmed."` },
        ],
      },
      {
        tag: 'Result',
        time: '18–25s',
        content: [
          { type: 'direction', text: '[Show before/after photos or video of the pet — shinier coat, more active, happier]' },
          { type: 'vo', text: `"After just 3 weeks on Tera Diet: the scratching stopped. Her coat got shinier. She's more energetic than she's been in years. This is real."` },
        ],
      },
      {
        tag: 'CTA',
        time: '25–30s',
        content: [
          { type: 'direction', text: '[Face camera, hold Tera Diet bag, smile — pet in frame if possible]' },
          { type: 'vo', text: `"Link in bio to try Tera Diet. Your pet deserves food that actually works. 🐾"` },
        ],
      },
    ],
  };
}

function getAngles(topic) {
  return [
    {
      icon: '🐾',
      name: 'Pet POV — Floor Level',
      desc: "Camera at pet's eye level or even lower. Makes the pet the hero of the shot. Captures authentic reactions, curiosity, and personality. Works especially well for first-taste videos.",
      badge: 'Best for: Pet Reaction & First Taste',
    },
    {
      icon: '🔬',
      name: 'Macro / Close-Up on Product',
      desc: 'Extreme close-up of the kibble, insect protein texture, or ingredients. Creates intrigue and shows premium quality. Use good lighting to highlight colour and texture.',
      badge: 'Best for: Product Showcase',
    },
    {
      icon: '📦',
      name: 'Flat Lay — Ingredient Spread',
      desc: 'Overhead shot of Tera Diet bag surrounded by its key ingredients. Clean, styled background (white or natural wood). Great for educational content showing what goes in the product.',
      badge: 'Best for: Ingredients & Education',
    },
    {
      icon: '👤',
      name: 'Talking Head — Pet Owner',
      desc: 'Owner at eye level, slightly above. Natural side lighting. Authentic and conversational. Ideal for testimonials, tips, and hook-to-CTA videos. Pet in background adds warmth.',
      badge: 'Best for: Testimonials & Hooks',
    },
    {
      icon: '🍽️',
      name: 'Feeding Moment — Overhead',
      desc: 'Camera directly above the bowl as food is poured in. Captures the satisfying pour and pet diving in. Slow-motion recommended for the pour. Clean bowl on a nice surface.',
      badge: 'Best for: Feeding & ASMR Content',
    },
    {
      icon: '🌿',
      name: 'Lifestyle / Outdoor Walk',
      desc: "Handheld footage of owner walking pet after Tera Diet switch. Natural light, real environment. Conveys energy, happiness, and health transformation. Let the pet lead the shot.",
      badge: 'Best for: Transformation & Vlog',
    },
    {
      icon: '📊',
      name: 'Side-by-Side Split Screen',
      desc: 'Split screen: left shows conventional pet food label, right shows Tera Diet. Or before/after pet health comparison. Works perfectly in 9:16 vertical format for Reels and TikTok.',
      badge: 'Best for: Comparison & Education',
    },
    {
      icon: '🎬',
      name: '45° Cinematic Pour Shot',
      desc: 'Camera at 45° angle, slightly above. Pour Tera Diet from bag into bowl in slow motion. Cinematic depth of field. Shows premium feel and product quality at the same time.',
      badge: 'Best for: Brand & Premium Promo',
    },
  ];
}

// ── Helpers ────────────────────────────────────────────
function capitalize(s) {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function showToast(msg) {
  const t = document.querySelector('.toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}
function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied!';
    showToast('Copied to clipboard');
    setTimeout(() => btn.textContent = 'Copy', 1500);
  });
}

// ── Render Functions ───────────────────────────────────

function renderIdeas(ideas) {
  const grid = document.getElementById('ideas-output');
  grid.innerHTML = '';
  ideas.forEach((idea, i) => {
    const card = document.createElement('div');
    card.className = 'idea-card';
    card.innerHTML = `
      <button class="copy-btn">Copy</button>
      <div class="card-num">Idea ${i + 1}</div>
      <div class="card-title">${idea.title}</div>
      <div class="card-body">${idea.body}</div>
      <div class="card-tags">${idea.tags.map(tag => `<span class="chip">${tag}</span>`).join('')}</div>
    `;
    card.querySelector('.copy-btn').addEventListener('click', (e) => {
      copyToClipboard(`${idea.title}\n\n${idea.body}`, e.target);
    });
    grid.appendChild(card);
  });
}

function renderCaptions(captions) {
  const list = document.getElementById('caption-output');
  list.innerHTML = '';
  captions.forEach(cap => {
    const card = document.createElement('div');
    card.className = 'text-card';
    card.innerHTML = `
      <button class="copy-btn">Copy</button>
      <div class="card-label">${cap.label}</div>
      <div class="card-text">${cap.text}</div>
      <div class="char-count">${cap.text.length} characters</div>
    `;
    card.querySelector('.copy-btn').addEventListener('click', (e) => {
      copyToClipboard(cap.text, e.target);
    });
    list.appendChild(card);
  });
}

function renderHooks(hooks) {
  const list = document.getElementById('hook-output');
  list.innerHTML = '';
  hooks.forEach(hook => {
    const card = document.createElement('div');
    card.className = 'text-card';
    card.innerHTML = `
      <button class="copy-btn">Copy</button>
      <div class="card-label">${hook.label}</div>
      <div class="card-text">${hook.text}</div>
      <div class="char-count">${hook.text.length} characters</div>
    `;
    card.querySelector('.copy-btn').addEventListener('click', (e) => {
      copyToClipboard(hook.text, e.target);
    });
    list.appendChild(card);
  });
}

function renderScript(script) {
  const wrapper = document.getElementById('script-output');
  wrapper.innerHTML = `
    <div class="script-header">
      <h2>${script.title}</h2>
      <span>Duration: ~${script.duration}</span>
    </div>
  `;
  script.sections.forEach(sec => {
    const section = document.createElement('div');
    section.className = 'script-section';
    const contentHTML = sec.content.map(line =>
      line.type === 'direction'
        ? `<div class="direction">${line.text}</div>`
        : `<div class="vo">${line.text}</div>`
    ).join('\n');
    section.innerHTML = `
      <div class="script-section-header">
        <span class="section-tag">${sec.tag}</span>
        <span class="section-time">${sec.time}</span>
      </div>
      <div class="script-body">${contentHTML}</div>
    `;
    wrapper.appendChild(section);
  });

  // Full script copy button
  const fullText = script.sections.map(s =>
    `[${s.tag} – ${s.time}]\n` + s.content.map(l => l.text).join('\n')
  ).join('\n\n');
  const copyBtn = document.createElement('button');
  copyBtn.className = 'generate-btn';
  copyBtn.style.marginTop = '4px';
  copyBtn.innerHTML = '<span class="btn-icon">📋</span> Copy Full Script';
  copyBtn.addEventListener('click', () => copyToClipboard(fullText, copyBtn));
  wrapper.appendChild(copyBtn);
}

function renderAngles(angles) {
  const grid = document.getElementById('angles-output');
  grid.innerHTML = '';
  angles.forEach(angle => {
    const card = document.createElement('div');
    card.className = 'angle-card';
    card.innerHTML = `
      <div class="angle-visual">${angle.icon}</div>
      <div class="angle-name">${angle.name}</div>
      <div class="angle-desc">${angle.desc}</div>
      <span class="angle-badge">${angle.badge}</span>
    `;
    grid.appendChild(card);
  });
}

// ── Loading State ──────────────────────────────────────
function setLoading(containerId) {
  document.getElementById(containerId).innerHTML = `
    <div class="loading-wrap">
      <div class="spinner"></div>
      <span>Generating content…</span>
    </div>
  `;
}

// ── Generate Handler ───────────────────────────────────
function generate() {
  const topic    = document.getElementById('topic-input').value.trim();
  const platform = document.getElementById('platform-select').value;
  const tone     = document.getElementById('tone-select').value;
  const btn      = document.getElementById('generate-btn');

  btn.classList.add('loading');
  btn.innerHTML = '<span class="btn-icon">⏳</span> Generating…';

  // Show loaders
  ['ideas-output', 'caption-output', 'hook-output', 'script-output', 'angles-output']
    .forEach(id => setLoading(id));

  // Simulate async generation
  setTimeout(() => {
    renderIdeas(getIdeas(topic, platform, tone));
    renderCaptions(getCaptions(topic, platform, tone));
    renderHooks(getHooks(topic, platform, tone));
    renderScript(getScript(topic, platform, tone));
    renderAngles(getAngles(topic));

    btn.classList.remove('loading');
    btn.innerHTML = '<span class="btn-icon">⚡</span> Generate';
    showToast('Content generated!');
  }, 900);
}

// ── Tab Switching ──────────────────────────────────────
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.add('hidden'));
    document.getElementById(`tab-${tab}`).classList.remove('hidden');

    document.getElementById('page-title').textContent    = TAB_META[tab].title;
    document.getElementById('page-subtitle').textContent = TAB_META[tab].subtitle;
  });
});

// ── Generate button ────────────────────────────────────
document.getElementById('generate-btn').addEventListener('click', generate);

// ── Enter key ─────────────────────────────────────────
document.getElementById('topic-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') generate();
});

// ── Toast element ──────────────────────────────────────
const toast = document.createElement('div');
toast.className = 'toast';
document.body.appendChild(toast);

// ── Auto-generate on load with default content ─────────
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('topic-input').value = 'insect protein for pets';
  generate();
});
