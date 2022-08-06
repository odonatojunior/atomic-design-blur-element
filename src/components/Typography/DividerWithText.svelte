<script>
  export let text = "";
</script>

<div
  class="divider flex justify-center items-center w-full gap-2 before:bg-neutral-600 after:bg-neutral-600 my-4"
>
  <p class=" text-sm text-center text-neutral-400">{text}</p>
</div>

<style>
  .divider {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
  }
  .divider::before,
  .divider::after {
    flex: 1;
    content: "";
    width: 32px;
    height: 1px;
    display: inline-block;
  }
</style>
