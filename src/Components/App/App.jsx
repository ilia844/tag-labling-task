import React from 'react';

import './App.scss';
import porshe from '../../img/Porshe.jpeg';
import Header from '../Header/Header';
import LeftMenu from '../LeftMenu/LeftMenu';
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

                            <LeftMenu />

                            <InteractiveImage
                                image={this.state.image ? this.state.image.preview : porshe}
                            />

                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;