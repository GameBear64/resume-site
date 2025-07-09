<script>
  import { fly } from 'svelte/transition';

  import inView from '@utils/inView';
  import { location } from '@utils/stores/settings';

  import Icon from '@components/Icon.svelte';
  import i18n from '@utils/i18n';
  import formatDate, { formatDuration } from '@utils/timeFormatter';
  import TimelineItem from '@components/TimelineItem.svelte';

  let { timeline } = $props();

  const categories = Object.keys(timeline);
  let selected = $state(categories[0]);

  let fromIndex = $state(0);
  let toIndex = $state(0);

  function changeCategory(category) {
    fromIndex = categories.findIndex(c => c == selected);
    toIndex = categories.findIndex(c => c == category);
    selected = category;
  }
</script>

<div id="experience" use:inView={{ threshold: 0.2 }} onenter={() => ($location = 'experience')}>
  <div class="bg-base-m slanted-2 text-center py-12 my-6 md:my-2">
    <h1 use:i18n class="text-4xl font-bold">Experience</h1>
  </div>

  <div class="w-full flex justify-center px-4 my-10">
    {#each categories as category, i}
      <button
        use:i18n
        class="font-semibold bg-base-m hover:bg-base-s p-2 rounded-l-md w-60"
        class:rounded-l-md={i == 0}
        class:rounded-r-md={i == categories.length - 1}
        class:border={selected == category}
        onclick={() => changeCategory(category)}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
      {#if i != categories.length - 1}
        <div class="border-r-2 border-base"></div>
      {/if}
    {/each}
  </div>

  <div class="w-full justify-center px-4 my-10">
    {#key timeline[selected]}
      <div
        class="card max-w-4xl mx-auto"
        in:fly={{ x: fromIndex > toIndex ? -100 : 100, duration: 200, opacity: 0, delay: 200 }}
        out:fly={{ x: fromIndex < toIndex ? -100 : 100, duration: 200, opacity: 0 }}
      >
        <ol class="flex flex-col justify-center items-center">
          {#each timeline[selected] as item, i}
            <TimelineItem {item} isLast={i == timeline[selected].length - 1} />
          {/each}
        </ol>
      </div>
    {/key}
  </div>
</div>
