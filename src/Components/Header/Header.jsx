import React from 'react';

import './Header.scss';
import UploadArea from '../UploadArea/UploadArea';


class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="wrapper">
                    <div className="header-container">

                        <UploadArea
                            loadNewImage={this.props.loadNewImage}
                        />

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