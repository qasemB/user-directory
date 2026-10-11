interface SearchBarProps {
    value: string;
    onChange: ( value: string ) => void;
}

export default function SearchBar ( {
    value,
    onChange,
}: SearchBarProps ) {
    return (
        <label className="search-box">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" >
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
            </svg>

            <input
                type="search"
                placeholder="Search by name, email, city..."
                value={ value }
                onChange={ ( event ) => onChange( event.target.value ) }
                aria-label="Search users"
            />

            { value && (
                <button
                    className="clear-search"
                    type="button"
                    onClick={ () => onChange( "" ) }
                    aria-label="Clear search"
                >
                    ×
                </button>
            ) }
        </label>

    );
}