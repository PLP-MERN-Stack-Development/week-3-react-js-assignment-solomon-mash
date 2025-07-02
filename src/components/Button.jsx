export default function Button({ variant = 'primary', children, className = '', ...props }) {
  const baseStyles = 'px-4 py-2 rounded-md font-semibold transition-colors duration-200';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
