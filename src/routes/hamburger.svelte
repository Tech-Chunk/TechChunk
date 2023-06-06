<script>
	import Hamburger from "hamburger-menu-svelte";
	const menu_list = [
		{ name: "Home", url: "./" },
		{ name: "Github", url: "https://github.com/itsuki-guitar/hamburger-menu-svelte" },
		{ name: "Svelte top", url: "https://svelte.dev/" },
		{ name: "npm", url: "https://www.npmjs.com/" }
	];
</script>

<main>
	<header>
		<h1>Example</h1>
		<Hamburger {menu_list}/>
	</header>
	<p>This is an example of humburger-menu-svelte.</p>
</main>

<style>
	header {
		height: 40px;
		display: flex;
		align-items: center;
		padding:10px 20px;
	}
	p {
		text-align: center;
		color: var(--menuColor);
	}

	h1 {
		font-size: 20px;
		color: #DA0037;
	}

	@media (max-width: 768px) {
		h1 {
			display: block;
    		margin-left: auto;
    		margin-right: auto;
		}
	}

	@media (min-width: 768px) {
		header {
			justify-content: space-between;
		}
	}
</style>