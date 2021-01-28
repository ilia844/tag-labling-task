import React from 'react';

import Portal from '../Portal/Portal';
import './Modal.scss';
import Button from '../Button/Button';

class Modal extends React.Component {
    render() {
        return (
            <Portal>
                <div className="modal-overlay">
                    <div className="modal-window">
                        <div className="modal-header">
                            <div className="modal-title">{this.props.title}</div>
                        </div>

                        <div className="modal-body">
                            <textarea className="modal-textarea"></textarea>
                        </div>

                        <div className="modal-footer">
                            <Button
                                className="modal-btn"
                            >
                                Cansel
                            </Button>
                            <Button
                                className="modal-btn"
                            >
                                Ok
                            </Button>
                            {/*<button className="modal-btn">Cancel</button>*/}
                            {/*<button className="modal-btn">Ok</button>*/}
                        </div>
                    </div>

                </div>
            </Portal>
        );
    }
}

export default Modal;