import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Nav = createNativeStackNavigator();

const InNav = () => {
  return (
    <Nav.Navigator>
      <Nav.Screen name='Home' component={Home} />
      <Nav.Screen name='Login' component={Login} />
    </Nav.Navigator>
  );
};

export default InNav;
