import { useEffect, useState, useCallback } from 'react';
import Card from '../components/Card';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(10); 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data);
        setFiltered(data);
        setError('');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const results = posts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
    setVisibleCount(10); 
  }, [search, posts]);

  const loadMoreRef = useCallback(
    node => {
      if (loading) return;

      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && visibleCount < filtered.length) {
          setVisibleCount(prev => prev + 10);
        }
      });

      if (node) observer.observe(node);
      return () => observer.disconnect();
    },
    [loading, filtered.length, visibleCount]
  );

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold">Infinite Scroll Posts</h2>

      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search posts..."
        className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
      />

      {error && <p className="text-red-600">Error: {error}</p>}
      {loading && <p>Loading...</p>}

      <div className="grid gap-4">
        {filtered.slice(0, visibleCount).map(post => (
          <Card key={post.id} title={post.title}>
            <p>{post.body}</p>
          </Card>
        ))}

        {visibleCount < filtered.length && (
          <div ref={loadMoreRef} className="text-center py-4 text-gray-400">
            Loading more...
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <p className="text-gray-500">No posts found.</p>
        )}
      </div>
    </div>
  );
}

