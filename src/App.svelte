<script>
  import { run } from 'svelte/legacy';

  import { preferences, TutorialPassed } from '@utils/stores/settings';

  import NavBar from '@sections/Layout/NavBar.svelte';
  import SplashScreen from '@sections/Layout/SplashScreen.svelte';

  import Header from '@sections/Header.svelte';
  import Timeline from '@sections/Timeline.svelte';
  import SkillSection from '@sections/SkillSection.svelte';
  import Projects from '@sections/Projects.svelte';
  import Footer from '@sections/Footer.svelte';

  import { timeline, projects, experience } from './data.json';
  import Tutorial from '@components/Tutorial.svelte';

  run(() => {
    document.body.className = `theme-${$preferences.accent} theme-${$preferences.theme}`;
  });
</script>

<main class="flex minimum:hidden justify-center items-center h-screen text-center bg-base text-txtPrimary">
  Stop trying to break my site.
  <br />
  <br />
  No phone is this small!
</main>

<main class="hidden minimum:block bg-base text-txtPrimary">
  <SplashScreen />
  <NavBar />
  <Header />
  {#if !$TutorialPassed}
    <Tutorial />
  {/if}
  <SkillSection {experience} numberOfProjects={projects.length} />
  <Timeline {timeline} />
  <Projects {projects} />
  <Footer />
</main>
