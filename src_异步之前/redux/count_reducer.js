// reducer 本质为函数
// 函数接收两个参数 之前的状态(preState)，动作对象(action)

import{INCREMENT,DECREMENT} from './constant'
// 初始化状态
const initState = 0;

// 暴露reducer
export default function countReducer(pre = initState, action) {
    // 从actiondui'action 对象中取出 type data
    const { type, data } = action
    // 根据type决定如何运算
    switch (type) {
        case INCREMENT://加
            return pre + data
        case DECREMENT://减
            return pre - data
        default:
            return pre
    }
}