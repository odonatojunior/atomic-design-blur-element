<script>
  import Component from "../Component.svelte";

  function preventFormFromSubmitting(event) {
    event.preventDefault();
  }
</script>

<Component>
  <form
    id="form"
    class="bg-dark relative z-10 p-8 ring-1 ring-neutral-800 rounded-lg focus-within:ring-fuchsia-800 shadow-2xl shadow-fuchsia-500/20"
    on:submit={preventFormFromSubmitting}
  >
    <slot />
  </form>
</Component>
