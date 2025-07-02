import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">🧠 TaskApp</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/tasks" className="hover:underline">Tasks</Link>
          <Link to="/posts" className="hover:underline">Posts</Link>
        </div>
      </div>
    </nav>
  );
}
