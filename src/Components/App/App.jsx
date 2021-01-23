import React from 'react';

import './App.scss';
import Header from '../Header/Header';
import porshe from '../../img/Porshe.jpeg';

class App extends React.Component {
    render() {
        return (
            <div className='app-container'>

                <Header />

                <main className="main-section">
                    <div className="wrapper">
                        <div className="work-area">

                            {/*LeftMenu*/}
                            <div className="left-menu">

                            </div>

                            {/*InteractiveImage*/}
                            <div className="image-area">
                                <img src={porshe} alt="Porshe"/>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;