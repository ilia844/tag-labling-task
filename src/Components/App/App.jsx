import React from 'react';

import './App.scss';
import Header from '../Header/Header';

class App extends React.Component {
    render() {
        return (
            <div className='app-container'>

                <Header />

                <main className="main-section">
                    <div className="wrapper">
                        <div className="work-area">
                            {/*InteractiveImage*/}
                            <div className="image-area">

                            </div>

                            {/*LeftMenu*/}
                            <div className="left-menu">

                            </div>

                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;