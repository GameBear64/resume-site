/**
 * This action triggers a custom event on node entering/exiting the viewport.
 * example:
 * <p
 * 	use:inView={{ threshold: 0.5 }}
 * 	on:enter={() => console.log("enter")}
 * 	on:exit={() => console.log("exit")}
 * >
 */

/* CREDIT */
// https://svelte.dev/repl/79bf0b833bdd44db9a33838722e88bee?version=3.47.0

export default function inView(node, params = {}) {
  let observer;

  const handleIntersect = e => {
    const v = e[0].isIntersecting ? 'enter' : 'exit';
    node.dispatchEvent(new CustomEvent(v));
  };

  const setObserver = ({ root, threshold = 1 }) => {
    const options = { root, threshold };
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(node);
  };

  setObserver(params);

  return {
    update(params) {
      setObserver(params);
    },

    destroy() {
      if (observer) observer.disconnect();
    },
  };
}
