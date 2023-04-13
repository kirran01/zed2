import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className='bg-slate-800 text-white p-3'>
            <ul className='flex'>
                <li className='mr-3'>
                    <Link href="/user/page">Users</Link>
                </li>
                <li className='mr-3'>
                    <Link href="/">Home</Link>
                </li>
                <li className='mr-3'>
                    <Link href="/transaction/page">Transactions</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
