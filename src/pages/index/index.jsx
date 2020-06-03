import Taro, { useState } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image  } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'

import { useSelector, useDispatch } from '@tarojs/redux'

import './index.scss'
import { SETSEARCHVAL } from "../../constants/home";

export default function Index() {
  const [searchVal, setSearchVal] = useState('')

  const banners = useSelector(state => state.home.banners)

  const dispatch = useDispatch()

  function onSearchChange(val) {
    console.log(val)
    setSearchVal(val)
  }

  function onSearchActionClick () {
    dispatch({
      type: SETSEARCHVAL,
      payload: searchVal
    })
    Taro.redirectTo({
      url: `/pages/search/index?searchVal=${searchVal}`
    })
  }

    return (
      <View className='index'>
        {/*搜素框*/}
        <View>
          <AtSearchBar
            actionName='搜一下'
            value={searchVal}
            onChange={onSearchChange.bind(this)}
            onActionClick={onSearchActionClick}
          />
        </View>
        {/*轮播图*/}
        <View>
          <Swiper
            className='swiper-container'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay
          >
            { banners.map((item, index) => (
              <SwiperItem key={index}>
                <Image className='swiper-img' mode='widthFix' src={item.url}></Image>
              </SwiperItem>
              ))}
          </Swiper>
        </View>
      </View>
    )
}

Index.config = {
  navigationBarTitleText: '首页'
}
