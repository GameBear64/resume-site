<script>
  import ProjectCard from '@components/ProjectCard.svelte';
  import i18n from '@utils/i18n';

  import inView from '@utils/inView';
  import { location } from '@utils/store';

  export let projects;
</script>

<div id="projects" use:inView={{ threshold: 0.1 }} on:enter={() => ($location = 'projects')}>
  <div class="bg-base-m slanted-2 text-center py-12 my-12 md:my-2">
    <h1 use:i18n class="text-4xl font-bold">Projects</h1>
  </div>
  <div class="flex flex-wrap justify-around items-center gap-10 mx-4 my-12">
    {#each projects as project}
      <ProjectCard {...project} />
    {/each}
  </div>
  <div use:i18n class="text-2xl text-center font-semibold my-10">...and many other smaller ones!</div>
</div>
