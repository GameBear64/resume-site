<script>
  import Contacts from '@components/Contacts.svelte';
  import Icon from '@components/Icon.svelte';

  import inView from '@utils/inView';
  import { location } from '@utils/store';

  let animate = false;
</script>

<div
  id="contacts"
  use:inView={{ threshold: 0.4 }}
  on:enter={() => ($location = 'contacts')}
  on:exit={() => {
    if ($location == 'contacts') $location = 'projects';
  }}
>
  <div class="bg-base-m slanted-2 text-center py-12 my-6 md:my-2">
    <!-- <h1 class="text-4xl font-bold">Contacts</h1> -->
  </div>
  <div class="flex justify-center my-6" use:inView on:enter={() => (animate = true)} on:exit={() => (animate = false)}>
    <Contacts {animate} />
  </div>
  <!-- <div class="flex justify-center gap-12 text-xl text-center">
    <div>
      <a class="border-b-2 font-semibold" href="https://fediring.net/">Fediring</a>
      <div class="my-2">
        <a href="https://fediring.net/previous?host=www.gam-resume-site.vercel.app">
          <Icon class="text-3xl">chevron_left</Icon>
        </a>
        <a href="https://fediring.net/random"><Icon class="text-3xl">shuffle</Icon></a>
        <a href="https://fediring.net/next?host=www.gam-resume-site.vercel.app">
          <Icon class="text-3xl">chevron_right</Icon>
        </a>
      </div>
    </div>
    <div>
      <a class="border-b-2 font-semibold" href="https://cs.sjoy.lol/">CSS JOY</a>
      <div class="my-2">
        <a href="https://webri.ng/webring/cssjoy/previous?via=www.gam-resume-site.vercel.app">
          <Icon class="text-3xl">chevron_left</Icon>
        </a>
        <a href="https://webri.ng/webring/cssjoy/random?via=www.gam-resume-site.vercel.app">
          <Icon class="text-3xl">shuffle</Icon>
        </a>
        <a href="https://webri.ng/webring/cssjoy/next?via=www.gam-resume-site.vercel.app">
          <Icon class="text-3xl">chevron_right</Icon>
        </a>
      </div>
    </div>
  </div> -->
  <span class="block text-center my-10">GamBar · Vladimir · Developer</span>
</div>
