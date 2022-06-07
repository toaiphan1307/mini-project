import {Navigation} from 'react-native-navigation';
import DetailCoutryScreen from '~/DetailCountryScreen';
import ContinentScreen from '~/ContinentScreen';
import {HomeScreen} from '~/HomeScreen';

Navigation.registerComponent('HomeScreen', () => HomeScreen);
Navigation.registerComponent('DetailCoutryScreen', () => DetailCoutryScreen);
Navigation.registerComponent('ContinentScreen', () => ContinentScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'HomeScreen',
            },
          },
        ],
      },
    },
  });
});
