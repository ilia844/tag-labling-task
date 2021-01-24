import React from 'react';

import './App.scss';
import Header from '../Header/Header';
import porshe from '../../img/Porshe.jpeg';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            notesList: [],
        }
    }

    loadNewImage = (img) => {
        this.setState({
            image: img,
        })
    }

    render() {
        return (
            <div className='app-container'>

                <Header
                    loadNewImage={this.loadNewImage}
                />

                <main className="main-section">
                    <div className="wrapper">
                        <div className="work-area">

                            {/*LeftMenu*/}
                            <div className="left-menu">

                            </div>

                            {/*InteractiveImage*/}
                            <div className="image-area">
                                <img
                                    src={this.state.image ? this.state.image.preview : porshe}
                                    alt="Porshe"/>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;