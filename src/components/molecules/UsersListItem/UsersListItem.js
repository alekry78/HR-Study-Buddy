import React from 'react';
import PropTypes from 'prop-types';
import { Average, Wrapper, UserWrapper } from './UsersListItem.styles';
import Button from 'components/atoms/Button/Button';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <Average average={average}>{average}</Average>
    <UserWrapper>
      <p>{name}</p>
      <p>attendance:{attendance}</p>
    </UserWrapper>
    <Button onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};
export default UsersListItem;
