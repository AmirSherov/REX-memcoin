function fitCA() {
  const row  = document.querySelector('.ca-row');
  const addr = document.getElementById('addr');
  const btn  = document.getElementById('copyBtn');
  const available = row.clientWidth - btn.offsetWidth - 16;
  let size = 200;
  addr.style.fontSize = size + 'px';
  while (addr.scrollWidth > available && size > 8) {
    size--;
    addr.style.fontSize = size + 'px';
  }
}

document.fonts.ready.then(fitCA);
window.addEventListener('resize', fitCA);

function copyAddr() {
  const addr = document.getElementById('addr').textContent.trim();
  const btn = document.getElementById('copyBtn');

  navigator.clipboard.writeText(addr).catch(() => {
    const el = document.createElement('textarea');
    el.value = addr;
    el.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }).finally(() => {
    btn.textContent = 'copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'copy'; btn.classList.remove('copied'); }, 1500);
  });
}
