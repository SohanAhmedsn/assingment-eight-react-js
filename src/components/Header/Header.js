import React from 'react';
import './Header.css';

const Header = () => {
    // show header part
    return (
        <div className='bg-secondary text-white pt-2 pb-2 mb-4'>
            <h2>Charity Team</h2>
            <p>You Now Hire the team</p>
            <h2>Total Budget 100M</h2>
        </div>
    );
};

export default Header;