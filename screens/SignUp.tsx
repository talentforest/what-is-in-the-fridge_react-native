import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tailwind from 'twrnc';
import GoogleIcon from '../components/GoogleIcon';
import MailIcon from '../components/MailIcon';

interface ILoginProps {
  navigation: {
    navigate: any;
  };
}

const SignUp = ({ navigation: { navigate } }: ILoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={tailwind`flex-1 bg-yellow-50 justify-center items-center px-10`}
    >
      <Text style={tailwind`text-3xl font-bold mb-9`}>Create an Account</Text>
      <TouchableOpacity
        style={tailwind`flex-row border-b-4 px-4 py-3 mb-2 bg-white border flex items-center w-full rounded-xl`}
      >
        <MailIcon />
        <Text style={tailwind`ml-4 text-lg font-bold`}>Sign Up with Email</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tailwind`flex-row border-b-4 px-4 py-3 bg-white border flex items-center w-full rounded-xl`}
      >
        <GoogleIcon />
        <Text style={tailwind`text-lg pl-4 font-bold`}>
          Sign Up with Google
        </Text>
      </TouchableOpacity>
      <View style={tailwind`flex flex-row justify-center mt-10`}>
        <Text style={tailwind`mr-2`}>Already have Account?</Text>
        <TouchableOpacity onPress={() => navigate('Login')}>
          <Text style={tailwind`font-bold`}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUp;
