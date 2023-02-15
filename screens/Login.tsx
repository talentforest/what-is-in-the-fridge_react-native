import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import tailwind from 'twrnc';
import GoogleIcon from '../components/GoogleIcon';

interface ILoginProps {
  navigation: {
    navigate: any;
  };
}

const Login = ({ navigation: { navigate } }: ILoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={tailwind`flex-1 bg-yellow-50 justify-center items-center px-10`}
    >
      <Text style={tailwind`text-4xl font-bold mb-9`}>Login</Text>
      <TextInput
        style={tailwind`w-full p-3 mb-2 flex items-center text-lg border border-gray-500 rounded-xl bg-white`}
        placeholder='Email'
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        value={email}
        returnKeyType='next'
        onChangeText={(text) => setEmail(text)}
        placeholderTextColor={'#aaa'}
      />
      <TextInput
        style={tailwind`p-3 mb-2 flex items-center text-lg border border-gray-500 w-full rounded-xl bg-white`}
        placeholder='Password'
        secureTextEntry
        value={password}
        returnKeyType='done'
        onChangeText={(text) => setPassword(text)}
        placeholderTextColor={'#aaa'}
      />
      <TouchableOpacity
        style={tailwind`border border-b-4 bg-indigo-500 flex items-center w-full py-3 rounded-xl`}
      >
        <Text style={tailwind`text-lg font-bold text-white`}>Login</Text>
      </TouchableOpacity>
      <View
        style={tailwind`relative flex justify-center items-center m-6 w-full`}
      >
        <View
          style={tailwind`absolute w-full top-2.5 border-b border-gray-400`}
        />
        <Text style={tailwind`text-sm text-center font-bold px-2 bg-yellow-50`}>
          Or
        </Text>
      </View>
      <TouchableOpacity
        style={tailwind`flex-row justify-center px-4 py-3 border border-b-4 bg-yellow-300 flex items-center w-full rounded-xl`}
      >
        <GoogleIcon />
        <Text style={tailwind`ml-2 text-lg font-bold`}>Login with Google</Text>
      </TouchableOpacity>
      <View style={tailwind`flex flex-row justify-center mt-10`}>
        <Text style={tailwind`mr-2`}>Don't have Account?</Text>
        <TouchableOpacity onPress={() => navigate('SignUp')}>
          <Text style={tailwind`font-bold`}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
