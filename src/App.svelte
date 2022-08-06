<script>
  import SocialLoginButton from "./components/Buttons/SocialLoginButton.svelte";
  import Container from "./components/Layout/Container.svelte";
  import BsGoogle from "svelte-icons-pack/bs/BsGoogle";
  import BsTwitter from "svelte-icons-pack/bs/BsTwitter";
  import BsHandbagFill from "svelte-icons-pack/bs/BsHandbagFill";
  import Form from "./components/Forms/Form.svelte";
  import DividerWithText from "./components/Typography/DividerWithText.svelte";
  import FormControl from "./components/Forms/FormControl.svelte";
  import Button from "./components/Buttons/Button.svelte";
  import Icon from "svelte-icons-pack";
  import Component from "./components/Component.svelte";
</script>

<main class="dark:text-white">
  <Container>
    <Form>
      <Component>
        <div class="flex items-center justify-between gap-4">
          <h4 class="text-lg font-semibold text-neutral-300">
            Welcome to Holi, login with
          </h4>
          <div class="p-3 bg-fuchsia-600 rounded-lg">
            <Icon title="logo" src={BsHandbagFill} />
          </div>
        </div>
      </Component>

      <Component>
        <div class="flex justify-between gap-4 my-4">
          <SocialLoginButton icon={BsGoogle} name="Google" />
          <SocialLoginButton icon={BsTwitter} name="Twitter" />
        </div>
      </Component>

      <Component>
        <DividerWithText text="Or continue with email" />
      </Component>

      <Component>
        <FormControl name="E-mail" id="email" placeholder="mail@example.com" />
        <FormControl
          name="Password"
          id="password"
          placeholder="Your password"
          type="password"
          password={true}
        />
      </Component>

      <Component>
        <div class="flex justify-between items-center mt-8">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="text-sm hover:underline text-neutral-400"
            >Don't have an account? Register</a
          >
          <Button name="Login" _class="bg-fuchsia-700 hover:bg-fuchsia-800" />
        </div>
      </Component>
    </Form>
  </Container>
</main>