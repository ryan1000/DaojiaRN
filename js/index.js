/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import {
  Scene,
  Router,
  Actions,
  Reducer,
  Tabs,
  ActionConst
} from 'react-native-router-flux'

import Home from './pages/TabView/Home' // 首页
import Login from './pages/Login' // 登录页
import TabView from './pages/TabView' // 导航
import StoreHome from './components/StoreHome' // 导航
import Icon from 'react-native-vector-icons/Entypo';
import './utils/interceptors'

import TabIcon from './components/common/TabView/TabIcon'

// const myIcon = (<Icon name="back" size={20} color="#900" />)
// console.log(nav)
// 创建状态管理器 reducer
const reducerCreate = params => {
  const defaultReducer = new Reducer(params)
  return (state, action) => {
    console.log('Action:', action)
    return defaultReducer(state, action)
  }
}

const getSceneStyle = () => ({
  backgroundColor: 'white',
  shadowOpacity: 1,
  shadowRadius: 3
})

export default class DaojiaRN extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <Router createReducer={reducerCreate} tintColor='red' getSceneStyle={getSceneStyle}>
          <Scene
            leftButtonTextStyle={{color: 'green'}}
            backButtonTextStyle={{color: 'red'}}>
            {/* <Scene key='home' component={Home} title='Home' hideNavBar/> */}
            <Scene key='login' component={Login} title='Login'/>
            <Scene key='storeHome' component={StoreHome} title='门店主页'/>
            <Tabs key='tabbar' tabs hideNavBar initial
              tabBarStyle={styles.tabBarStyle}
              labelStyle={styles.labelStyle}
              gestureEnabled={true}
              activeBackgroundColor='#ddd'
              >
              <Scene key='首页' icon={TabIcon} component={Home} title='tab #1' initial hideNavBar></Scene>
              <Scene key='tab2' icon={TabIcon} component={TabView} title='tab #2'></Scene>
              <Scene key='tab3' icon={TabIcon} component={TabView} title='tab #3'></Scene>
              <Scene key='tab4' icon={TabIcon} component={TabView} title='tab #4'></Scene>
              <Scene key='tab6' icon={TabIcon} component={TabView} title='tab #5'></Scene>
            </Tabs>
          </Scene>
        </Router>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#eee',
    paddingBottom: 0,
  },
  labelStyle: {
    fontSize: 10
  }
})
