<script lang="ts">
    import { applyAction, enhance } from '$app/forms';
    import { pb } from "$lib/code/pocketbase";

    let isHamburgerOpen = false;

    const handleHamburgerClick = () => {
        isHamburgerOpen = !isHamburgerOpen;
        console.log("hamburger Clicked")
    };

    const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
        if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return;
        isHamburgerOpen = false;
    };
</script>

<div class="hamburger">
    <button class="hamburger" on:click={handleHamburgerClick}>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </button>
</div> 
<ul class="list" class:open={isHamburgerOpen}>
<li>

<button class="profile">Profile</button></li>
    <li><button class="settings">Settings</button></li>
    <li>
        <form method="POST" action="/logout" use:enhance={() => {
            return async ({ result }) => {
                 await applyAction(result);
                  pb.authStore.clear();
                        };
                    }}>
                        <input type="submit" value="Logout" class="logout"/>
                    </form>
                </li>







</ul>


<style>
    .menu-wrapper {
        position: relative;
    }

    .menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease-in-out;
    }

    .open .menu-overlay {
        opacity: 1;
        pointer-events: auto;
    }

    .menu-content {
        position: fixed;
        top: 0;
        right: 0;
        width: 300px;
        height: 100%;
        background-color: #1E1E1E;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        z-index: 2;
    }

    .open .menu-content {
        transform: translateX(0%);
    }

    ul {
        list-style-type: none;
        padding: 20px;
    }

    li {
        margin-bottom: 10px;
    }

    a {
        display: block;
        color: white;
        text-decoration: none;
        font-size: 18px;
    }

    .profile,
    .settings,
    .logout {
        background-color: #1E1E1E;
        border: none;
        color: white;
        font-size: 18px;
        width: 100%;
        height: 40px;
    }

    .hamburger {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 20px;
        cursor: pointer;
    }

    .bar {
        width: 100%;
        height: 3px;
        background-color: white;
        margin-bottom: 5px;
    }

    @media (min-width: 481px) {
        .menu-wrapper {
            display: none;
        }
    }
</style>
