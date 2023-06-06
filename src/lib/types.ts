export type Categories = 'sveltekit' | 'svelte'

export type Post = {
    [x: string]: string | null | undefined;
    background: string;
	title: string
	slug: string
	description: string
	date: string
    author: string
	categories: Categories[]
	published: boolean
}
