import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const SearchScreen = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text>Search</Text>
      <Button
        title={'NewsViewScreen'}
        onPress={() =>
          navigation.navigate('NewsStack', {
            screen: 'View',
            params: {
              id: 1,
            },
          })
        }
      />
    </View>
  );
};
