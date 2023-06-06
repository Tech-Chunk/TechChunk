<script>
    let menuOpen = false;
  
    function toggleMenu() {
      menuOpen = !menuOpen;
    }
  </script>
  
  <style>
    /* Default styles for the menu */
    .navbar {
      display: flex;
      align-items: center;
    }
  
    .menu {
      display: flex;
      list-style: none;
    }
  
    .menu li {
      margin-right: 20px;
    }
  
    .menu li a {
      text-decoration: none;
    }
  
    /* Styles for mobile view */
    @media only screen and (max-width: 768px) {
      .hamburger-menu {
        display: block;
        cursor: pointer;
      }
  
      .menu {
        display: none;
        flex-direction: column;
      }
  
      .menu.active {
        display: flex;
      }
    }
  </style>
  
  <nav class="navbar">
    <div class="hamburger-menu" on:click={toggleMenu}>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <ul class={menuOpen ? "menu active" : "menu"}>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  