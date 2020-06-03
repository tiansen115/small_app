import Taro  from '@tarojs/taro'
import {View} from '@tarojs/components'

import './index.scss'

export default function Mine() {

  return (
    <View>
      我的
    </View>
  )
}

Mine.config = {
  navigationBarTitleText: '我的'
}
