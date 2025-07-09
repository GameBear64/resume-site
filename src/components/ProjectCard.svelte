<script>
  import { blur } from 'svelte/transition';

  import Icon from './Icon.svelte';
  import Tag from './Tag.svelte';
  import { tooltip } from '@utils/tooltip';
  import i18n, { t } from '@utils/i18n';

  let { name, image = false, locked = false, tags = [], description, links = [] } = $props();

  let hover = $state(false);
</script>

<div class="card w-full h-full max-w-xl">
  <div class="flex justify-between">
    <h2 class="text-xl font-bold">{name}</h2>
    {#if locked}
      <span use:tooltip={$t('Private')}>
        <Icon hollow class="text-red-500">lock</Icon>
      </span>
    {/if}
  </div>
  {#if image}
    <div class="relative flex justify-center">
      <div class="my-4 bg-base-m overflow-hidden aspect-video">
        <img
          class="aspect-video object-cover transition duration-500"
          class:scale-110={hover}
          class:rotate-1={hover}
          alt="The project logo"
          src={`./${image}.png`}
          onfocus={() => (hover = true)}
          onmouseover={() => (hover = true)}
        />
      </div>
      {#if hover && locked && links.length == 0}
        <div
          transition:blur
          class="absolute top-0 size-full flex gap-4 justify-center items-center bg-neutral-700/80 text-2xl"
          onmouseleave={() => (hover = false)}
        >
          <Icon class="text-red-500">lock</Icon>
          <p use:i18n class="text-red-500 font-semibold">Private</p>
        </div>
      {/if}
      {#if hover && links.length > 0}
        <div
          transition:blur
          class="absolute top-0 size-full flex gap-4 justify-center items-center bg-neutral-700/60"
          onmouseleave={() => (hover = false)}
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
