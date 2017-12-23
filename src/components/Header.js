import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return (
            <nav className='navigation'>
                <h1 className='brand'>
                    Hockey Elo
                </h1>
            </nav>
        )
    }
}

export default Header;