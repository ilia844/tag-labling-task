import React from 'react';

import './App.scss';
import porshe from '../../img/Porshe.jpeg';
import Header from '../Header/Header';
import InteractiveImage from '../InteractiveImage/InteractiveImage';



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

                            <InteractiveImage
                                image={this.state.image ? this.state.image.preview : porshe}
                            />
                            {/*<div className="image-area">*/}
                            {/*    <img*/}
                            {/*        src={this.state.image ? this.state.image.preview : porshe}*/}
                            {/*        alt="Porshe"/>*/}
                            {/*</div>*/}

                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;