import React from 'react';

const Person = ({person}) => {
        
    
    return (
        <div>
            <h3>{person.name}</h3>
            <h4>{person.age}</h4>
            <button onClick={() => setAge(age - 1)}>Make Younger</button>
        </div>
    )
}        
export default Person;