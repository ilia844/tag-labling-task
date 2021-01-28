import React from 'react';

import './InteractiveImage.scss';
import Marker from '../Marker/Marker';
import Modal from '../Modal/Modal';

class InteractiveImage extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = {
            modal: {
                isOpen: false,
            },
            marker: {
                relativeX: null,
                relativeY: null,
            },
        }
    }

    handleClick = (e) => {
        const imageWidth = e.target.clientWidth;
        const imageHeight = e.target.clientHeight;
        const left = e.nativeEvent.offsetX;
        const top = e.nativeEvent.offsetY;

        const relativeX = imageWidth / left;
        const relativeY = imageHeight / top;

        this.setState({
            modal: {
                isOpen: true,
            },
            marker: {
                relativeX,
                relativeY,
            },
        })
    }

    renderTags = (notes) => {
        return notes.map((note, index) => {
            const left = Math.round(this.imageRef.current.offsetWidth / note.point.x) - 15;
            const top = Math.round(this.imageRef.current.offsetHeight / note.point.y) - 30;
            // const left = Math.round(this.imageRef.current.offsetWidth / note.point.x);
            // const top = Math.round(this.imageRef.current.offsetHeight / note.point.y);

            return (
                <Marker
                    key={index}
                    left={left}
                    top={top}
                    active={note.active}
                />
            );
        });
    }

    onSubmit = (noteText) => {
        this.props.addNewTag(noteText, this.state.marker.relativeX, this.state.marker.relativeY);
        this.setState({
            modal: {
                isOpen: false,
            },
        })
    }

    onCancel = () => {
        this.setState({
            modal: {
                isOpen: false,
            },
            marker: {
                relativeX: null,
                relativeY: null,
            },
        })
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
                <Modal
                    title="Enter your note below"
                    isOpen={this.state.modal.isOpen}
                    onSubmit={this.onSubmit}
                    onCancel={this.onCancel}
                />
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