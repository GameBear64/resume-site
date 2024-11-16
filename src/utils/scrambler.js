const s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:/?><[] ';
const timer = ms => new Promise(res => setTimeout(res, ms));

export default function scrambler(node, params = {}) {
  let observer;
  let done = true;
  node.beforeScramble = node.innerText;
  // console.log('a');

  const handleIntersect = async e => {
    if (!done) {
      node.innerText = node.beforeScramble;
      return;
    }

    if (!e[0].isIntersecting) {
      node.beforeScramble = node.innerText;
      return;
    }

    done = false;

    const string = node.beforeScramble;

    for (let i = 0; i < string.length + 1; i++) {
      const jibberish = Array.from(
        { length: string.length - 1 - i },
        () => s[Math.floor(Math.random() * s.length - 1)]
      ).join('');

      node.innerHTML = string.slice(0, i) + `<span class="text-txtSecondary font-mono">${jibberish}</span>`;

      await timer(50);
      done = true;
    }
  };

  const setObserver = ({ root, threshold = 1 }) => {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(handleIntersect, { root, threshold });
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
