<script>
  export let highlighted = false;
  export let icon = '';
  export let colors = 'bg-txtPrimary text-base';

  $: highlightClasses = highlighted ? 'border-4 border-txtPrimary' : '';
</script>

<button type="button" class={`accent-circle ${colors} ${highlightClasses}`} {...$$restProps} on:click>
  <span class="material-symbols-rounded cursor-pointer text-2xl">{icon}</span>
</button>
