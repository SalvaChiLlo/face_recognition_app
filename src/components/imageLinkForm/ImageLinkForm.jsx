import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div className="imageLinkForm">
            <p className="f3">
                {`I am going to detect faces in your pictures!!!`}
            </p>
            <form className="LinkForm">
                <input type="text" name="" id="" placeholder="Insert an image link"/>
                <button>Detect</button>
            </form>
        </div>
    );
}

export default ImageLinkForm;