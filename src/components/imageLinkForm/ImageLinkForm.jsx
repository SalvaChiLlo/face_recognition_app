import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onSubmit, imageLink}) => {
    return (
        <div className="imageLinkForm">
            <p>
                {`I am going to detect faces in your pictures!!!`}
            </p>
            <form className="LinkForm">
                <input type="text" name="" id="" placeholder="Insert an image link" onChange={(event) => onInputChange(event)} />
                <button onClick={(event)=>onSubmit(event)}>Detect</button>
            </form>
            <img src={imageLink} alt=""/>
        </div>
    );
}

export default ImageLinkForm;