<script>
  export let hollow = false;
  export let dense = true;
  export let clickable = false;

  let data;

  $: iconType = data?.className?.includes('si-') ? `si text-2xl` : 'material-symbols-rounded';
</script>

<span
  {...$$restProps}
  class={`${iconType} ${$$restProps?.class || ''} align-sub`}
  class:cursor-pointer={clickable}
  class:active-visual={clickable}
  style:letterSpacing={dense ? '-0.2em' : '0'}
  style:--full={hollow ? 0 : 1}
  on:click
  bind:this={data}
>
  <slot />
</span>

<style>
  span {
    font-variation-settings: 'FILL' var(--full);
  }
</style>
