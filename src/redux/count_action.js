//该文件专门为Count组件生成action对象
// 即 动作 要干什么

import {INCREMENT,DECREMENT} from './constant';

// 正常写法
// export function createIncrementAction(data) {
//     return{type:INCREMENT,data}
// }
// 箭头函数
// export const createIncrementAction = (data) => {
//     return { type: INCREMENT, data }
// }
// 箭头函数（简写） 
// 注意 ({ type: INCREMENT, data }) 需要加一层括号 不然以为是函数
export const createIncrementAction = data =>  ({ type: INCREMENT, data })

export const createDecrementAction = data => ({ type: DECREMENT, data })

export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAsyncAction(data))
        })
    }
}
