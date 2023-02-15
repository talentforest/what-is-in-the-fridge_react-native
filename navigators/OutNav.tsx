import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';

const Nav = createNativeStackNavigator();

const OutNav = () => {
  return (
    <Nav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Nav.Screen name='Login' component={Login} />
      <Nav.Screen name='SignUp' component={SignUp} />
    </Nav.Navigator>
  );
};

export default OutNav;
