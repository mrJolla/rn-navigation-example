import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProgramsListScreen} from './programs-list-screen.tsx';
import {ProgramsViewScreen} from './programs-view-screen.tsx';

const Stack = createNativeStackNavigator();

export const ProgramsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'List'} component={ProgramsListScreen} />
      <Stack.Screen name={'View'} component={ProgramsViewScreen} />
    </Stack.Navigator>
  );
};
