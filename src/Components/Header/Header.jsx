import React from 'react';

import './Header.scss';


class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="wrapper">
                    <div className="header-container">

                        <div className="upload-area">
                            Drag & Drop
                        </div>

                        <div className="header-menu">
                            <input type="search"/>

                            <button className="login-btn">
                                Log In
                            </button>
                        </div>

                    </div>
                </div>
            </header>
        );
    }
}

export default Header;