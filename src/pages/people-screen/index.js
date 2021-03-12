import React from 'react';
import People from '../../components/people';

const PeopleScreen = ({ people }) => {

    return (
        <div>
            <h1>The people of the people screen</h1>
            <People people={people} />
        </div>
    )
}
export default PeopleScreen;