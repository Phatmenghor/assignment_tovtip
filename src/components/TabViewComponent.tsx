import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Dimensions,
} from 'react-native';
import {TabView, SceneMap, TabBar, TabBarProps} from 'react-native-tab-view';
import {colors} from '../constants/color';

interface MyRoute {
  key: string;
  title: string;
  component: React.ComponentType<any>;
}

export interface Screen {
  title: string;
  component: React.ComponentType<any>;
}

interface TabViewProps {
  screens: Screen[];
  style?: StyleProp<ViewStyle>;
}

const TabViewComponent: React.FC<TabViewProps> = ({screens, style}) => {
  const [index, setIndex] = React.useState<number>(0);

  const routes: MyRoute[] = screens.map((screen, i) => ({
    key: `tab_${i}`,
    title: screen.title,
    component: screen.component,
  }));

  const renderScene = SceneMap(
    Object.fromEntries(routes.map(route => [route.key, route.component])),
  );

  const initialLayout = {width: Dimensions.get('window').width};

  const renderTabBar = (props: TabBarProps<MyRoute>) => (
    <View style={styles.wrapTab}>
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={styles.tabBar}
        renderLabel={({route, focused}: {route: MyRoute; focused: boolean}) => (
          <View style={styles.tab}>
            <Text
              style={focused ? styles.textTabViewFocused : styles.textTabView}>
              {route.title}
            </Text>
          </View>
        )}
      />
      <View style={styles.line} />
    </View>
  );

  return (
    <TabView
      style={style}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: colors.disableText,
  },
  wrapTab: {
    backgroundColor: colors.white,
  },
  textTabView: {
    fontSize: 16,
  },
  textTabViewFocused: {
    fontSize: 16,
  },
  textRightView: {
    marginLeft: 2,
    color: colors.disableText,
    fontSize: 14,
    marginBottom: 1,
  },
  tabBar: {
    backgroundColor: colors.white,
    elevation: 0,
    marginHorizontal: 16,
  },
  indicator: {
    backgroundColor: colors.primaryColor,
    elevation: 10,
    height: 4,
    borderRadius: 4,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 4,
  },
});

export default TabViewComponent;
