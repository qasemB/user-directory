import { useCallback, useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserFilters from "./components/UserFilters";
import UserList from "./components/UserList";
import LoadingState from "./components/LoadingState";
import ErrorState from "./components/ErrorState";
import EmptyState from "./components/EmptyState";
import { getUsers } from "./services/userService";
import type { User } from "./types/user";

export default function App () {
  const [ users, setUsers ] = useState<User[]>( [] );
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( "" );
  const [ search, setSearch ] = useState( "" );
  const [ selectedCity, setSelectedCity ] = useState( "all" );
  const [ sortOrder, setSortOrder ] = useState<"asc" | "desc">( "asc" );

  const loadUsers = useCallback( async () => {
    setLoading( true );
    setError( "" );

    try {
      const data = await getUsers();
      setUsers( data );
    } catch {
      setError(
        "We couldn't load the users. Please check your connection and try again."
      );
    } finally {
      setLoading( false );
    }

  }, [] );

  useEffect( () => {
    void loadUsers();
  }, [ loadUsers ] );

  const cities = useMemo(
    () => [ ...new Set( users.map( ( user ) => user.city ) ) ].sort(),
    [ users ]
  );

  const filteredUsers = useMemo( () => {
    const query = search.trim().toLowerCase();

    return users
      .filter( ( user ) => {
        const matchesSearch = [
          user.name,
          user.email,
          user.city,
          user.company,
          user.jobTitle,
        ].some( ( value ) => value.toLowerCase().includes( query ) );

        const matchesCity =
          selectedCity === "all" || user.city === selectedCity;

        return matchesSearch && matchesCity;
      } )
      .sort( ( a, b ) => {
        const comparison = a.name.localeCompare( b.name );
        return sortOrder === "asc" ? comparison : -comparison;
      } );

  }, [ users, search, selectedCity, sortOrder ] );

  const resetFilters = () => {
    setSearch( "" );
    setSelectedCity( "all" );
    setSortOrder( "asc" );
  };

  return (
    <div className="app-shell">
      <Header />

      <main className="main-content">
        <section className="directory-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">YOUR NETWORK</span>
              <h2>Meet the team</h2>
              <p>Everyone you need, all in one place.</p>
            </div>

            <div className="total-badge">
              <span className="total-number">
                { loading ? "—" : filteredUsers.length }
              </span>
              <span className="total-label">PEOPLE</span>
            </div>
          </div>

          <div className="toolbar">
            <SearchBar value={ search } onChange={ setSearch } />

            <UserFilters
              cities={ cities }
              selectedCity={ selectedCity }
              onCityChange={ setSelectedCity }
              sortOrder={ sortOrder }
              onSortChange={ setSortOrder }
            />
          </div>

          { !loading && !error && (
            <div className="results-label" aria-live="polite">
              Showing <strong>{ filteredUsers.length }</strong> of{ " " }
              <strong>{ users.length }</strong> people
            </div>
          ) }

          { loading ? (
            <LoadingState />
          ) : error ? (
            <ErrorState message={ error } onRetry={ () => void loadUsers() } />
          ) : filteredUsers.length === 0 ? (
            <EmptyState
              hasSearch={ Boolean( search.trim() ) || selectedCity !== "all" }
              onReset={ resetFilters }
            />
          ) : (
            <UserList users={ filteredUsers } />
          ) }
        </section>
      </main>

      <footer className="footer">
        <span className="footer-brand">UserSpace</span>
        <span>People first. Always.</span>
      </footer>
    </div>

  );
}