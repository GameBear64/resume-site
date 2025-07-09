<script>
  import { location } from '@utils/stores/settings';

  import Stats from '@components/Stats.svelte';
  import Skills from '@components/Skills.svelte';
  import inView from '@utils/inView';
  import i18n from '@utils/i18n';
  import { fly } from 'svelte/transition';

  let { experience, numberOfProjects } = $props();

  // NOTE: mobile browsers handle animations weirdly
  let isMobile = document.defaultView.innerWidth <= 768;

  let animateSkill = $state(Array(experience.length).fill(false));
</script>

<div id="skills" use:inView={{ threshold: 0.2 }} onenter={() => ($location = 'skills')}>
  <div class="bg-base-m slanted-2 flex justify-center py-12 mb-4 md:mb-0 xl:-mb-2 -mt-5">
    <div class="lg:w-1/2">
      <Stats {numberOfProjects} />
    </div>
  </div>

  {#each experience as section, i}
    {#if animateSkill[i] || isMobile}
      <div
        in:fly={{ duration: 500, x: i % 2 == 0 ? -2000 : 2000, opacity: 1 }}
        class={`text-black slanted-2 text-center py-12 px-4 my-4 md:my-0 xl:-my-2 noise ${section.color}`}
      >
        <h1 use:i18n class="text-3xl font-semibold">{section.title}</h1>

        {#if section.description}
          <div use:i18n class="max-w-3xl mx-auto my-4">
            {section.description}
          </div>
        {/if}

        {#if section.skills}
          <Skills skillSet={section.skills} />
        {/if}
      </div>
    {:else}
      <div class="mt-60 p-2" use:inView onenter={() => (animateSkill[i] = true)}></div>
    {/if}
  {/each}
</div>
