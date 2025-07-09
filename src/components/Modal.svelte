<script>
  import { self } from 'svelte/legacy';
  import { blur } from 'svelte/transition';
  import Icon from '@components/Icon.svelte';

  // Destructure props using $props rune
  let { children, buttons, title, close, easyClose, class: extraClass = '' } = $props();
</script>

<div
  transition:blur
  class="z-50 fixed right-0 top-0 flex h-screen w-screen flex-col items-center justify-center bg-stone-700/50"
  onclick={self(() => {
    if (easyClose && typeof close === 'function') close();
  })}
>
  <div
    class={`w-2/3 min-w-[20em] max-w-[80vw] rounded-lg bg-base px-4 py-3 text-onBase md:w-1/2 lg:max-w-[60vw] xl:w-1/3 ${extraClass}`}
  >
    <div class="flex justify-between pb-1" class:border-b-2={!!close} class:border-primary={!!close}>
      <p class="text-xl font-bold">
        {title}
      </p>
      {#if close}
        <button onclick={close}>
          <Icon>close</Icon>
        </button>
      {/if}
    </div>

    <!-- svelte-ignore slot_element_deprecated -->
    <div class="max-h-[80vh] overflow-auto py-2">
      {@render children()}
    </div>

    <div class="flex justify-end pt-4">
      {@render buttons?.()}
    </div>
  </div>
</div>
