import React, { Component } from 'react'
import store from '../../redux/store'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'



export default class Count extends Component {
    // 去掉共享的状态
    state = {}
    
    // 手动刷新 render 这种方法效率低
    // componentDidMount() {
    //     // store.subscribe
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }
    
    // 箭头函数快捷键 anfn
    increment = () => {
        // 解构赋值快捷键 dob
        const { value } = this.selectNumber
        // store.dispatch 分发任务
        // 自己写 action
        // store.dispatch({type:'increment',data:value*1})
        
        // action写
        store.dispatch(createIncrementAction(value*1))
    }
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch(createDecrementAction(value * 1))
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        // 需要用状态时再取
        const  count  = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }
    incrementAsync= () => {
        const { value } = this.selectNumber
        // 开启定时器 异步操作
        // setTimeout(() => {
        // 使用异步 action 实现
            store.dispatch(createIncrementAsyncAction(value * 1,500))
        // }, 500)
    }
    render() {
        return (
            <div>
                {/* store.getState 获取状态 */}
                <h1>求和结果：{store.getState()}</h1> 
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                &nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
                
            </div>
        )
    }
}
