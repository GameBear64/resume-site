<script>
  import Icon from './Icon.svelte';

  let { icon, color = 'bg-primary', children } = $props();
</script>

<div class={`flex gap-2 py-1 px-2 rounded w-max font-semibold ${color}`}>
  {#if icon}
    <Icon class={`si-${icon} text-md font-normal`} />
  {/if}
  {@render children?.()}
</div>
