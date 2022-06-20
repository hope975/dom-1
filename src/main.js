const div = dom.create('<div><span>111</span></div>')
console.log(div)
dom.after(test, div)
const div3 = dom.create('<div3 id="parent"></div3>')
dom.wrap(test, div3)
dom.attr(test, 'title', 'hello')
const title = dom.attr(test, 'title')
console.log(`title:${title}`);
dom.text(test, '你好，我是新的内容')
dom.style(test, { border: '1px solid red', color: 'red' })
console.log(dom.style(test, 'border'))
// dom.style(test,{color:'yellow'})修改值
dom.class.add(test, 'yellow')
// dom.class.add(test, 'blue')
console.log(dom.class.has(test, 'blue'))
const fn1=()=>{
    console.log('点击了');
}
const fn2 = () => {
    console.log('再次点击了')
}
dom.on(test,'click',fn1)
dom.on(test,'click',fn2)
dom.off(test, 'click', fn2)
const testDiv = dom.find('#test')[0]
console.log(testDiv)
const testDiv2 = dom.find('#test2')[0]
console.log(dom.find('.red', testDiv2)[0])
console.log(dom.parent(test))
console.log(dom.siblings(dom.find('#e1')[0]));
console.log(dom.siblings(dom.find('#s2')[0]));
console.log(dom.next(dom.find('#s2')[0]))//返回s3
console.log(dom.previous(dom.find('#s2')[0]))//返回s1
const t = dom.find('#travel')[0]
console.log(t);
dom.each(dom.children(t),(n)=>dom.style(n,'color','blue'))
dom.each(dom.children(t), (n) => dom.style(n, 'fontSize', '50px'))
console.log(dom.index(s2));