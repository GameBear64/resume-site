<script>
  import i18n from '@utils/i18n';
  import formatDate, { formatDuration } from '@utils/timeFormatter';
  import TimelineDates from './TimelineDates.svelte';

  export let item;
  export let isLast;
</script>

<li class="transition-colors delay-500 ease-in flex flex-start relative w-full">
  <div class="w-full">
    <div class="flex justify-between flex-wrap gap-4 md:flex-nowrap mb-4 text-primary-more">
      <div>
        <p use:i18n class="font-bold text-xl">{item.title}</p>
        {#if item?.technologies}
          <p class="font-medium text-xs text-txtSecondary">{item.technologies.join(', ')}</p>
        {/if}
      </div>
      <div class="md:min-w-44 text-right">
        <TimelineDates date={item?.date} end={item?.end} />
      </div>
    </div>
    <ul class="list-disc list-inside marker:text-primary" class:list-disc={item.points.length > 1}>
      {#each item.points as point}
        <li use:i18n class="text-txtPrimary text-wrap">
          {point}
        </li>
      {/each}
    </ul>
    {#if item?.links?.length > 0}
      <div class="flex gap-4 items-center mt-6">
        {#each item.links as link}
          <a use:i18n class="btn" target="_blank" href={link.url}>{link.name}</a>
        {/each}
      </div>
    {/if}
  </div>
</li>

{#if !isLast}
  <hr class="w-full my-8" />
{/if}
