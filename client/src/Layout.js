import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <nav>
                <Link
                    style={{ display: 'inline-block', marginLeft: 10 }}
                    to='/'
                >
                    今日课程
                </Link>

                <Link
                    style={{ display: 'inline-block', marginLeft: 10 }}
                    to='/monthly'>
                    本月课程
                </Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;
