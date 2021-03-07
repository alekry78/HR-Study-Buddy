import React, { useState, useEffect } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users as usersData } from '../../../data/users';
import { Wrapper } from './UsersList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};
const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  const deleteUser = (name) => {
    const filteredUser = users.filter((user) => user.name !== name);
    setUsers(filteredUser);
  };
  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then(data => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch(err => console.log(err));
  },[]);

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
      <ul>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} deleteUser={deleteUser} />
        ))}
      </ul>
    </Wrapper>
  );
};
export default UsersList;
