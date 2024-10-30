<script>
  import Icon from '@components/Icon.svelte';
  import i18n from '@utils/i18n';

  export let skillSet;
</script>

<div class="flex flex-wrap gap-2 justify-center my-10 max-w-5xl mx-auto">
  {#each skillSet as skill}
    <div class={`flex gap-2 rounded h-14 w-64 p-2 bg-base-m text-txtPrimary transition hover:bg-base-s`}>
      <div class={`${skill?.color?.[1]} aspect-square rounded h-full flex justify-center items-center`}>
        <Icon class={`${skill?.icon} ${skill?.color?.[0]}`}>
          {#if !skill?.icon.includes('si-')}
            {skill?.icon}
          {/if}
        </Icon>
      </div>
      <div class="text-left">
        <p use:i18n>{skill.language}</p>
        <p use:i18n class="text-xs text-txtSecondary">{skill.details}</p>
      </div>
    </div>
  {/each}
</div>
