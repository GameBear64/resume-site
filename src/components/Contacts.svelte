<script>
  import { fly } from 'svelte/transition';
  import { backOut } from 'svelte/easing';
  import Icon from '@components/Icon.svelte';

  let { animate = false } = $props();

  const links = [
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/vladimir-d-petrov/', hover: 'hover:text-blue-500' },
    // { icon: 'mastodon', url: 'https://mastodon.social/@gamriel', hover: 'hover:text-purple-500' },
    { icon: 'x', url: 'https://x.com/GamBar64', hover: 'hover:text-gray-500' },
    { icon: 'github', url: 'https://github.com/GameBear64', hover: 'hover:text-indigo-500' },
    { icon: 'steam', url: 'https://steamcommunity.com/id/GameBear/', hover: 'hover:text-blue-500' },
    { icon: 'gmail', url: 'mailto:vlpetrov02@gmail.com', hover: 'hover:text-red-400' },
  ];
</script>

<div class="flex my-4 gap-8">
  {#if animate}
    {#each links as link, i}
      <a
        class={`inline-block active-visual ${link.hover}`}
        in:fly|global={{
          y: 100,
          delay: 300 * i,
          easing: backOut,
        }}
        href={link.url}
        target="_blank"
      >
        <Icon class={`si-${link?.icon} transition`} />
      </a>
    {/each}
  {:else}
    <span class="p-4"></span>
  {/if}
</div>
