<script>
	import Header from './Header.svelte';
	import './layout.css';
	import { currentUser } from '$lib/code/pocketbase';
	import Navbar from './Navbar.svelte';
	import hamburger from './hamburger.svelte'
</script>

<div class="app">
	<Navbar />
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		
	</footer>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
	
</style>
