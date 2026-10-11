interface UserFiltersProps {
    cities: string[];
    selectedCity: string;
    onCityChange: ( city: string ) => void;
    sortOrder: "asc" | "desc";
    onSortChange: ( order: "asc" | "desc" ) => void;
}

export default function UserFilters ( {
    cities,
    selectedCity,
    onCityChange,
    sortOrder,
    onSortChange,
}: UserFiltersProps ) {
    return (
        <div className="filters">
            <label className="filter-control">
                <span>Location</span>
                <select
                    value={ selectedCity }
                    onChange={ ( event ) => onCityChange( event.target.value ) }
                >
                    <option value="all">All locations</option>
                    { cities.map( ( city ) => (
                        <option key={ city } value={ city }>
                            { city }
                        </option>
                    ) ) }
                </select>
            </label>

            <label className="filter-control">
                <span>Sort by</span>
                <select
                    value={ sortOrder }
                    onChange={ ( event ) =>
                        onSortChange( event.target.value as "asc" | "desc" )
                    }
                >
                    <option value="asc">Name: A to Z</option>
                    <option value="desc">Name: Z to A</option>
                </select>
            </label>
        </div>

    );
}