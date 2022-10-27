import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async () =>{	
	const response = await fetch(`http://localhost:7860/api/artists`);
	const artists = await response.json()
  
	if(artists) {    
    return artists;
	} else {
		throw error(404, 'Not found');
	}
}