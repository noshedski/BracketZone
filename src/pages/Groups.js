import { useState } from 'react';
import{Link} from 'react-router-dom';



export default function Groups() {
    

    const [group] = useState({
        
            "id": 1,
            "name": "SEG3125-Group",
            "bracket_type": "hockey",
            "nBrackets": 1,
            "auto_bracket_maker": 1,
            "nUsers" : 5 } );



    return (
      <div className="groups">
        <h2>Groups</h2>
        <p>Below are the groups on the system! You can either join a group or make one by clicking their respective buttons</p>
            
            <div>
                <Link to="makegroup">
                    <button>Make Group</button>
                </Link>

            </div>
            
            
            <div>
                <div className='group-details'>
                    <span><strong>Group Name:</strong> {group.name}</span>
                    <span><strong>Number of Users:</strong> {group.nUsers}</span>
                    <span><strong>Sport:</strong> {group.bracket_type}</span>
                
                    <Link to="viewgroup">
                    <button >Join Group</button>
                    </Link>
                </div>
            </div>
      </div>
    )
  }



