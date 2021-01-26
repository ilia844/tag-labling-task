import React from 'react';

import './InteractiveImage.scss';
import Marker from '../Marker/Marker';

class InteractiveImage extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    handleClick = (e) => {
        const imageWidth = e.target.clientWidth;
        const imageHeight = e.target.clientHeight;
        const left = e.nativeEvent.offsetX;
        const top = e.nativeEvent.offsetY;

        const relativeX = imageWidth / left;
        const relativeY = imageHeight / top;

        this.props.addNewTag(relativeX, relativeY);
    }

    renderTags = (notes) => {
        return notes.map((note) => {
            const left = Math.round(this.imageRef.current.offsetWidth / note.point.x) - 15;
            const top = Math.round(this.imageRef.current.offsetHeight / note.point.y) - 30;

            return (
                <Marker
                    left={left}
                    top={top}
                    active={note.active}
                />
            );
        });
    }

    render() {
        return (
            <div className="image-area">
                <img
                    className={'interactive-image'}
                    ref={this.imageRef}
                    onClick={this.handleClick}
                    src={this.props.image}
                    alt="Porshe"
                />
                {this.renderTags(this.props.notesList)}
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }


    handleResize = () => {
        this.props.setResizeFlag(true);
    }
}

export default InteractiveImage;