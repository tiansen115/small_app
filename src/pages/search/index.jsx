import Taro, {useRouter} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'

export default function Search() {

  const router = useRouter()
  const {searchVal} = router.params

  console.log(searchVal)

  return (
    <View>
      搜索页
      <Text>{searchVal}</Text>
    </View>
  )
}

Search.config = {
  navigationBarTitleText: '搜索页',
}

