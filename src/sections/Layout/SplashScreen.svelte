<script>
  import { onMount } from 'svelte';
  import { cubicIn } from 'svelte/easing';
  import { fly, slide } from 'svelte/transition';

  import { lastSplash, preferences } from '@utils/stores/settings';
  import i18n from '@utils/i18n';

  let splash = $state($lastSplash < new Date().getTime() || !$preferences.splashTimer);
  let greeting = $state(false);

  onMount(() => {
    setTimeout(() => {
      greeting = true;
    }, 500);

    setTimeout(() => {
      if (splash) {
        lastSplash.set(new Date().getTime() + 60 * 60 * 1000); // 60 minutes
        splash = false;
      }
    }, 1500);
  });
</script>

{#if splash}
  <div
    out:fly={{ y: '-100vh', duration: 1000, opacity: 1, easing: cubicIn }}
    class="fixed inset-0 bg-base-x z-50 flex justify-center items-center"
  >
    {#if greeting}
      <span use:i18n transition:slide class="text-4xl font-semibold">Welcome!</span>
    {/if}
  </div>
{/if}
