<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
    import './styles.css'
	export let data
	
</script>
  
  <div class="main">
	  {#each data.posts.slice(0, 1) as post}
	  <a href = posts/{post.slug} class="Latestpost"  style="background-image: url('{post.background}')">
		

	    <div class="latestpost">
		  <div class="information">
		    <h2>{post.title}</h2>
		    <div class="info">
			  <h3 class="date">{formatDate(post.date)}</h3>
			  <h3>{post.author}</h3>
		    </div>
		  </div>
		  </div>

		
	  </a>
	  {/each}
  
  	
	{#each data.posts.slice(1, 2) as post}
	<a href={post.slug} class="post2" style="background-image: url('{post.background}')">

		<div class="post2">
			<div class="information">
			<a href = posts/{post.slug}>
			<h2>{post.title}</h2></a>
			<div class="info">
				<h3 class="date">{formatDate(post.date)}</h3>
				<h3>{post.author}</h3>
			</div>
			</div>
	
	  
    </div>
	 </a>	
	{/each}
	
	{#each data.posts.slice(2, 3) as post}
	<a href=posts/{post.slug} class="post3" style="background-image: url('{post.background}')">
	

	    <div class="post3">		
		    <div class="information">
			<h2>{post.title}</h2>
			<div class="info">
			  <h3 class="date">{formatDate(post.date)}</h3>
			  <h3>{post.author}</h3>
			</div>
		  </div>
		  </div>
		


	</a>
	{/each}

	{#each data.posts.slice(3, 4) as post}
	<a href=posts/{post.slug} class="post4" style="background-image: url('{post.background}')">
	

	    <div class="post3">		
		    <div class="information">
			<h2>{post.title}</h2>
			<div class="info">
			  <h3 class="date">{formatDate(post.date)}</h3>
			  <h3>{post.author}</h3>
			</div>
		  </div>
		  </div>
		


	</a>
	{/each}

	{#each data.posts.slice(4, 5) as post}
	<a href=posts/{post.slug} class="post5" style="background-image: url('{post.background}')">
	

	    <div class="post3">		
		    <div class="information">
			<h2>{post.title}</h2>
			<div class="info">
			  <h3 class="date">{formatDate(post.date)}</h3>
			  <h3>{post.author}</h3>
			</div>
		  </div>
		  </div>
		


	</a>
	{/each}

	


</div>
<div class="footer">
	<button class="readmore" >Read More</button>

</div>

<style>
  

	.footer {
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 50px;
	}
	.readmore {
		border-radius: 12px;
		padding: 10px 20px;
		border: 0;
		text-align: center;
		align-items: center;
		justify-content: center;
		font-size: 18px;
	}

</style>