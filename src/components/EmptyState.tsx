interface EmptyStateProps {
    hasSearch: boolean;
    onReset: () => void;
}

export default function EmptyState ( {
    hasSearch,
    onReset,
}: EmptyStateProps ) {
    return (
        <div className="state-container">
            <div className="state-icon">⌕</div>
            <h3>No people found</h3>
            <p>
                { hasSearch
                    ? "Try another search term or change your filters."
                    : "There are no users to display." }
            </p>

            { hasSearch && (
                <button className="secondary-button" onClick={ onReset }>
                    Clear search and filters
                </button>
            ) }
        </div>

    );
}