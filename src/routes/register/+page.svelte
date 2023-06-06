<script lang="ts">
    import { applyAction, enhance } from "$app/forms";
    import { pb } from "$lib/code/pocketbase";
</script>




<form method="POST" class="card" use:enhance={() => {
    return async ({ result }) => {
       pb.authStore.loadFromCookie(document.cookie);
       await applyAction(result)
    };
}}>
    <h1>Sign Up</h1>
    <div class="signup">
        <input type = "email" name="email" placeholder="Email" class="input">
        <input type = "password" name="password" placeholder="Password" class="input">
        <input type = "password" name="passwordConfirm" placeholder="Confirm Password" class="input">
        <button type="submit" class="button">Sign Up</button>
    </div>
</form>