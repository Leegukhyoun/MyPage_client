import React from 'react';

const RealBMItem = ({info, onMoreBtn}) => {
    const liClick = () => {
        window.open(`${info.url}`, '_blank');
        onMoreBtn();
    }
    return (
        <li onClick={liClick}>{info.name}</li>
    );
};

export default RealBMItem;