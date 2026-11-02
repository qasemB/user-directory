import type { Post } from "../types/post";
import PostCard from "./PostCard";

interface PostListProps {
    posts: Post[];
}

export default function PostList ( { posts }: PostListProps ) {
    return (
        <div className="post-grid">
            { posts.map( ( post ) => (
                <PostCard key={ post.id } post={ post } />
            ) ) }
        </div>
    );
}
