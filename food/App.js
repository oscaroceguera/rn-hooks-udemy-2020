import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from './src/screen/searchScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinnessSearch'
  }
});

export default createAppContainer(navigator)