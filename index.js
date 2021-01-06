const toolkit = document.querySelector('.toolkit');

const getHeaderStyle = (type) => ({
  'h1': 'font-size: 30px; font-weight: bold;',
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
    let focusedNode = window.getSelection().focusNode;
    if (focusedNode.nodeType !== Node.ELEMENT_NODE) {
      focusedNode = focusedNode.parentNode;
    }
    focusedNode.setAttribute('style', getHeaderStyle(type));
  } else {
    document.execCommand(cmd, false, null);
  }
})
