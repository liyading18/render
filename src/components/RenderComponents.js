
export default {
    data() {
        return {
            isRed: true,
            arr: [1,2,3,4,5],
            inputValue: ""
        };
    },

    props: ['value'],
    // v-model
    render(h) {
        var self = this
        return h('input', {
            // 原生dom下的
            domProps: {
                value: self.value
            },
            on: {
                'input': function(event) {
                    self.$emit('input', event.target.value)
                }
            }
        })
    }



    // <template>
    //     <ul>
    //         <li v-for="item of arr">
    //             {{ item }}
    //         </li>
    //     </ul>
    // </template>

    // render(h) {
    //     return h('ul', this.arr.map(item => h('li', item)))
    // }


    /* <template>
            <div :classs=""{'is-red': isRed } v-if="isRed">
                <p>这是一个render 事例</p>
            </div>
            <div v-else>
                <p>isRed 为 fasle</p>
            </div>
       </template> */

    // render(h) {
    //     // render函数中不可以使用vue指令。只能使用原生指令
    //     if (this.isRed) {
    //         return h('div', 
    //             {
    //                 // 第二个参数
    //                 'class': {
    //                     'is-red': this.isRed
    //                 }
    //              },
    //             [
    //                 // 此处为第三个参数
    //                 h('p', '这是一个render 事例')
    //             ]
    //         )
    //     } else {
    //         return h('div', [h('p', 'isRed 为 fasle')])
    //     }
       
    // }
};


/**
 * vue中的render会返回一个createElement参数,这个参数是一个方法
 * createElement 可以简写成 h 函数
 * 1. createElement方法接收三个参数
 *      第一个参数： 'div' 为标签名字
 *      第二个参数： 为标签上的属性，这个属性包括很多：
 *                     class:{}  style:{}  attrs:{}  props:{} domProps:{原生DOM属性}   on:{ 事件 }
 *      第三个参数： 子元素
 *                   [
 *                      '先写一些文字',
 *                      ccreateElement('h1', '一则头条')
 *                   ]
 *                              
 */
