const toolkit = document.querySelector('.toolkit');

const getHeaderStyle = (type) => ({
  'h1': 'font-size: 25px; font-weight: bold;',
  'h2': 'font-size: 20px; font-weight: bold;',
}[type])

toolkit.addEventListener('click', (evt) => {
  const btn = evt.target.closest('button');
  if (!btn) {
    return;
  }

  const { cmd } = btn.dataset;

  if (cmd === 'heading') {
    const { type } = btn.dataset;
    document.execCommand('formatBlock', false, type);
    const focusedNode = window.getSelection().focusNode.parentNode;
    focusedNode.setAttribute('style', getHeaderStyle(type));
  } else {
    document.execCommand(cmd, false, null);
  }
})
