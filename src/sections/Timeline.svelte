<script>
  import { fly } from 'svelte/transition';

  import inView from '@utils/inView';
  import { location } from '@utils/store';

  import Icon from '@components/Icon.svelte';
  import i18n, { t } from '@utils/i18n';
  import formatDate, { formatDuration } from '@utils/timeFormatter';
  import TimelineItem from '@components/TimelineItem.svelte';

  export let timeline;

  let selected = 'professional';
</script>

<div id="experience" use:inView={{ threshold: 0.2 }} on:enter={() => ($location = 'experience')}>
  <div class="bg-base-m slanted-2 text-center py-12 my-6 md:my-2">
    <h1 use:i18n class="text-4xl font-bold">Experience</h1>
  </div>

  <div class="w-full flex justify-center px-4 my-10">
    <button
      use:i18n
      class="font-semibold bg-base-m hover:bg-base-s p-2 rounded-l-md w-60"
      class:border={selected == 'professional'}
      on:click={() => (selected = 'professional')}
    >
      Professional
    </button>
    <div class="border-r-2 border-base"></div>
    <button
      use:i18n
      class="font-semibold bg-base-m hover:bg-base-s p-2 rounded-r-md w-60"
      class:border={selected == 'personal'}
      on:click={() => (selected = 'personal')}
    >
      Personal
    </button>
  </div>

  <div class="w-full flex justify-center px-4 my-10">
    {#key timeline[selected]}
      <div
        class="card max-w-4xl"
        in:fly={{ x: selected == 'professional' ? -100 : 100, duration: 200, opacity: 0, delay: 200 }}
        out:fly={{ x: selected == 'professional' ? 100 : -100, duration: 200, opacity: 0 }}
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
