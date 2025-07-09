<script>
  import { createBubbler } from 'svelte/legacy';

  const bubble = createBubbler();

  let { hollow = false, dense = true, clickable = false, children, ...rest } = $props();

  let data = $state();

  let iconType = $derived(data?.className?.includes('si-') ? `si text-2xl` : 'material-symbols-rounded');
</script>

<span
  {...rest}
  class={`${iconType} ${rest?.class || ''} align-sub select-none`}
  class:cursor-pointer={clickable}
  class:active-visual={clickable}
  style:letterSpacing={dense ? '-0.2em' : '0'}
  style:--full={hollow ? 0 : 1}
  bind:this={data}
>
  {@render children?.()}
</span>

<style>
  span {
    font-variation-settings: 'FILL' var(--full);
  }
</style>
