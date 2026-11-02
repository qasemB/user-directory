import type { Photo } from "../types/photo";
import { fetchJson } from "./api";

interface ApiPhoto {
  id: number;
  albumId: number;
  title: string;
}

// JSONPlaceholder returns 5000 photos, so we only request a first page.
const PHOTOS_LIMIT = 24;

export async function getPhotos(): Promise<Photo[]> {
  const data = await fetchJson( `/photos?_limit=${ PHOTOS_LIMIT }` );

  if ( !Array.isArray( data ) ) {
    throw new Error( "Invalid photos response." );
  }

  const apiPhotos = data as ApiPhoto[];

  return apiPhotos.map( ( photo ) => ( {
    id: photo.id,
    albumId: photo.albumId,
    title: photo.title,
    // The API's own image URLs point to a placeholder host that is unreliable,
    // so we use a seeded image per photo instead (same idea as the avatars).
    imageUrl: `https://picsum.photos/seed/${ photo.id }/600/600`,
  } ) );
}
