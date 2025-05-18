/* toggling + tint */
const tabs   = document.querySelectorAll('.folder-btn');
const pages  = document.querySelectorAll('.page');
const canvas = document.getElementById('canvas');

tabs.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id    = btn.dataset.folder;
    const color = btn.dataset.color;

    /* show / hide pages */
    pages.forEach(p=>p.hidden = p.id !== id);

    /* set open state */
    tabs.forEach(b=>{
      const open = b === btn;
      b.classList.toggle('open', open);
      b.setAttribute('aria-expanded', open);
    });

    /* tint the canvas */
    canvas.style.setProperty('--current', color);
  });
});

/* open first tab & tint */
if(tabs.length) tabs[0].click();
