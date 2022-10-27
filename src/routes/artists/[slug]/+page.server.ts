import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const response = await fetch(`http://localhost:7860/api/artists`);
	const artists = await response.json();
	fetchInstagram()
	if (artists) {
		return artists.docs.filter(
			(artist: { firstName: string }) => artist.firstName.toLowerCase() === params.slug
		)[0];
	} else {
		throw error(404, 'Not found');
	}
};

const fetchInstagram = async () => {
		// Hack from https://stackoverflow.com/a/47243409/2217533
		const response = await fetch(
			`https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"787132","first":16,"after":null}`
		)
		const { data } = await response.json()
		console.log(data);
		// const photos = data.user.edge_owner_to_timeline_media.edges.map(
		// 	({ node }) => {
		// 		const { id } = node
		// 		const comments = node.edge_media_to_comment.count
		// 		const likes = node.edge_media_preview_like.count
		// 		const caption = node.edge_media_to_caption.edges[0].node.text
		// 		const thumbnail = node.thumbnail_resources.find(
		// 			thumbnail => thumbnail.config_width === 36
		// 		)
		// 		console.log(thumbnail);
				
		// 		const { src, config_width: width, config_height: height } = thumbnail
		// 		const url = `https://www.instagram.com/p/${node.shortcode}`
		// 		return {
		// 			id,
		// 			caption,
		// 			src,
		// 			width,
		// 			height,
		// 			url,
		// 			comments,
		// 			likes,
		// 		}
		// 	}
		// )

		// console.log(photos);
		
}