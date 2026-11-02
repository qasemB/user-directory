import type { Post } from "../types/post";
import { fetchJson } from "./api";

interface ApiPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export async function getPosts(): Promise<Post[]> {
  const data = await fetchJson( "/posts" );

  if ( !Array.isArray( data ) ) {
    throw new Error( "Invalid posts response." );
  }

  const apiPosts = data as ApiPost[];

  return apiPosts.map( ( post ) => ( {
    id: post.id,
    userId: post.userId,
    title: post.title,
    body: post.body,
  } ) );
}
