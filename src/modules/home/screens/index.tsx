import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ROUTES} from '../../../navigation/routes';
import COLORS from '../../../theme';
import ExpertsScreen from '../../experts/screens';
import InsightsScreen from '../../insights/screens';

const Tab = createBottomTabNavigator();

const ASSET_MAP = {
  [ROUTES.INSIGHTS]: () => (
    <Icon name="bolt" size={16} color={COLORS.primary} />
  ),
  [ROUTES.EXPERTS]: () => (
    <Icon name="balance-scale" size={16} color={COLORS.primary} />
  ),
};

const STRING_MAP: any = {
  [ROUTES.INSIGHTS]: 'Insights',
  [ROUTES.EXPERTS]: 'Experts',
};

function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  return (
    <View style={styles.main}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={route.key}
            style={styles.item}>
            {(ASSET_MAP as any)[route.name](isFocused)}
            <View style={styles.spacerOne} />
            <Text style={styles.routeName}>{STRING_MAP[route.name]}</Text>
            <View style={styles.spacerOne} />
            {isFocused ? <View style={styles.focusedBar} /> : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const HomeScreen = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name={ROUTES.INSIGHTS}
        component={InsightsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={ROUTES.EXPERTS}
        component={ExpertsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    paddingTop: 8,
    backgroundColor: '#FFFFFF',
  },
  item: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  spacerOne: {height: 4},
  routeName: {color: COLORS.primary},
  focusedBar: {
    height: 4,
    width: 50,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: COLORS.primary,
  },
});

export default HomeScreen;
