import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  const linkStyleClasses =
    'text-3xl font-bold no-underline inline-block text-green-600 px-2';
  return (
    <div>
      <nav
        style={{
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center'
        }}
      >
        <Link className={linkStyleClasses} to="/">
          今日课程
        </Link>

        <Link className={linkStyleClasses} to="/monthly">
          本月课程
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
