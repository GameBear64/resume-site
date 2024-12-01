<script>
  import formatDate, { formatDuration } from '@utils/timeFormatter';

  export let date;
  export let end;
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
    {formatDuration((new Date().setHours(3, 0, 0, 0) - date) / 1000)}
  </span>
{:else if end}
  <span class="font-medium text-xs text-txtSecondary">
    {formatDuration((end - date) / 1000)}
  </span>
{/if}
