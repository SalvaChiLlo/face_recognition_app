import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageLink, boxes }) => {
    let faces = []
    if (document.getElementById('inputImage')) {
        let image = document.getElementById('inputImage')
        let width = Number(image.width);
        let height = Number(image.height);

        boxes.forEach(box => {
            faces.push({
                topRow: box.region_info.bounding_box.top_row * height,
                leftCol: box.region_info.bounding_box.left_col * width,
                rightCol: width - (box.region_info.bounding_box.right_col * width),
                bottomRow: height - (box.region_info.bounding_box.bottom_row * height),
            })
        })
    }
    return (
        <div className="max">
            <div className="faceRecognition max">
                <img src={imageLink} alt="" id="inputImage" />
                {faces.map((box, i) => {
                    return <div key={i} className="box" style={{ top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol }}></div>
                })}
            </div>
        </div>
    );
}

export default FaceRecognition;