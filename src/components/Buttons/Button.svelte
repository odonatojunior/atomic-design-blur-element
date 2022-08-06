<script>
  import Icon from "svelte-icons-pack";
  import BsHandbagFill from "svelte-icons-pack/bs/BsHandbagFill";
import Component from "../Component.svelte";

  export let name = '';
  export let hasIcon;
  export let icon = BsHandbagFill;
  export let _class = "";
</script>

<Component >
  <button
    class="px-4 py-2 rounded-md font-semibold text-sm {_class}"
  >
    {name}
    {#if hasIcon}
      <Icon src={icon} />
    {/if}
  </button>
</Component>
