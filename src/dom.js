window.dom = {
    //创建节点-----------------------------------------------------------------------------------
    create(string) {
        const container = document.createElement('template')//template内可以容纳任何标签
        container.innerHTML = string.trim() //把字符串转换为html标签  trim()可以把字符串两边的空格去掉
        return container.content.firstChild
    },
    //创建弟弟-----------------------------------------------------------------------------------
        after(node, node2) {//把node2插入到node下一个节点的前面（就是创建弟弟）
            node.parentNode.insertBefore(node2,node.nextSibling)
    },
    //创建哥哥-----------------------------------------------------------------------------------
        before(node, node2) {
            node.parentNode.insertBefore(node2,node)
    },
    //创建儿子-----------------------------------------------------------------------------------  
        append(parent, node) {
            parent.appendChild(node)
    },  
    //创建爸爸--------------------------------------------------------------------------------------
        wrap(node, parent) {
            dom.before(node, parent)//先把parent插到node的前面，此时二者为兄弟关系
            dom.append(parent, node)//再把node插到parent的内部，此时原来的node会被干掉（append的特点）
    },
    //删除节点-----------------------------------------------------------------------------------
    remove(node) {
        node.parentNode.removeChild(node)
        return node//获取被删除节点的引用(方便移除之后做些手脚再放回去)
    },
    //删除节点所有后代节点----------------------------------------------------------------------------
    empty(node) {
        // 可以直接用node.innerHTML='',但这种方法获取不到引用
        /* const { childNodes } = node //获取到node所有的孩子
        // const childNodes=node.childNodes */
        const array = []
        let x = node.firstChild
        while (x) {//当x存在时
            // console.log(node.firstChild)
            array.push(dom.remove(node.firstChild))
            // console.log(node.firstChild)
            x=node.firstChild//x这里是动态变化的
        }
        return array
    },
    //改属性-------------------------------------------------------------------------------
    attr(node,name,value) {//重载，根据参数写代码
        if (arguments.length === 3) {//如果参数为3个，修改属性
            node.setAttribute(name,value)
        } else if (arguments.length === 2) {//如果参数为两个，获取属性
            return node.getAttribute(name)
        }
    },
    //改文本内容------------------------------------------------------------------------------------
    text(node, string) {//适配
        if (arguments.length === 2) {//两个参数，说明你想设置
           if ('innerText' in node) {
            node.innerText=(string)  //ie
        } else {
            node.innerText=(string)  //firefox
        } 
        } else if (arguments.length === 1) {//一个参数为获取
            if ('innerText' in node) {
            return node.innerText=(string)  //ie
        } else {
            return node.innerText=(string)  //firefox
        } 
        }
        
    },
    //改html------------------------------------------------------------------------------------
    html(node, string) {//两个参数为修改
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {//一个参数为获取
            return node.innerHTML
        }  
    },
    //改样式----------------------------------------------------------------------------------
    style(node, name, value) {
        if (arguments.length === 3) {//3个参数改样式
            //dom.style(div,'color','red')
            node.style[name]=value
        } else if (arguments.length === 2) {
            //dom.style(div,'color')想获取color
            if (typeof name === 'string') {//name如果是一个字符串就是读取属性值
                return node.style[name]
            } else if (name instanceof Object) {//name是一个实例化的对象，就是name如果是对象就是修改
            //dom.style(div,{color:'red'})想改color
            const object=name
            for (key in object) {
            node.style[key]=object[key]
        }
            }
        }  
    },
    //改class类名----------------------------------------------------------------------------
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node,classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    //修改事件监听事件-----------------------------------------------------------------------------------
    on(node, eventName, fn) {
        node.addEventListener(eventName,fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName,fn)
    },
    //查,find用于获取标签或标签们-------------------------------------------------------------------------------
    find(selector, scope) {
        return (scope||document).querySelectorAll(selector)//存在scope就在scope调用，没有就直接调用
    },
    //获取元素的爸爸-------------------------------------------------------------------------------
    parent(node) {
        return node.parentNode
    },
    //获取元素的儿子-----------------------------------------------------------------------------
    children(node) {
        return node.children
    },
    //获取元素的兄弟姐妹----------------------------------------------------------------------------
    siblings(node) {
        return Array.from(node.parentNode.children).filter(n => n !== node)
            //filter只对数组生效，所以要把孩子转化为数组
            //只要遍历孩子，若孩子不等于我们传的孩子，就过滤一下放到当前数组
    },
    //获取弟弟------------------------------------------------------------------------------
    next(node) {//nextSibling会返回文本节点，需要判断
        let x=node.nextSibling
        while (x&&x.nodeType === 3) {//当节点存在且为文本时
            x=x.nextSibling//继续查找下一个节点
        }
        return x//不存在就直接返回x
    },
    //获取哥哥----------------------------------------------------------------------------------
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {//当节点存在且为文本时
            x = x.previousSibling//继续查找上一个节点
        }
        return x//不存在就直接返回x
    },
    //遍历所有节点------------------------------------------------------------------------------
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++){
            fn.call(null,nodeList[i])
        }
    },
    //获取元素的index-----------------------------------------------------------------------------
    index(node) {
        const list = dom.children(node.parentNode)
        for (var i = 0; i < list.length; i++){
            if (list[i] === node) {
                break
            }
        }
        return i
    }
    }
    

// window.dom = {} //初始化dom为一个空对象
// dom.create=function(){}