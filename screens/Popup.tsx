import React, { useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc'

const SplashScreen = ({navigation}:any) => {
  const navigationRef = useRef(navigation);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to another screen after 3 seconds
      navigationRef.current.replace('Home');
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timeout); // Clear the timeout if component unmounts
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', padding:25 , backgroundColor:'white'}}>
      <View style={tw`bg-gray-200 p-2`} >
        <Text style={tw`text-black`} >Logo</Text>
      </View>
      <View style={tw`mt-30`}>
      <Text style={tw`text-black text-6xl`} >All your favourite turfs in one app</Text>
      </View>
    </View>
  );
};

export default SplashScreen;