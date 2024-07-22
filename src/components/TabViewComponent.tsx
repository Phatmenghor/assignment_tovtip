// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   StyleProp,
//   ViewStyle,
//   Dimensions,
// } from 'react-native';
// import {TabView, SceneMap, TabBar, TabBarProps} from 'react-native-tab-view';

// interface MyRoute {
//   key: string;
//   title: string;
//   titleRight?: string;
//   component: React.ComponentType<any>;
// }

// export interface Screen {
//   title: string;
//   titleRight?: string;
//   component: React.ComponentType<any>;
// }

// interface TabViewProps {
//   screens: Screen[];
//   style?: StyleProp<ViewStyle>;
// }

// const TabViewComponent: React.FC<TabViewProps> = ({screens, style}) => {
//   const [index, setIndex] = useState<number>(0);

//   // Initialize routes directly from screens prop
//   const routes: MyRoute[] = screens.map((screen, i) => ({
//     key: `tab_${i}`,
//     title: screen.title,
//     titleRight: screen.titleRight,
//     component: screen.component,
//   }));

//   // Define renderScene without useCallback
//   const renderScene = SceneMap(
//     Object.fromEntries(routes.map(route => [route.key, route.component])),
//   );

//   const initialLayout = {width: Dimensions.get('window').width};

//   const renderTabBar = (props: TabBarProps<MyRoute>) => (
//     <View style={styles.wrapTab}>
//       <TabBar
//         {...props}
//         indicatorStyle={styles.indicator}
//         style={styles.tabBar}
//         renderLabel={({route, focused}: {route: MyRoute; focused: boolean}) => (
//           <View style={styles.tab}>
//             <Text
//               style={focused ? styles.textTabViewFocused : styles.textTabView}>
//               {route.title}
//             </Text>
//             {route.titleRight && (
//               <Text
//                 style={
//                   focused ? styles.textRightFocused : styles.textRightView
//                 }>
//                 {route.titleRight}
//               </Text>
//             )}
//           </View>
//         )}
//       />
//       <View style={styles.line} />
//     </View>
//   );

//   return (
//     <TabView
//       style={style}
//       navigationState={{index, routes}}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={initialLayout}
//       renderTabBar={renderTabBar}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   line: {
//     height: 1,
//     backgroundColor: '#dcdcdc', // Light gray color for the line
//   },
//   wrapTab: {
//     backgroundColor: '#ffffff', // White background for the tab bar
//   },
//   textTabView: {
//     color: '#a9a9a9', // Dim gray color for inactive text
//     fontSize: 14,
//   },
//   textTabViewFocused: {
//     color: '#007bff', // Blue color for active text
//     fontSize: 14,
//   },
//   textRightView: {
//     marginLeft: 2,
//     color: '#a9a9a9', // Dim gray color for inactive right text
//     fontSize: 14,
//     marginBottom: 1,
//   },
//   textRightFocused: {
//     marginLeft: 2,
//     color: '#007bff', // Blue color for active right text
//     fontSize: 14,
//     marginBottom: 1,
//   },
//   tabBar: {
//     backgroundColor: '#ffffff', // White background for the tab bar
//     elevation: 0,
//     marginHorizontal: 16,
//   },
//   indicator: {
//     backgroundColor: '#007bff', // Blue color for the indicator
//     elevation: 10,
//     height: 4,
//     borderRadius: 4,
//   },
//   tab: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingBottom: 4,
//   },
// });

// export default TabViewComponent;
