<script>
  import { createEventDispatcher } from "svelte";

  function emphasizeClickedComponent({ target }) {
    const components = document.querySelectorAll(".isComponent");
    const closestComponent = target.closest(".isComponent");

    components.forEach((component) => {
      if (component === closestComponent) {
        component.classList.toggle("emphasis");
      } else {
        component.classList.toggle("blurComponent");
      }
    });
  }

  function removeEmphasisOnClickedComponent({ keyCode }) {
    const components = document.querySelectorAll(".isComponent");
    if (keyCode === 27) {
      components.forEach((component) => {
        component.classList.remove("emphasis", "blurComponent");
      });
    }
  }
</script>

<svelte:window on:keydown={removeEmphasisOnClickedComponent} />

<div
  class="isComponent"
  on:contextmenu|preventDefault|stopPropagation={emphasizeClickedComponent}
>
  <slot />
</div>

<style global>
  .isComponent.emphasis {
    z-index: 500;
    filter: blur(0px);
    transform: scale(1.5);
  }
  .isComponent.blurComponent {
    filter: blur(2px);
  }
</style>
