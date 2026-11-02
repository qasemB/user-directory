import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import PhotoList from "../components/PhotoList";
import { useAsyncData } from "../hooks/useAsyncData";
import { getPhotos } from "../services/photoService";

const ERROR_MESSAGE =
  "We couldn't load the gallery. Please check your connection and try again.";

export default function GalleryPage () {
  const { data, loading, error, reload } = useAsyncData( getPhotos, ERROR_MESSAGE );
  const photos = data ?? [];

  return (
    <section className="directory-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">VISUAL STORIES</span>
          <h2>Gallery</h2>
          <p>A collection of photos from across the network.</p>
        </div>

        <div className="total-badge">
          <span className="total-number">{ loading ? "—" : photos.length }</span>
          <span className="total-label">PHOTOS</span>
        </div>
      </div>

      { loading ? (
        <LoadingState title="Loading gallery..." description="Fetching the latest photos" />
      ) : error ? (
        <ErrorState message={ error } onRetry={ reload } />
      ) : photos.length === 0 ? (
        <EmptyState title="No photos found" emptyMessage="There are no photos to display." />
      ) : (
        <PhotoList photos={ photos } />
      ) }
    </section>
  );
}
