import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import tw from 'twrnc'


export default function TurfDetails ({ route }) {
    const { turf } = route.params;
  
    return (
      <View >
        {/* <Text>Turf Name: {turf.turf_name}</Text>
        <Text>Location: {turf.location}</Text>
        <Text>Rate per hour: ${turf.rate_per_hour}</Text>
        {turf.facilities && Array.isArray(turf.facilities) && (
          <Text>Facilities: {turf.facilities.join(', ')}</Text>
        )} */}
        <ImageBackground source={uri= require('../assets/turf.jpg')} style={{width: '100%', height: 250}}>
            <View style={tw`border border-black h-150 w-90 mt-60 rounded-2xl bg-white `}>
                <Text style={tw`text-black font-bold text-2xl text-center mt-5`}>{turf.turf_name}</Text>
                <Text style={tw`text-black text-center mt-1`}>{turf.location}</Text>
                <View style={tw`p-4`}>
                    <Text style={tw`text-black text-xl font-bold`}>Select Date</Text>
                </View>
            </View>
        </ImageBackground>

      </View>
    );
  };