<script>
  import { fly } from 'svelte/transition';
  import { backOut } from 'svelte/easing';
  import Icon from '@components/Icon.svelte';

  export let animate = false;

  const links = [
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/vladimir-d-petrov/', hover: 'hover:text-blue-500' },
    { icon: 'github', url: 'https://github.com/GameBear64', hover: 'hover:text-gray-500' },
    { icon: 'steam', url: 'https://steamcommunity.com/id/GameBear/', hover: 'hover:text-indigo-500' },
    { icon: 'gmail', url: 'mailto:vlpetrov02@gamil.com', hover: 'hover:text-red-400' },
    { icon: 'adobeacrobatreader', url: './vladimir-resume.pdf', hover: 'hover:text-red-500' },
  ];
</script>

<div class="flex my-4">
  {#if animate}
    {#each links as link, i}
      <a
        class={`inline-block mx-4 active-visual ${link.hover} transition`}
        in:fly|global={{
          y: 100,
          delay: 300 * i,
          easing: backOut,
        }}
        href={link.url}
        target="_blank"
      >
        <Icon class={`si-${link?.icon}`} />
      </a>
    {/each}
  {:else}
    <span class="p-4"></span>
  {/if}
</div>
