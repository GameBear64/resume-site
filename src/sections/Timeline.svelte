<script>
  import { fade } from 'svelte/transition';

  import inView from '@utils/inView';
  import { location } from '@utils/store';

  import Icon from '@components/Icon.svelte';
  import i18n, { t } from '@utils/i18n';

  export let timeline;

  let animate = false;

  const increaseBy = 3;
  let show = increaseBy;

  function increaseTimeline() {
    if (show + increaseBy >= timeline.length) {
      show = timeline.length;
    } else {
      show += increaseBy;
    }
  }
</script>

<div id="journey" use:inView={{ threshold: 0.2 }} on:enter={() => ($location = 'journey')}>
  <div class="bg-base-m slanted-2 text-center py-12 my-6 md:my-2">
    <h1 use:i18n class="text-4xl font-bold">The story so far:</h1>
  </div>
  <ol class="max-w-3xl m-auto flex flex-col items-center my-20 px-4 md:px-10">
    {#if animate}
      {#each { length: show } as _, i}
        <li
          in:fade|global={{ delay: 500 * (i % increaseBy) }}
          class="md:border-primary md:border-l-2 transition-colors delay-500 ease-in flex flex-start relative w-full"
        >
          <div class="hidden md:block">
            <Icon class="bg-primary size-10 flex items-center justify-center rounded-full -ml-5 text-white">
              {timeline[i].icon}
            </Icon>
            {#if i == show - 1}
              <span
                class="absolute bottom-0 bg-primary size-6 flex items-center justify-center rounded-full -ml-3 text-white"
              ></span>
            {/if}
          </div>

          <div class="card md:ml-6 mb-10 pb-6 w-full">
            <div class="flex justify-between flex-wrap mb-4 text-primary-more">
              <p use:i18n class="font-bold text-xl">{timeline[i].title}</p>
              <p class="font-medium text-sm">{timeline[i].date}</p>
            </div>
            <p use:i18n class="text-txtPrimary text-wrap">
              {timeline[i].description}
            </p>
            {#if timeline[i]?.links?.length > 0}
              <div class="flex gap-4 items-center mt-6">
                {#each timeline[i].links as link}
                  <a use:i18n class="btn" target="_blank" href={link.url}>{link.name}</a>
                {/each}
              </div>
            {/if}
          </div>
        </li>
      {/each}
      {#if show !== timeline.length}
        <div in:fade|global class="text-center">
          <button use:i18n class="btn" on:click={increaseTimeline}>Show more</button>
        </div>
      {/if}
    {:else}
      {#each { length: timeline.length } as _}
        <div class="mt-60 p-2" use:inView on:enter={() => (animate = true)}></div>
      {/each}
    {/if}
  </ol>
</div>
