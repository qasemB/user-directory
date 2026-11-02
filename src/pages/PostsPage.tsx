import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import PostList from "../components/PostList";
import { useAsyncData } from "../hooks/useAsyncData";
import { getPosts } from "../services/postService";

const ERROR_MESSAGE =
  "We couldn't load the posts. Please check your connection and try again.";

export default function PostsPage () {
  const { data, loading, error, reload } = useAsyncData( getPosts, ERROR_MESSAGE );
  const posts = data ?? [];

  return (
    <section className="directory-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">LATEST UPDATES</span>
          <h2>Posts</h2>
          <p>Everything your team has been writing lately.</p>
        </div>

        <div className="total-badge">
          <span className="total-number">{ loading ? "—" : posts.length }</span>
          <span className="total-label">POSTS</span>
        </div>
      </div>

      { loading ? (
        <LoadingState title="Loading posts..." description="Fetching the latest posts" />
      ) : error ? (
        <ErrorState message={ error } onRetry={ reload } />
      ) : posts.length === 0 ? (
        <EmptyState title="No posts found" emptyMessage="There are no posts to display." />
      ) : (
        <PostList posts={ posts } />
      ) }
    </section>
  );
}
