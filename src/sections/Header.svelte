<script>
  import { onMount } from 'svelte';

  import Contacts from '@components/Contacts.svelte';

  import i18n from '@utils/i18n';
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
  class="h-[95vh] overflow-hidden"
  use:inView={{ threshold: 0.4 }}
  on:enter={() => ($location = 'header')}
>
  <div id="stars" class="opacity-50"></div>
  <div id="stars2" class="opacity-50"></div>
  <div id="stars3" class="opacity-50"></div>
  <div class="flex justify-center items-center text-center h-full">
    <div class="flex flex-col items-center">
      <h1 use:i18n class="text-6xl font-semibold">Vladimir Petrov</h1>
      <span use:i18n class="my-4"> Aspiring software developer, eager to learn and expand my skills.</span>
      <Contacts {animate} />
    </div>
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
