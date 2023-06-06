<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
    import type { Post } from '$lib/types'
    export let data
	import styles from './styles.css'
</script>

<div class="main">
	 
    <section>
        <ul class="posts">
            {#each data.posts as post}
			<a href={post.slug} class="post" style="background-image: url('{post.background}')">
                <li class="post">
					<div class="information" >
						<a href=posts/{post.slug} class="title">{post.title}</a>
						<p class="date">{formatDate(post.date)}</p>
					</div>	
                </li>
				
            </a>
            {/each}
        </ul>
    </section>

</div>
