<script>
  import BsEye from "svelte-icons-pack/bs/BsEye";
  import BsEyeSlash from "svelte-icons-pack/bs/BsEyeSlash";
  import Button from "../Buttons/Button.svelte";
  import Component from "../Component.svelte";

  export let name;
  export let id;
  export let placeholder = "";
  export let type = "text";
  export let password = false;

  function togglePassword() {
    if (type == "password") {
      type = "text";
    } else {
      type = "password";
    }
  }
</script>

<Component>
  <div class="flex flex-col gap-2 mb-4">
    <label for={id} class="after:content-['*'] after:text-red-600 after:ml-1">
      <span>{name}</span>
    </label>
    <div class="relative overflow-hidden">
      <input
        {type}
        {placeholder}
        {id}
        class="w-full text-sm bg-input border border-neutral-600 p-3 rounded-md focus-within:border-fuchsia-400 outline-none placeholder:text-neutral-50/20"
      />
      {#if password}
        <div
          class="absolute h-full top-0 right-0 flex"
          on:click={togglePassword}
        >
          <Button
            _class="h-full"
            hasIcon={true}
            icon={type == "password" ? BsEye : BsEyeSlash}
          />
        </div>
      {/if}
    </div>
  </div>
</Component>
