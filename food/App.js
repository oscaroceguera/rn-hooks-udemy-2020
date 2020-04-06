import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from './src/screen/searchScreen'
import ResultsShowScreen from './src/screen/ResultsShowScreen'

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "BusinnessSearch",
    },
  }
);

export default createAppContainer(navigator)