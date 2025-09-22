/* Utilities */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* Year in footer */
$('#year').textContent = new Date().getFullYear();

/* Theme toggle */
const themeToggle = $('#themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') document.body.classList.add('light');
themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

/* Mobile nav */
const navToggle = $('.nav__toggle');
const navMenu = $('#nav-menu');
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navMenu.classList.toggle('is-open');
});

/* Scroll reveal */
const revealEls = $$('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });
revealEls.forEach((el) => io.observe(el));

/* Grievance form validation */
const form = $('#grievanceForm');
const toast = $('#toast');
const toastMsg = $('#toastMsg');

function showToast(message) {
  toastMsg.textContent = message;
  toast.hidden = false;
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => { toast.hidden = true; }, 250);
  }, 2800);
}

function setError(id, message) {
  const el = $('#err-' + id);
  if (el) el.textContent = message || '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('#name').value.trim();
  const phone = $('#phone').value.trim();
  const category = $('#category').value.trim();
  const details = $('#details').value.trim();

  let hasError = false;
  if (!name) { setError('name', 'Please enter your name'); hasError = true; } else setError('name');
  if (!/^\d{10}$/.test(phone)) { setError('phone', 'Enter valid 10-digit phone'); hasError = true; } else setError('phone');
  if (!category) { setError('category', 'Select a category'); hasError = true; } else setError('category');
  if (details.length < 10) { setError('details', 'Please add more details'); hasError = true; } else setError('details');

  if (hasError) return;

  // Mock submit
  form.querySelector('button[type="submit"]').disabled = true;
  setTimeout(() => {
    form.reset();
    form.querySelector('button[type="submit"]').disabled = false;
    showToast('Grievance submitted successfully. Ref: GZB-' + Math.floor(100000 + Math.random()*900000));
  }, 900);
});

/* Case lookup mock */
const lookupBtn = $('#lookupBtn');
const caseResult = $('#caseResult');
const caseUpdated = $('#caseUpdated');
lookupBtn.addEventListener('click', () => {
  const id = $('#caseId').value.trim();
  if (!id) { showToast('Enter a Case ID to lookup'); return; }
  caseResult.hidden = false;
  caseResult.style.opacity = '0';
  caseResult.style.transform = 'translateY(6px)';
  setTimeout(() => {
    caseUpdated.textContent = new Date().toLocaleString();
    caseResult.style.transition = 'opacity .35s ease, transform .35s ease';
    caseResult.style.opacity = '1';
    caseResult.style.transform = 'none';
  }, 120);
});


