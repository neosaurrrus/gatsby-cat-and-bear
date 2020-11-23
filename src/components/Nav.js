import React from 'react';
import { Link } from 'gatsby';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/food">Food</Link>
        </li>
        <li>
          <Link to="/drink">Drink</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
