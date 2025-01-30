<script>
  import { fade, fly } from 'svelte/transition';

  import i18n from '@utils/i18n';

  import Icon from '@components/Icon.svelte';
  import RoundButton from '@components/RoundButton.svelte';
  import SideFooter from '@components/SideFooter.svelte';

  import { sidebarOpen, toggleSideBar, preferences, setTheme, setAccent } from '@utils/store';

  function handleEscape(key) {
    if (key.keyCode == 27 && $sidebarOpen) {
      toggleSideBar();
    }
  }

  const AccentColors = Object.freeze({
    pink: 'bg-pink-600',
    violet: 'bg-violet-600',
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    orange: 'bg-orange-600',
  });
</script>

<svelte:window on:keydown={handleEscape} />

{#if $sidebarOpen}
  <div transition:fade class="fixed inset-0 bg-stone-700 bg-opacity-50 z-50" on:click|self={toggleSideBar}></div>
  <div
    transition:fly={{ x: 100 }}
    class="bg-base fixed inset-y-0 right-0 p-4 md:p-10 max-w-md w-screen flex justify-between flex-col z-50 overflow-scroll"
  >
    <div>
      <div class="w-full flex justify-end">
        <Icon clickable on:click={toggleSideBar}>close</Icon>
      </div>
      <h2 use:i18n class="my-2 text-2xl font-semibold border-b">Settings</h2>
      <div class="my-10">
        <h3 use:i18n class="my-1 text-xl font-semibold">Theme</h3>
        <div class="flex gap-2">
          <RoundButton icon="light_mode" colors="bg-yellow-500 text-white" on:click={() => setTheme('light')} />
          <RoundButton icon="dark_mode" colors="bg-gray-700 text-white" on:click={() => setTheme('dark')} />
        </div>
      </div>
      <div class="my-10">
        <h3 use:i18n class="my-1 text-xl font-semibold">Accent</h3>
        <div class="flex gap-2">
          {#each Object.entries(AccentColors) as color}
            <RoundButton
              colors={color[1]}
              on:click={() => setAccent(color[0])}
              highlighted={$preferences.accent == color[0]}
            />
          {/each}
        </div>
      </div>
      <div class="my-10">
        <h3 use:i18n class="my-1 text-xl font-semibold">Language</h3>
        <select class="input" bind:value={$preferences.language}>
          <option use:i18n value="en">English</option>
          <option use:i18n value="bg">Bulgarian</option>
          <option use:i18n value="de">German</option>
          <option use:i18n value="jp">Japanese</option>
        </select>
      </div>
      <div class="my-10">
        <h3 use:i18n class="my-1 text-xl font-semibold">Splash screen</h3>
        <p use:i18n class="text-txtSecondary text-sm">
          The splash screen appears only once per hour, turn that timer off here.
        </p>
        <label for="timer" class="h-6 relative inline-block my-1">
          <input id="timer" type="checkbox" bind:checked={$preferences.splashTimer} />
          <span use:i18n>Timer</span>
        </label>
      </div>
    </div>
    <SideFooter />
  </div>
{/if}
