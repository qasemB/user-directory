import type { Post } from "../types/post";

interface PostCardProps {
    post: Post;
}

export default function PostCard ( { post }: PostCardProps ) {
    return (
        <article className="post-card">
            <div className="post-card-top">
                <span className="user-id">
                    #{ String( post.id ).padStart( 3, "0" ) }
                </span>
            </div>

            <div className="post-content">
                <h3>{ post.title }</h3>
                <p>{ post.body }</p>
            </div>

            <div className="card-footer">
                <div className="company-info">
                    <span className="meta-label">AUTHOR</span>
                    <strong>User #{ post.userId }</strong>
                </div>
            </div>
        </article>

    );
}
