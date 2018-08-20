module.exports = {
  bind: (element, binding) => {
    const el = element
    let dragged;

    el.draggable = binding.value.draggable
    el.ondragstart = binding.value.ondragstart
    
    document.addEventListener('drag', () => {
    }, false);

    document.addEventListener('dragstart', (event) => {
      const ev = event;
      dragged = ev.target;
      ev.target.style.opacity = 0.5;
    }, false);

    document.addEventListener('dragend', (event) => {
      const ev = event;
      ev.target.style.opacity = '';
    }, false);

    document.addEventListener('dragenter', (event) => {
      const ev = event;
      if (ev.target.className === binding.value.dropzone) {
        ev.target.style.background = binding.value.target;
      }
    }, false);

    document.addEventListener('dragover', (event) => {
      const ev = event;
      ev.preventDefault();
    }, false);

    document.addEventListener('dragleave', (event) => {
      const ev = event;
      if (ev.target.className === binding.value.dropzone) {
        ev.target.style.background = '';
      }
    }, false);

    document.addEventListener('drop', (event) => {
      const ev = event;
      ev.preventDefault();
      if (ev.target.className === binding.value.dropzone) {
        ev.target.style.background = '';
        dragged.parentNode.removeChild(dragged);
        ev.target.appendChild(dragged);
      }
    }, false);
  }
}
