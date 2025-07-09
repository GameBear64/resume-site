<script>
  import Icon from '@components/Icon.svelte';

  let shaking = $state(false);

  let emojis = [
    { color: 'text-red-500', emoji: 'favorite' },
    { color: 'text-yellow-500', emoji: 'star' },
    { color: 'text-blue-500', emoji: 'thumb_up' },
    { color: 'text-yellow-500', emoji: 'emoji_objects' },
    { color: 'text-green-500', emoji: 'psychiatry' },
    { color: 'text-stone-500', emoji: 'build' },
    { color: 'text-txtPrimary', emoji: 'alarm' },
  ];

  let selectedEmoji = $state(0);

  function triggerShake() {
    shaking = true;
    setTimeout(() => {
      shaking = false;
      selectedEmoji = Math.floor(Math.random() * emojis.length);
    }, 300);
  }

  let selected = $derived(emojis[selectedEmoji]);
</script>

<div>
  Made with <Icon
    class="{selected.color} text-base align-top select-none cursor-default {shaking ? 'animate-shake' : ''}"
    on:click={triggerShake}
  >
    {selected.emoji}
  </Icon>
  by GamBar.
</div>
