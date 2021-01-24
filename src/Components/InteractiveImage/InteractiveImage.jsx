import React from 'react';

import './InteractiveImage.scss';

class InteractiveImage extends React.Component {
    render() {
        return (
            <div className="image-area">
                <img
                    src={this.props.image}
                    alt="Porshe"
                />
            </div>
        )
    }
}

export default InteractiveImage;