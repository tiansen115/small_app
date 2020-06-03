import Taro  from '@tarojs/taro'
import {View} from '@tarojs/components'

import './index.scss'

export default function Cart() {

  return (
    <View>
      购物车
    </View>
  )
}

Cart.config = {
  navigationBarTitleText: '购物车'
}
