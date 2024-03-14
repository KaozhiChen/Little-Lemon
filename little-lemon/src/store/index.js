import { createStore } from 'redux';

// 初始状态
const initialState = {
  guests: '',
  date: '',
  time: '',
};

// Reducer函数
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GUESTS':
      return { ...state, guests: action.payload };
    case 'SET_DATE':
      return { ...state, date: action.payload };
    case 'SET_TIME':
      return { ...state, time: action.payload };
    default:
      return state;
  }
};

// 创建store
const store = createStore(reducer);

export default store;
