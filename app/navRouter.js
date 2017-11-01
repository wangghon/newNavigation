import React from 'react';
import { Router, Stack, Scene, Tabs, Reducer } from 'react-native-router-flux';

import TabIcon from 'components/TabIcon';
import ChatScreen from 'screens/ChatScreen';
import ListScreen from 'screens/ListScreen';
import ItemScreen from 'screens/ItemScreen';

const KEY_CHAT_SCREEN = 'chat';
const KEY_LIST_SCREEN = 'list';
const KEY_ITEM_SCREEN = 'item';

const reducerCreate = (params) => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    return defaultReducer(state, action);
  };
};

const getSceneStyle = () => ({
  backgroundColor: '#F5FCFF',
  shadowOpacity: 1,
  shadowRadius: 3,
});

const NavRouter = () => (
  <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
    <Stack hideNavBar key="root" titleStyle={{ alignSelf: 'center' }}>
      <Scene hideNavBar>
        <Tabs key="tabbar" swipeEnabled showLabel={false} tabBarStyle={styles.tabBarStyle} activeBackgroundColor="white" inactiveBackgroundColor="rgba(255, 0, 0, 0.5)">
          <Stack key="tab_1" title="Tab #1" tabBarLabel="TAB #1" inactiveBackgroundColor="#FFF" activeBackgroundColor="#DDD" icon={TabIcon} navigationBarStyle={{ backgroundColor: 'green' }} titleStyle={{ color: 'white', alignSelf: 'center' }}>
            <Scene key={KEY_LIST_SCREEN} component={ListScreen} title="Tab #1_1" />
            <Scene key={KEY_ITEM_SCREEN} component={ItemScreen} title="Tab #1_2" back titleStyle={{ color: 'black', alignSelf: 'center' }}/>
          </Stack>
          <Scene key={KEY_CHAT_SCREEN} component={ChatScreen} title="Tab #2_1" />
        </Tabs>
      </Scene>
    </Stack>
  </Router>
);

export default NavRouter;

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});
