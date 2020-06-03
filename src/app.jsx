import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/category/index',
      'pages/cart/index',
      'pages/mine/index',
      'pages/search/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#626567',
      selectedColor: '#6e9eea',
      backgroundColor: '#fbfbfb',
      borderStyle: 'white',
      list: [
        {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/icons/home.png',
        selectedIconPath:'./assets/icons/homeSelected.png'
       },
        {
          pagePath: 'pages/category/index',
          text: '分类',
          iconPath: './assets/icons/category.png',
          selectedIconPath:'./assets/icons/categorySelected.png'
        },
        {
          pagePath: 'pages/cart/index',
          text: '购物车',
          iconPath: './assets/icons/cart.png',
          selectedIconPath:'./assets/icons/cartSelected.png'
        },{
          pagePath: 'pages/mine/index',
          text: '我的',
          iconPath: './assets/icons/mine.png',
          selectedIconPath:'./assets/icons/mineSelected.png'
        }
        ]
    },
    'permission': {
      'scope.userLocation': {
        'desc': '你的位置信息将用于定位效果展示'
      }
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
