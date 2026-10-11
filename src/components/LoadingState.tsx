export default function LoadingState () {
    return (
        <div className="state-container" role="status" aria-live="polite">
            <div className="spinner" />
            <h3>Finding your people...</h3>
            <p>Loading user directory</p>
        </div>
    );
}