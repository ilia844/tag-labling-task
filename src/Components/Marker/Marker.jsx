import React from 'react';

import './Marker.scss';
import markerImg from '../../img/mapmarker.png';
import markerActiveImg from '../../img/mapmarker_active.png';


class Marker extends React.Component {
    constructor(props) {
        super(props);

        this.markerRef = React.createRef();
    }

    render() {
        const marker = this.props.isActive ? markerActiveImg : markerImg;
        // const left = this.props.left - this.markerRef.current.offsetWidth / 2;

        return (
            <img
                ref={this.markerRef}
                className={'tag-label'}
                style={{ left: this.props.left, top: this.props.top }}
                src={marker}
                alt="Marker"
                onClick={this.props.selectTag}
            />
        );
    }
}

export default Marker;