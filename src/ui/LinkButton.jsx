import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router';

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  const className =
    'text-sm text-blue-500 transition-all hover:text-blue-600 hover:underline cursor-pointer';

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

LinkButton.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};

export default LinkButton;
