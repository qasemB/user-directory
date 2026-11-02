interface LoadingStateProps {
    title?: string;
    description?: string;
}

export default function LoadingState ( {
    title = "Finding your people...",
    description = "Loading user directory",
}: LoadingStateProps ) {
    return (
        <div className="state-container" role="status" aria-live="polite">
            <div className="spinner" />
            <h3>{ title }</h3>
            <p>{ description }</p>
        </div>
    );
}
