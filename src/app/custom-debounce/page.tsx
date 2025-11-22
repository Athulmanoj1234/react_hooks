"use client"

import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchUsers, User } from './utils';
import { useDebounce } from './customhooks';


export default function Demo() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState<User[]>([]);
   const debounceValue = useDebounce(search);  //search value will go to debounce hooks and it is delayed for delay time in debounce hook 

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const users = await fetchUsers(debounceValue!);
    //   debugger;
      setUsers(users);
     
      setLoading(false);
    };
    loadUsers();
  }, [debounceValue]);

  return (
    <div className='tutorial'>
      <SearchBar onChange={setSearch} />
      {loading && <div>Loading...</div>}
      {!loading &&
        users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </div>
  );
}