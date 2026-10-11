import { useState } from "react";
import type { User } from "../types/user";

interface UserCardProps {
    user: User;
}

export default function UserCard ( { user }: UserCardProps ) {
    const [ imageError, setImageError ] = useState( false );

    const initials = user.name
        .split( " " )
        .map( ( part ) => part[ 0 ] )
        .slice( 0, 2 )
        .join( "" )
        .toUpperCase();

    return (
        <article className="user-card">
            <div className="card-top">
                <div className="avatar-wrapper">
                    { imageError ? (
                        <div className="avatar-fallback">{ initials }</div>
                    ) : (
                        <img
                            className="avatar"
                            src={ user.avatar }
                            alt={ user.name }
                            loading="lazy"
                            onError={ () => setImageError( true ) }
                        />
                    ) }
                    <span className="avatar-status" />
                </div>

                <span className="user-id">
                    #{ String( user.id ).padStart( 3, "0" ) }
                </span>
            </div>

            <div className="user-info">
                <h3>{ user.name }</h3>
                <p className="user-job">{ user.jobTitle }</p>

                <a className="user-email" href={ `mailto:${ user.email }` }>
                    <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        aria-hidden="true"
                    >
                        <rect x="3" y="5" width="18" height="14" rx="3" />
                        <path d="m4 7 8 6 8-6" />
                    </svg>
                    <span>{ user.email }</span>
                </a>
            </div>

            <div className="card-footer">
                <div className="company-info">
                    <span className="meta-label">COMPANY</span>
                    <strong>{ user.company }</strong>
                </div>

                <div className="location-info">
                    <span className="location-icon">⌖</span>
                    <span>{ user.city }</span>
                </div>
            </div>
        </article>

    );
}