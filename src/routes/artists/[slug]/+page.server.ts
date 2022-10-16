import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const response = await fetch(`http://localhost:7860/api/artists`);
	const artists = await response.json();

	if (artists) {
		return artists.docs.filter(
			(artist: { firstName: string }) => artist.firstName.toLowerCase() === params.slug
		)[0];
	} else {
		throw error(404, 'Not found');
	}
};
