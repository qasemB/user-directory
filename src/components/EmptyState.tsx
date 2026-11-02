interface EmptyStateProps {
    hasSearch?: boolean;
    onReset?: () => void;
    title?: string;
    emptyMessage?: string;
}

export default function EmptyState ( {
    hasSearch = false,
    onReset,
    title = "No people found",
    emptyMessage = "There are no users to display.",
}: EmptyStateProps ) {
    return (
        <div className="state-container">
            <div className="state-icon">⌕</div>
            <h3>{ title }</h3>
            <p>
                { hasSearch
                    ? "Try another search term or change your filters."
                    : emptyMessage }
            </p>

            { hasSearch && onReset && (
                <button className="secondary-button" onClick={ onReset }>
                    Clear search and filters
                </button>
            ) }
        </div>

    );
}
