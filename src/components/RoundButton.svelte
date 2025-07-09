<script>
  let { highlighted = false, icon = '', colors = 'bg-txtPrimary text-base', ...rest } = $props();

  let highlightClasses = $derived(highlighted ? 'border-4 border-txtPrimary' : '');
</script>

<button type="button" class={`accent-circle ${colors} ${highlightClasses}`} {...rest}>
  <span class="material-symbols-rounded cursor-pointer text-2xl">{icon}</span>
</button>
