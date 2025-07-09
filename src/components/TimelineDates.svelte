<script>
  import formatDate, { formatDuration } from '@utils/timeFormatter';

  let { date, end } = $props();
</script>

<div>
  <span use:formatDate class="font-medium text-sm">{date}</span>
  {#if end == 'present'}
    -
    <span class="font-medium text-sm">{end}</span>
  {:else if end}
    -
    <span use:formatDate class="font-medium text-sm">{end}</span>
  {/if}
</div>
{#if end == 'present'}
  <span class="font-medium text-xs text-txtSecondary">
    {formatDuration((new Date().setHours(4, 0, 0, 0) - date) / 1000, 'day')}
  </span>
{:else if end}
  <span class="font-medium text-xs text-txtSecondary">
    {formatDuration((end - date) / 1000)}
  </span>
{/if}
