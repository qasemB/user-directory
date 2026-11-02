import { useCallback, useEffect, useState } from "react";

interface UseAsyncDataResult<T> {
  data: T | null;
  loading: boolean;
  error: string;
  reload: () => void;
}

/**
 * Small data-loading hook for pages that fetch a single resource.
 * `fetcher` must be a stable reference (a module-level function).
 */
export function useAsyncData<T>(
  fetcher: () => Promise<T>,
  errorMessage: string
): UseAsyncDataResult<T> {
  const [ data, setData ] = useState<T | null>( null );
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( "" );
  const [ reloadKey, setReloadKey ] = useState( 0 );

  useEffect( () => {
    let ignore = false;

    fetcher()
      .then( ( result ) => {
        if ( !ignore ) setData( result );
      } )
      .catch( () => {
        if ( !ignore ) setError( errorMessage );
      } )
      .finally( () => {
        if ( !ignore ) setLoading( false );
      } );

    return () => {
      ignore = true;
    };
  }, [ fetcher, errorMessage, reloadKey ] );

  const reload = useCallback( () => {
    setLoading( true );
    setError( "" );
    setReloadKey( ( key ) => key + 1 );
  }, [] );

  return { data, loading, error, reload };
}
