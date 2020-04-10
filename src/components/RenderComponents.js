
export default {
    data() {
        return {
            isRed: true,
            arr: [1,2,3,4,5],
            inputValue: ""
        };
    },

    /* <template>
            <div :classs=""{'is-red': isRed }>
                <p>这是一个render 事例</p>
            </div>
       </template> */

    render(h) {
        return h('div', {
            // 第二个参数
            'class': {
                'is-red': this.isRed
            }
        },[
            // 此处为第三个参数
            h('p', '这是一个render 事例')
        ]
        )
    }
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
