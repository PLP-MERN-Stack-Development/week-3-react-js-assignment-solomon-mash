export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4 text-sm text-gray-600 dark:text-gray-300">
      © {new Date().getFullYear()} TaskApp. Built with ❤️ using React + Tailwind.
    </footer>
  );
}
