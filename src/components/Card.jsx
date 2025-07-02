export default function Card({ title, children, footer }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
      {title && (
        <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 font-bold text-lg">
          {title}
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && (
        <div className="bg-gray-50 dark:bg-gray-700 px-4 py-2 text-sm text-right">
          {footer}
        </div>
      )}
    </div>
  );
}
