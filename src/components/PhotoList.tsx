import type { Photo } from "../types/photo";
import PhotoCard from "./PhotoCard";

interface PhotoListProps {
    photos: Photo[];
}

export default function PhotoList ( { photos }: PhotoListProps ) {
    return (
        <div className="photo-grid">
            { photos.map( ( photo ) => (
                <PhotoCard key={ photo.id } photo={ photo } />
            ) ) }
        </div>
    );
}
