<script lang="ts">
    import { applyAction, enhance } from "$app/forms";
    import { pb } from "$lib/code/pocketbase";
    import styles from './styles.css';
</script>




<form method="POST" class="card" use:enhance={() => {
    return async ({ result }) => {
       pb.authStore.loadFromCookie(document.cookie);
       await applyAction(result)
    };
}}>
    <div class="grid">
        <div class="login">
        <h1>Log In</h1>
        <div class="signup">
            <input type = "email" name="email" placeholder="Email" class="input">
            <input type = "password" name="password" placeholder="Password" class="input">
            <button type="submit" class="button">login</button>
        </div>
    </div>
    </div>
</form>