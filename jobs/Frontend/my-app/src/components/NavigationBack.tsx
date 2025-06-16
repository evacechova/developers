import { Link } from 'react-router-dom';

export const NavigationBack = () => {
  return (
    <Link
      className="gradient-hover f-link-md"
      to="/"
      aria-label="Back to search"
    >
      ← Back to Movie Search
    </Link>
  );
};
