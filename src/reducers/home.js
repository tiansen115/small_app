import { SETSEARCHVAL } from '../constants/home'
import pic01 from '../images/slide-1.png'
import pic02 from '../images/slide-2.jpg'
import pic03 from '../images/slide-3.jpg'

const INITIAL_STATE = {
  searchVal: '',
  banners: [
    {id: 1, url: pic01},
    {id: 2, url: pic02},
    {id: 3, url: pic03}
  ]
}

export default function home(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SETSEARCHVAL:
      return {
        ...state,
        searchVal: action.payload
      }
     default:
       return state
  }
}
