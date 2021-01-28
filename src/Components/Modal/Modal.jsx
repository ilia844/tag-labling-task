import React, {Fragment} from 'react';

import Portal from '../Portal/Portal';
import Button from '../Button/Button';
import './Modal.scss';


class Modal extends React.Component {
    render() {
        return (
            <Fragment>
                { this.props.isOpen &&
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
                                        invert
                                    >
                                        Cansel
                                    </Button>
                                    <Button
                                        className="modal-btn"
                                    >
                                        Ok
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </Portal>
                }
            </Fragment>
        );
    }
}

export default Modal;