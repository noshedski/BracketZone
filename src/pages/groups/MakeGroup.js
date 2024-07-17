import { useState } from 'react';


export default function ViewGroup(){
    
    

    const [sportsBracket, setSportsBracket] = useState('');
    const [groupName, setGroupName] = useState('');
    const [numBrackets, setNumBrackets] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert(`Form submitted:\nSports Bracket: ${sportsBracket}\nGroup Name: ${groupName}\nNumber of Brackets per person allowed: ${numBrackets}`);
    };
      
    return (
        <form className="form-builder" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="sportsBracket">Sports Bracket:</label>
                <input
                type="text"
                id="sportsBracket"
                value={sportsBracket}
                onChange={(e) => setSportsBracket(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="groupName">Group Name:</label>
                <input
                type="text"
                id="groupName"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="numBrackets">Number of Brackets per person allowed:</label>
                <input
                type="number"
                id="numBrackets"
                value={numBrackets}
                onChange={(e) => setNumBrackets(e.target.value)}
                required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
    };