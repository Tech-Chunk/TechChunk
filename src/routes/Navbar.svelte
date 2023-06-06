<script>
    import { currentUser } from '$lib/code/pocketbase';
    import { applyAction, enhance } from '$app/forms';
    import { pb } from "$lib/code/pocketbase";
    import HamburgerMenu from './hamburger.svelte';






    let isDropdownOpen = false 

    const handleDropdownClick = () => {
    isDropdownOpen = !isDropdownOpen 
   }

    const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
      if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return 
      isDropdownOpen = false
   }


</script>

<nav>

    <ul class='logo'>
        <li>
            <a class="logo" href="/">TechChunk.</a>
        </li>
    </ul>
    <ul class='nav'>
        <li>
            <a href="/">leaderboard</a>
        </li>

        <li>
            <a href="/about">About</a>
        </li>

        <li>
            <a href="/donations">Donations</a>

        </li>




    </ul>
    <ul class='login'>
        <li>
            {#if $currentUser}
            <button class="dropdown" on:click={handleDropdownClick} >
                {#if isDropdownOpen}
                    <img class= "profilebttn"src="/icons/close.svg" alt="close"/>
                {:else}
                    <img class= "close"src="/icons/profile.svg" alt="pfp"/>
                {/if}
            </button>
                <ul class="list" style:visibility={isDropdownOpen ? 'visible' : 'hidden'}>
                    <li><button class="profile">Profile</li>
                    <li><button class="settings">settings</button></li>
                    <li><form method="POST" action="/logout" use:enhance={() => {
                        return async ({ result }) => {
                            await applyAction(result);
                            pb.authStore.clear();
                        }
                    }}><input type = "submit" value="submit" class = "logout"> </form></li>
                </ul>
            {:else}
            <a class='login' href="/">Login</a>
            {/if}
       



        </li>
        
    </ul>

</nav>



<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

nav {
    display: flex;
    color: white;
    height: 50px;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    align-items: center;
    font-size: 18px;
    gap: 15px;
 }

.hamburger {
    display: none;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: white;
}

.logo {
    background-color: #1E1E1E;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 20px;
}
.nav {
    background-color: #1E1E1E;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 20px;
}



.hamburger {
    display: none;
}


.login {
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 20px;
}
ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
   
         text-decoration: none;

    }

    .list button, .logout {
        background-color: #1E1E1E;
        border: none;
        color: white;
        font-size: 18px;
        width: 150px;
        height: 40px;

    }
    
    .dropdown {
        background-color: #1E1E1E;
        border: none;
        cursor: pointer;
        outline: none;
        height: 49px;
        width: 60px;
        text-align: center;
    }
    
    .list {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        align-content: center;
        gap: 2px;
       
    }

    .profilebttn, .close{
        width: 40px;
        height: 40px;
    }
    
    .profile{
        border-radius: 10px 10px 5px 5px;
        text-align: left;
    }

    .settings {
        border-radius: 5px;
        text-align: left;

    }

    .logout {
        border-radius: 5px 5px 10px 10px;
        text-align: left;

    }

    .login {
        background-color: #1E1E1E;
    }


    @media (max-width: 480px) {


        .hamburger {
            display: block;
            cursor: pointer;
        }

        .nav {
            display: none;
        }

        .logo {
            display: none;
        }
        .login {
            display: none;
        }
    }

</style>