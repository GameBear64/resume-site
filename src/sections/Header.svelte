<script>
  import { onMount } from 'svelte';

  import Contacts from '@components/Contacts.svelte';
  import Icon from '@components/Icon.svelte';

  import i18n, { t } from '@utils/i18n';
  import { tooltip } from '@utils/tooltip';
  import inView from '@utils/inView';
  import { location } from '@utils/store';

  let animate = false;

  onMount(() => {
    setTimeout(() => {
      animate = true;
    }, 500);
  });
</script>

<div
  id="header"
  class="h-[95vh] overflow-hidden relative"
  use:inView={{ threshold: 0.6 }}
  on:enter={() => ($location = 'header')}
>
  <div id="stars" class="opacity-50"></div>
  <div id="stars2" class="opacity-50"></div>
  <div id="stars3" class="opacity-50"></div>
  <div class="flex justify-center items-center text-center h-full">
    <div class="flex flex-col md:flex-row gap-10 text-left z-10 mx-4">
      <img class="size-60 rounded-lg mx-auto" alt="Head-shot" src={`./profile.jpg`} />
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <h1 use:i18n class="text-4xl md:text-6xl font-semibold">Vladimir Petrov</h1>
          <div class="text-sm flex gap-4">
            <span use:tooltip={$t('Location')}>
              <Icon hollow class="text-md">location_on</Icon> <span use:i18n>Bulgaria, Vratsa</span>
            </span>
            <span use:tooltip={$t('Birthday 🎉')}>
              <Icon hollow class="text-md">cake</Icon> <span use:i18n>April 18th</span>
            </span>
            <span use:tooltip={$t('Current job occupation')}>
              <Icon hollow class="text-md">work</Icon> <span use:i18n>CFM Media</span>
            </span>
          </div>
          <p class="my-4" use:i18n>Software developer, eager to learn and expand my skills.</p>
          <Contacts {animate} />
        </div>
        <a href="./vladimir-resume.pdf" target="_blank">
          <button class="btn">PDF Resume <Icon class="ml-2 text-lg">arrow_forward_ios</Icon></button>
        </a>
      </div>
    </div>
  </div>
  <div
    class="absolute bottom-14 left-1/2 transform -translate-x-1/2 cursor-pointer"
    on:click={() => window.scrollTo(0, 200)}
  >
    <Icon class="text-4xl animate-bounce">stat_minus_3</Icon>
  </div>
</div>

<style lang="scss">
  /* CREDIT */
  // https://codepen.io/sarazond/pen/LYGbwj?editors=1100
  @function multiple-box-shadow($n) {
    $value: '#{random(2000)}px #{random(2000)}px var(--txtPrimary)';
    @for $i from 2 through $n {
      $value: '#{$value} , #{random(2000)}px #{random(2000)}px var(--txtPrimary)';
    }

    @return unquote($value);
  }
  $shadows-small: multiple-box-shadow(1000);
  $shadows-medium: multiple-box-shadow(400);
  $shadows-big: multiple-box-shadow(100);

  #stars {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: $shadows-small;
    animation: animStar 50s linear infinite;

    &:after {
      content: ' ';
      position: absolute;
      top: 2000px;
      width: 1px;
      height: 1px;
      background: transparent;
      box-shadow: $shadows-small;
    }
  }
  #stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: $shadows-medium;
    animation: animStar 100s linear infinite;
    &:after {
      content: ' ';
      position: absolute;
      top: 2000px;
      width: 2px;
      height: 2px;
      background: transparent;
      box-shadow: $shadows-medium;
    }
  }
  #stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: $shadows-big;
    animation: animStar 150s linear infinite;
    &:after {
      content: ' ';
      position: absolute;
      top: 2000px;
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: $shadows-big;
    }
  }

  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
  }
</style>
