import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from '../components/organisms/Form/Form';
import { users as usersData } from '../data/users';
import UsersList from '../components/organisms/UsersList/UsersList';
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const Root = () => {
  const initialFormState = {
    name: '',
    attendance: '',
    average: '',
  };
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUser = users.filter((user) => user.name !== name);
    setUsers(filteredUser);
  };
  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([...users, newUser]);
    setFormValues(initialFormState);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-user">Add Users</Link>
          </nav>
          <Switch>
            <Route exact path="/">
              <UsersList users={users} deleteUser={deleteUser} />
            </Route>
            <Route path="/add-user">
              <Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};
export default Root;
