import React from 'react';

const DropDown = ({ coinData }) => {
    return (
        <div className='menu'>
            <select>
                {coinData.map(coin => (
                    <option key={coin.id}>{coin.name}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDown;