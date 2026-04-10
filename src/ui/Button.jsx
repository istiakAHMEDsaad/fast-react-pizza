import PropTypes from 'prop-types';
import { Link } from 'react-router';

function Button({ disabled, children, to, type }) {
  // const className =
  //   'inline-block cursor-pointer rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold tracking-wide text-stone-800 uppercase transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4';

  const base =
    'inline-block cursor-pointer rounded-full bg-yellow-400 text-sm font-semibold tracking-wide text-stone-800 uppercase transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ';

  const style = {
    primary: base + 'px-4 py-3 md:px-6 md:py-3',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
  };

  if (to)
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  to: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
