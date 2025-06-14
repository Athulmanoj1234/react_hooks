"use client"
import { useCallback, useState } from 'react';

// import { shuffle } from '@/utils';

import Search from './search';
import { shuffle } from './utils';

const allUsers = [
  'john',
  'alex',
  'george',
  'simon',
  'james',
];

interface DemoProps {}

export default function CallbackDemo({}: DemoProps) {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = 
  useCallback(
    (text: string) => {
      console.log(users[0]);
      const filteredUsers = allUsers.filter((user) =>
        user.includes(text),
      );
      setUsers(filteredUsers);
    }, [users]); //it does not execute on each render only when the dependency array changes
    
  return (
    <div className='tutorial'>
      <div className='align-center mb-2 flex'>
        <button onClick={() => setUsers(shuffle(allUsers))}>
          Shuffle
        </button>

        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
