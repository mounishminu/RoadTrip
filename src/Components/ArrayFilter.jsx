import React, { useState } from 'react';
import Data from '../data/Data';

const ArrayFilter = () => {
  const [people, setPeople] = useState(Data);
  const [newName, setNewName] = useState('');
  const handleRemove = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const handleRemoveAll = () => {
    setPeople([]);
  };
  const handleAddUser = (e) => {
    if (newName !== '') {
      const newPerson = {
        id: people.length + 1,
        name: newName
      };
      people.push(newPerson);
      setNewName('')
      
    }
  }; 

  return (
    <div>
      {people.map((person) => (
        <div key={person.id} className='mt-3'>
          <h4>Name: {person.name}</h4>
          <button onClick={() => handleRemove(person.id)}>Delete</button>
        </div>
      ))}
      <button className='mt-5' onClick={handleRemoveAll}>Remove all</button>
      <div>
        <input className='mt-5' type="text" value={newName} onChange={(e)=>{setNewName(e.target.value)}}/>
        <button onClick={handleAddUser}>Add User</button>
      </div>  
    </div>
    
  );
};

export default ArrayFilter;
