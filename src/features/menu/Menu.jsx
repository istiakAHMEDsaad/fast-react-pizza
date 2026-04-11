import { useLoaderData, useNavigate } from 'react-router';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Menu() {
  const menu = useLoaderData();
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate('/');
    }
  }, [username, navigate]);

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.imageUrl} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
