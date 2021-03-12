import React from 'react';
import { useParams } from 'react-router-dom';
import Person from '../../components/person';

const PersonScreen = ({ people }) => {

    const { slug } = useParams(); //looks at endpoints for info here

    return (
        <div>
            <h1>Welcome to the Person Page</h1>
            {people.filter(person => person.slug === slug).map(person => (
                <Person key={person.personId} person={person}/>
            ))}
        </div>
    )
}

export default PersonScreen;