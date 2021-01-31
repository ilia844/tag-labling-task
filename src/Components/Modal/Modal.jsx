import React, {Fragment} from 'react';

import Portal from '../Portal/Portal';
import Button from '../Button/Button';
import './Modal.scss';


class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.textareaRef = React.createRef();
    }

    handleSubmit = () => {
        const noteText = this.textareaRef.current.value.trim();
        noteText
            ? this.props.onSubmit(noteText)
            : this.handleCancel();
    }

    handleCancel = () => {
        this.props.onCancel();
    }

    handleKeyDown = (e) => {
        if (!e.shiftKey && e.key === 'Enter') {
            this.handleSubmit();
        }

        if (e.key === 'Escape') {
            this.handleCancel();
        }
    }

    componentDidUpdate() {
        if (this.props.isOpen) {
            this.textareaRef.current.focus();
            this.textareaRef.current.selectionStart = this.textareaRef.current.value.length;
        }
    }

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
                                    <textarea
                                        ref={this.textareaRef}
                                        className="modal-textarea"
                                        autoFocus={true}
                                        onKeyDown={this.handleKeyDown}
                                        defaultValue={this.props.defaultNote}
                                    />
                                </div>

                                <div className="modal-footer">
                                    <Button
                                        className="modal-btn"
                                        onClick={this.handleCancel}
                                        invert
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        className="modal-btn"
                                        onClick={this.handleSubmit}
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