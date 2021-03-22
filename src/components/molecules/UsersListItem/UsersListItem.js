import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Average, Wrapper, UserWrapper } from './UsersListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { UserShape } from '../../../types';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const context = useContext(UsersContext);
  return (
    <Wrapper>
      <Average average={average}>{average}</Average>
      <UserWrapper>
        <p>{name}</p>
        <p>attendance:{attendance}</p>
      </UserWrapper>
      <DeleteButton onClick={() => context.deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};
export default UsersListItem;
