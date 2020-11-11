import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onSubmit}) => {
    return (
        <div className="imageLinkForm">
            <p>
                {`I am going to detect faces in your pictures!!!`}
            </p>
            <form className="LinkForm">
                <input id="inputLink" type="search" name="" placeholder="Insert an image link" />
                <button onClick={(event)=>onSubmit(event)}>Detect</button>
            </form>
        </div>
    );
}

export default ImageLinkForm;