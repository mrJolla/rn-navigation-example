import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

export const ProgramsListScreen = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text>ProgramsListScreen</Text>
      <Button
        title={'To search'}
        onPress={() =>
          navigation.navigate('MainStack', {
            screen: 'Search',
          })
        }
      />
    </View>
  );
};
