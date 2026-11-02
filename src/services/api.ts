export const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchJson( path: string ): Promise<unknown> {
  const response = await fetch( `${ API_BASE_URL }${ path }` );

  if ( !response.ok ) {
    throw new Error( `Request failed with status ${ response.status }.` );
  }

  return response.json();
}
