<script>
  import { blur } from 'svelte/transition';

  import Icon from './Icon.svelte';
  import Tag from './Tag.svelte';
  import { tooltip } from '@utils/tooltip';
  import i18n from '@utils/i18n';

  export let name;
  export let image = false;
  export let locked = false;
  export let tags = [];
  export let description;
  export let links = [];

  let hover = false;
</script>

<div class="card w-full h-full max-w-xl shrink-0">
  <div class="flex justify-between">
    <h2 class="text-xl font-bold">{name}</h2>
    {#if locked}
      <span use:tooltip={'Source not available'}>
        <Icon hollow class="text-red-500">lock</Icon>
      </span>
    {/if}
  </div>
  {#if image}
    <div class="relative flex justify-center">
      <img
        class="my-4"
        alt="The project logo"
        src={`./${image}.png`}
        on:focus={() => (hover = true)}
        on:mouseover={() => (hover = true)}
      />
      {#if hover && links.length > 0}
        <div
          transition:blur
          class="absolute top-0 size-full flex gap-4 justify-center items-center bg-stone-700/50"
          on:mouseleave={() => (hover = false)}
        >
          {#each links as link}
            <a use:i18n class="btn" target="_blank" href={link.url}>{link.name}</a>
          {/each}
        </div>
      {/if}
    </div>
  {/if}
  <div class="my-4 flex flex-wrap gap-2 text-white">
    {#each tags as tag}
      <Tag color={tag.color} icon={tag?.icon}>{tag.name}</Tag>
    {/each}
  </div>
  <span use:i18n class="block">
    {description}
  </span>

  {#if !image && links.length > 0}
    <div class="flex gap-4 justify-center items-center pt-4">
      {#each links as link}
        <a use:i18n class="btn" target="_blank" href={link.url}>{link.name}</a>
      {/each}
    </div>
  {/if}
</div>
