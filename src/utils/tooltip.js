/* CREDIT */
/* https://svelte.dev/repl/a4682e449f0a4478aa4a24a804d9fe7c?version=3.38.2 */

export function tooltip(node, params) {
  node.classList.add('tooltip');
  node.setAttribute('tabindex', 0);

  function handleFocus() {
    const child = document.createElement('span');
    child.textContent = params;
    child.setAttribute('id', 'tooltip');
    node.appendChild(child);

    node.addEventListener('mouseleave', handleBlur);
    node.addEventListener('blur', handleBlur);
    node.removeEventListener('mouseenter', handleFocus);
    node.removeEventListener('focus', handleFocus);
  }

  function handleBlur() {
    node.removeChild(node.querySelector('#tooltip'));

    node.removeEventListener('mouseleave', handleBlur);
    node.removeEventListener('blur', handleBlur);
    node.addEventListener('mouseenter', handleFocus);
    node.addEventListener('focus', handleFocus);
  }

  node.addEventListener('mouseenter', handleFocus);
  node.addEventListener('focus', handleFocus);

  return {
    onDestroy() {
      node.classList.remove('tooltip');
      node.removeEventListener('mouseenter', handleFocus);
      node.removeEventListener('focus', handleFocus);
    },
  };
}
