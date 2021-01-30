import React from 'react';
import {useDropzone} from 'react-dropzone';

import './UploadArea.scss';

function UploadArea({ loadNewImage }) {
    const onDrop = (acceptedFiles) => {
        const newImage = Object.assign(acceptedFiles[0], {
           preview: URL.createObjectURL(acceptedFiles[0]),
        });

        loadNewImage(newImage);
    };

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: 'image/*',
        maxFiles: 1,
    });

    return (
        <div {...getRootProps()} className="upload-area">
            <input {...getInputProps()}/>
            <p>
                Drop your file <br/>
                or click to browse it
            </p>
        </div>
    );
}

export default UploadArea;