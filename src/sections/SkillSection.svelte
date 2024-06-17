<script>
  import { location } from '@utils/store';

  import Stats from '@components/Stats.svelte';
  import Skills from '@components/Skills.svelte';
  import inView from '@utils/inView';
  import i18n from '@utils/i18n';

  export let experience;
  export let numberOfProjects;
</script>

<div id="skills" use:inView={{ threshold: 0.2 }} on:enter={() => ($location = 'skills')}>
  <div class="bg-base-m slanted-2 flex justify-center py-12 mb-4 md:mb-0 xl:-mb-2 -mt-5">
    <div class="lg:w-1/2">
      <Stats {numberOfProjects} />
    </div>
  </div>
  <div class="bg-yellow-300 text-black slanted-2 text-center py-12 px-4 my-4 md:my-0 xl:-my-2">
    <h1 use:i18n class="text-3xl font-semibold">JavaScript</h1>
    <div use:i18n class="max-w-3xl mx-auto my-4">
      JavaScript is my language of choice for doing almost anything, but I am looking to expand my arsenal.
    </div>
    <Skills skillSet={experience.js} />
  </div>
  <div class="bg-purple-500 text-black slanted-2 text-center py-12 px-4 my-4 md:my-0 xl:-my-2">
    <h1 use:i18n class="text-3xl font-semibold">C Sharp</h1>
    <div use:i18n class="max-w-3xl mx-auto my-4">
      Started learning C# in SoftUni on 13-05-2024. Stay tuned for updates!
    </div>
  </div>
  <div class="bg-blue-500 text-black slanted-2 text-center py-12 px-4 my-4 md:my-0 xl:-my-2">
    <h1 use:i18n class="text-3xl font-semibold">Tools</h1>
    <Skills skillSet={experience.other} />
  </div>
  <div class="bg-neutral-200 text-black slanted-2 text-center py-12 px-4 my-4 md:my-0 xl:-my-2">
    <h1 use:i18n class="text-3xl font-semibold">Soft Skills</h1>
    <div use:i18n class="max-w-3xl mx-auto my-4">
      Given my experience in working with others on large projects, I have gained some valuable skills for working in a
      team with other people.
    </div>
    <Skills skillSet={experience.softSkills} />
  </div>
</div>
