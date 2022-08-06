<script>
  function emphasizeClickedComponent({ target }) {
    // const components = document.querySelectorAll(".isComponent");
    // components.forEach((item) => {
    //   console.log(item !== target.parentElement)
    //   if(item === target){
    //     target.classList.toggle('emphasis')
    //   }
    //   item.classList.toggle("blurComponent");
    // });
  }
</script>

<div class="isComponent" >
  <slot />
</div>

<style global>
  .isComponent.emphasis {
    transform: scale(1.1);
    filter: blur(0);
  }
  .isComponent.blurComponent {
    filter: blur(2px);
  }
</style>
