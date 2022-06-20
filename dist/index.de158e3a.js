const div = dom.create("<div><span>111</span></div>");
console.log(div);
dom.after(test, div);
const div3 = dom.create('<div3 id="parent"></div3>');
dom.wrap(test, div3);
dom.attr(test, "title", "hello");
const title = dom.attr(test, "title");
console.log(`title:${title}`);
dom.text(test, "\u4F60\u597D\uFF0C\u6211\u662F\u65B0\u7684\u5185\u5BB9");
dom.style(test, {
    border: "1px solid red",
    color: "red"
});
console.log(dom.style(test, "border"));
// dom.style(test,{color:'yellow'})修改值
dom.class.add(test, "yellow");
// dom.class.add(test, 'blue')
console.log(dom.class.has(test, "blue"));
const fn1 = ()=>{
    console.log("\u70B9\u51FB\u4E86");
};
const fn2 = ()=>{
    console.log("\u518D\u6B21\u70B9\u51FB\u4E86");
};
dom.on(test, "click", fn1);
dom.on(test, "click", fn2);
dom.off(test, "click", fn2);
const testDiv = dom.find("#test")[0];
console.log(testDiv);
const testDiv2 = dom.find("#test2")[0];
console.log(dom.find(".red", testDiv2)[0]);
console.log(dom.parent(test));
console.log(dom.siblings(dom.find("#e1")[0]));
console.log(dom.siblings(dom.find("#s2")[0]));
console.log(dom.next(dom.find("#s2")[0])) //返回s3
;
console.log(dom.previous(dom.find("#s2")[0])) //返回s1
;
const t = dom.find("#travel")[0];
console.log(t);
dom.each(dom.children(t), (n)=>dom.style(n, "color", "blue"));
dom.each(dom.children(t), (n)=>dom.style(n, "fontSize", "50px"));
console.log(dom.index(s2));

//# sourceMappingURL=index.de158e3a.js.map
