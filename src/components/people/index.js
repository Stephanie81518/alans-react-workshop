import React from 'react';
import Person from '../person';


const People = ({people}) => {
    return (
        people.map(person => {
            return (
                <div>
                    <h3>{person.name}</h3>
                    <h4>{person.age}</h4>
                </div>
            <Person key={person.personId} person={person} />
            )
        })    
    )
}
export default PeopleScreen;