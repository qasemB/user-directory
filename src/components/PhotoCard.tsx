import { useState } from "react";
import type { Photo } from "../types/photo";

interface PhotoCardProps {
    photo: Photo;
}

export default function PhotoCard ( { photo }: PhotoCardProps ) {
    const [ imageError, setImageError ] = useState( false );

    return (
        <figure className="photo-card">
            <div className="photo-frame">
                { imageError ? (
                    <div className="photo-fallback" aria-hidden="true">⌗</div>
                ) : (
                    <img
                        className="photo-image"
                        src={ photo.imageUrl }
                        alt={ photo.title }
                        loading="lazy"
                        onError={ () => setImageError( true ) }
                    />
                ) }
            </div>

            <figcaption>
                <span className="meta-label">ALBUM { photo.albumId }</span>
                <p>{ photo.title }</p>
            </figcaption>
        </figure>

    );
}
