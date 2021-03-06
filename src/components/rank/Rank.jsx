import React from 'react';
import './Rank.css';

const Rank = ({name, entries}) => {
    return (
        <div className="rank">
            <h2>{`${name} your rank is...`}</h2>
            <h2>{`#${entries}`}</h2>
        </div>
    );
}

export default Rank;