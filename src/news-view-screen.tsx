import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

export const NewsViewScreen = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text>NewsViewScreen</Text>
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
    </View>
  );
};
