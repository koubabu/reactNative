import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreen2 from "./src/screens/SquareScreen2";
const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Components: ComponentScreen,
        List: ListScreen,
        Image: ImageScreen,
        Counter: CounterScreen,
        Color: ColorScreen,
        Sqaure: SquareScreen,
        Sqaure2: SquareScreen2,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "Koushik's",
        },
    }
);

export default createAppContainer(navigator);
