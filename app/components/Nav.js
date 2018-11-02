var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home &ensp;
        </NavLink>
        <NavLink activeClassName='active' to='/battle'>
          Battle&ensp;
        </NavLink>
        <NavLink activeClassName='active' to='/popular'>
          Popular&ensp;
        </NavLink>
      </li>

    </ul>
  )
}

module.exports = Nav;
