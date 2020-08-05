import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen"
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import PasswordScreen from './src/screens/PasswordScreen'
import BoxScreen from './src/screens/BoxScreen';
import FlexScreen from './src/screens/FlexScreen';
import PositionScreen from './src/screens/PositionScreen';
import LayoutChallengeScreen from './src/screens/LayoutChallengeScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    TextInput: TextScreen,
    Password: PasswordScreen,
    Box: BoxScreen,
    Flex: FlexScreen,
    Position: PositionScreen,
    Layout: LayoutChallengeScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
