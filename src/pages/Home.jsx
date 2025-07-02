import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-center space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold">
        🚀 Welcome to the React + Tailwind Task App
      </h1>

      <p className="text-gray-600 dark:text-gray-300 text-lg">
            React.js and Tailwind CSS Assignment
      </p>
      <p className="text-gray-600 dark:text-gray-300 text-lg">
This assignment focuses on building a responsive React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.      </p>

      <ul className="text-left max-w-md mx-auto space-y-2 text-base text-gray-700 dark:text-gray-300">
    <p className="text-gray-600 dark:text-gray-300 text-lg"> Deliverables</p> 
        <li>✅ All required components and features implemented</li>
        <li>✅ State management with hooks</li>
        <li>✅ Integrate with atleast one API</li>
        <li>✅ Infinite Scroll Implementation</li>
        <li>✅ API integration with infinite scroll</li>
        <li>✅ Fully responsive with Tailwind CSS</li>
        <li>✅ Deployed on Vercel</li>

      </ul>

      <div className="pt-4">
        <Link to="/tasks">
          <Button className="text-lg">Try the Task Manager</Button>
        </Link>
      </div>
    </div>
  );
}


