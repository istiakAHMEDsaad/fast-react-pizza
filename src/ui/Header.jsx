import { Link } from 'react-router';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Fast React Co.</Link>

      <SearchOrder />
    </header>
  );
}

export default Header;
