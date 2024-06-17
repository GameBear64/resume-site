<script>
  import Contacts from '@components/Contacts.svelte';

  import inView from '@utils/inView';
  import { location } from '@utils/store';

  let animate = false;
</script>

<div
  id="contacts"
  use:inView={{ threshold: 0.4 }}
  on:enter={() => ($location = 'contacts')}
  on:exit={() => ($location = 'projects')}
>
  <div class="bg-base-m slanted-2 text-center py-12 my-6 md:my-2">
    <!-- <h1 class="text-4xl font-bold">Contacts</h1> -->
  </div>
  <div class="overflow-hidden">
    <div
      class="flex justify-center my-6"
      use:inView
      on:enter={() => (animate = true)}
      on:exit={() => (animate = false)}
    >
      <Contacts {animate} />
    </div>
    <span class="block text-center my-10">GamBar · Vladimir · Developer</span>
  </div>
</div>
