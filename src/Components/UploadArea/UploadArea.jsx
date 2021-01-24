import React from 'react';
import {useDropzone} from 'react-dropzone';

import './UploadArea.scss';

function UploadArea(props) {
    const onDrop = (acceptedFiles) => {
        const newImage = Object.assign(acceptedFiles[0], {
           preview: URL.createObjectURL(acceptedFiles[0]),
        });

        props.loadNewImage(newImage);
    };

    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        maxFiles: 1,
        onDrop: onDrop,
    });

    // const images = files.map((file) => (
    //    <div key={file.name}>
    //        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
    //    </div>
    // ));

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