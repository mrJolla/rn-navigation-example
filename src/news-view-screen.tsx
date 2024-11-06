import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

export const NewsListScreen = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text>TNewsListScreen</Text>
      <Button title={'News'} onPress={() => navigation.goBack()} />
    </View>
  );
};
