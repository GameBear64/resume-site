<script>
  import Icon from '@components/Icon.svelte';
  import { t } from '@utils/i18n';

  export let skillSet;

  let select = skillSet[0].language;

  $: selected = skillSet.find(skill => skill.language == select);
</script>

<div class="flex flex-wrap gap-2 justify-center my-10">
  {#each skillSet as skill}
    <div
      on:click={() => (select = skill.language)}
      class={`${skill?.color?.[1] || 'border-neutral-800'} ${skill?.color?.[2]} flex flex-col border cursor-pointer rounded px-2 py-4 min-w-32 transition duration-700 hover:translate-y-1`}
    >
      <Icon class={`si-${skill?.icon} ${skill?.color?.[0]}`} />
      <span>
        {$t(skill.language)}
      </span>
    </div>
  {/each}
</div>

<div class={`card max-w-xl mx-auto ${selected?.color?.[1] || 'border-neutral-800'} ${selected?.color?.[2]}`}>
  {$t(selected.details)}
</div>
