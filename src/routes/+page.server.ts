import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async () =>{	
	const response = await fetch(`http://localhost:7860/api/media/634b3cd880a45b6ecd741c02`);
	const image = await response.json()
  
	if(image) {    
    return image;
	} else {
		throw error(404, 'Not found');
	}
}