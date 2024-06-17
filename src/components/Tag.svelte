<script>
  import Icon from './Icon.svelte';

  export let icon;
  export let color = 'bg-primary';
</script>

<div class={`flex gap-2 py-1 px-2 rounded w-max font-semibold ${color}`}>
  {#if icon}
    <Icon class={`si-${icon} text-md font-normal`} />
  {/if}
  <slot />
</div>
