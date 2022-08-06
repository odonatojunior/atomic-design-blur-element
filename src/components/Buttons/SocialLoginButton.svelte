<script>
  import Icon from 'svelte-icons-pack/Icon.svelte';
import Component from '../Component.svelte';
  export let icon;
  export let name = '';
</script>


<Component >
  <button class="flex items-center gap-2 rounded-full py-2 px-12 bg-input border border-neutral-600 hover:bg-neutral-600 text-sm">
    <Icon src={icon} />
    {name}
  </button>
</Component>