<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  import inView from '@utils/inView';
  import i18n from '@utils/i18n';

  let { numberOfProjects } = $props();

  const settings = {
    duration: 4000,
    easing: cubicOut,
    // don't ask
    interpolate: (a, b) => t => Math.round(a + t * (b - a)),
  };

  const years = tweened(0, settings);
  const projects = tweened(0, settings);
  const motivation = tweened(0, settings);

  function setStats() {
    $years = new Date().getFullYear() - 2016;
    $projects = numberOfProjects;
    $motivation = 100;
  }
</script>

<div class="flex justify-between text-center gap-4 px-2" use:inView onenter={setStats}>
  <div class="rounded flex flex-col items-center p-1 md:p-4">
    <span class="text-4xl font-bold">{$years}</span> <span use:i18n>years of learning</span>
  </div>
  <div class="rounded flex flex-col items-center p-1 md:p-4">
    <span class="text-4xl font-bold">{$projects}</span> <span use:i18n>featured personal projects</span>
  </div>
  <div class="rounded flex flex-col items-center p-1 md:p-4">
    <span class="text-4xl font-bold">{$motivation}%</span> <span use:i18n>motivated and ready</span>
  </div>
</div>

<style>
</style>
