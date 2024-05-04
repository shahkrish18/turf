import React from 'react';
import { View, Text, FlatList, Pressable} from 'react-native';
import { turf } from '../constants/turfs';
import tw from 'twrnc'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';


const TurfList = ({selectedSport}) => {

  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('TurfDetails', { turf: item });
  };

  const renderItem = ({ item }) => (
    <View style={tw`mt-3 items-center`}>
      <Pressable style={tw`border border-slate-400 w-80 h-40 rounded-xl p-3`} onPress={()=>handlePress(item)}>
            <Text style={tw`text-black font-bold text-base`}>{item.turf_name}</Text>
            <View style={tw`flex-row items-center mt-3`}>
              <Entypo name="location-pin" size={24} color="black" />
              <Text style={tw`text-black`}>{item.location}</Text>
            </View>
            <Text style={tw`text-black mt-3`}>Rate: ${item.rate_per_hour} per hour</Text>
            {item.facilities && Array.isArray(item.facilities) && (
          <Text style={tw`text-black mt-2`}>Facilities: {item.facilities.join(', ')}</Text>
        )}
      </Pressable>
    </View>
  );

  const filteredTurf = selectedSport ? turf.filter(item => item.sport === selectedSport || item.sport==='any') : turf;
  return (
    <FlatList
      data={filteredTurf}
      renderItem={renderItem}
      keyExtractor={(item) => item.turf_name}
    />
  );
};

export default TurfList;