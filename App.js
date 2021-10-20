import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreen2 from "./src/screens/SquareScreens2";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import MobileCombat from "./src/screens/MobileCombat";
import AttributeScreen from "./src/screens/AttributeScreen";
import HW2 from "./src/screens/HW2";
import ReviewScreen from './src/screens/ReviewScreen';
import ReviewScreen2 from './src/screens/ReviewScreen2';
import ReviewScreen3 from './src/screens/ReviewScreen3';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Square2: SquareScreen2,
    Text : TextScreen,
    Box : BoxScreen,
    Game : MobileCombat,
    Attribute: AttributeScreen,
    Hw2: HW2,
    Review: ReviewScreen,
    Review2: ReviewScreen2,
    Review3: ReviewScreen3,

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
