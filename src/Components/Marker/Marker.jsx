import React from 'react';

import './Marker.scss';
import markerImg from '../../img/mapmarker.png';
import markerActiveImg from '../../img/mapmarker_active.png';


class Marker extends React.Component {
    render() {
        const marker = this.props.active ? markerActiveImg : markerImg;

        return (
            <img
                className={'tag-label'}
                style={{ left: this.props.left, top: this.props.top }}
                src={marker}
                alt="Marker"
            />
        );
    }
}

export default Marker;