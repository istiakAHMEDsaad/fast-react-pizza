import PropTypes from 'prop-types';

function Button({ disabled, children }) {
  return (
    <button
      disabled={disabled}
      className="inline-block cursor-pointer rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold tracking-wide text-stone-800 uppercase transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
