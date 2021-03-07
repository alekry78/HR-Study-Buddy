import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';

const UsersList = ({ users, deleteUser }) => {
  return (
    <Wrapper>
      <ul>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} deleteUser={deleteUser} />
        ))}
      </ul>
    </Wrapper>
  );
};
export default UsersList;
