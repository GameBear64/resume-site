<script>
  import { toggleSideBar, location } from '@utils/store';

  import SideBar from '@sections/Layout/SideBar.svelte';
  import Icon from '@components/Icon.svelte';
  import i18n from '@utils/i18n';
</script>

<nav class="flex justify-between p-3 md:px-10 border-b sticky top-0 w-full bg-base z-10 font-semibold">
  <!-- <div>{$location}</div> -->
  <div>
    <div class="flex md:hidden gap-6">
      <a href="#header" class:border-b={$location == 'header'}><Icon clickable>star</Icon></a>
      <a href="#skills" class:border-b={$location == 'skills'}><Icon clickable>psychology</Icon></a>
      <a href="#journey" class:border-b={$location == 'journey'}><Icon clickable>near_me</Icon></a>
      <a href="#projects" class:border-b={$location == 'projects'}><Icon clickable>handyman</Icon></a>
      <a href="#contacts" class:border-b={$location == 'contacts'}><Icon clickable>contact_support</Icon></a>
    </div>
  </div>
  <div class="flex gap-6">
    <div class="hidden md:flex gap-6">
      <a use:i18n class="active-visual" href="#header" class:border-b={$location == 'header'}>Header</a>
      <a use:i18n class="active-visual" href="#skills" class:border-b={$location == 'skills'}>Skills</a>
      <a use:i18n class="active-visual" href="#journey" class:border-b={$location == 'journey'}>Journey</a>
      <a use:i18n class="active-visual" href="#projects" class:border-b={$location == 'projects'}>Projects</a>
      <a use:i18n class="active-visual" href="#contacts" class:border-b={$location == 'contacts'}>Contacts</a>
    </div>
    <Icon clickable on:click={toggleSideBar} class="mx-2">settings</Icon>
  </div>
</nav>

<SideBar />
