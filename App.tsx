import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen} from './src/search-screen.tsx';
import {NewsStack} from './src/news-stack.tsx';
import {ProgramsStack} from './src/programs-stack.tsx';

const TabStack = createBottomTabNavigator();

const MainStack = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <TabStack.Screen name={'NewsStack'} component={NewsStack} />
      <TabStack.Screen name={'ProgramsStack'} component={ProgramsStack} />
      <TabStack.Screen name={'Search'} component={SearchScreen} />
    </TabStack.Navigator>
  );
};

const RootStack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name={'MainStack'} component={MainStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
