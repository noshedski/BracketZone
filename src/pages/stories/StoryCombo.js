import React, { useState } from 'react';

const ComboBox = ({ onSelect }) => {
    const [selectedSport, setSelectedSport] = useState('');

    const handleChange = (event) => {
        setSelectedSport(event.target.value);
        onSelect(event.target.value);
    };


    return (
        <div>
            <label htmlFor="sports">Choose a sport:</label>
            <select id="sports" value={selectedSport} onChange={handleChange}>
                <option value="">All Sports</option>
                <option value="hockey">Hockey</option>
                <option value="basketball">Basketball</option>
                <option value="soccer">Soccer</option>
                <option value="football">Football</option>
                <option value="cycling">Cycling</option>
            </select>

        </div>
    );
};

export default ComboBox;