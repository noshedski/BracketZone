import React, { useState } from 'react';

const ComboBox = ({ onSelect }) => {
    const [selectedSport, setSelectedSport] = useState('');

    const handleChange = (event) => {
        setSelectedSport(event.target.value);
        onSelect(event.target.value);
    };


    return (
        <div className='combo'>
            <label htmlFor="leaguecombo">Choose a sport:</label>
            <select id="leagues" value={selectedSport} onChange={handleChange}>
                <option value="nfl">NFL</option>
                <option value="nba">NBA</option>
                <option value="nhl">NHL</option>
                <option value="mlb">MLB</option>
            </select>

        </div>
    );
};

export default ComboBox;