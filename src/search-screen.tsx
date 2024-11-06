import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export type TSearch = {}

export const SearchScreen = (props: TSearch) => {
  const navigation = useNavigation();

  return <View style={{
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
  }}>
    <Text>Search</Text>
    <Button title={'News'} onPress={() => navigation.navigate('')} />
  </View>;
};
