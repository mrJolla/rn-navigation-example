import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NewsViewScreen} from './news-view-screen.tsx';
import {NewsListScreen} from './news-list-screen.tsx';

const Stack = createNativeStackNavigator();

export const NewsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'List'} component={NewsListScreen} />
      <Stack.Screen name={'View'} component={NewsViewScreen} />
    </Stack.Navigator>
  );
};
