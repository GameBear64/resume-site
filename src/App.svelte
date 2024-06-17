<script>
  import { preferences } from '@utils/store';

  import NavBar from '@sections/Layout/NavBar.svelte';
  import SplashScreen from '@sections/Layout/SplashScreen.svelte';

  import Header from '@sections/Header.svelte';
  import Timeline from '@sections/Timeline.svelte';
  import SkillSection from '@sections/SkillSection.svelte';
  import Projects from '@sections/Projects.svelte';
  import Footer from '@sections/Footer.svelte';

  import { timeline, projects, experience } from './data.json';

  $: document.body.className = `theme-${$preferences.theme} theme-${$preferences.accent}`;
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
  <SkillSection {experience} numberOfProjects={projects.length} />
  <Timeline {timeline} />
  <Projects {projects} />
  <Footer />
</main>

<!-- TODO: -->
<!-- Grammar check for both languages -->
<!-- Make a settings applier like in pantone wall -->
<!-- Turn to bg -> reload page -> turn to en -> bug, original text is not applied -->
