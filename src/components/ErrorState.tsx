interface ErrorStateProps {
    message: string;
    onRetry: () => void;
}

export default function ErrorState ( {
    message,
    onRetry,
}: ErrorStateProps ) {
    return (
        <div className="state-container" role="alert">
            <div className="state-icon error-icon">!</div>
            <h3>Something went wrong</h3>
            <p>{ message }</p>
            <button className="primary-button" onClick={ onRetry }>
                Try again
            </button>
        </div>
    );
}