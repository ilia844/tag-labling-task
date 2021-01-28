import React from 'react';

import './Header.scss';
import UploadArea from '../UploadArea/UploadArea';
import Button from '../Button/Button';


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

                            <Button className="login-btn" onClick={()=>{console.log('Login')}}>
                                Log In
                            </Button>
                        </div>

                    </div>
                </div>
            </header>
        );
    }
}

export default Header;