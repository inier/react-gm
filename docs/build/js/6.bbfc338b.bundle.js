(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{247:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),n=function(e){return e&&e.__esModule?e:{default:e}}(l(0)),c=l(7);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={},l}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),a(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return n.default.createElement("div",{className:"doc"},n.default.createElement("h2",{id:"tip"},n.default.createElement("a",{className:"header-anchor",href:"#tip","aria-hidden":"true"},"¶")," Tip"),n.default.createElement("p",null,"提示框，右上角"),n.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},n.default.createElement("div",{className:"doc-demo-instance"},n.default.createElement("h4",null,"Example"),n.default.createElement("div",null,n.default.createElement(c.Tip,{type:"success"},"啊啊啊"),n.default.createElement(c.Tip,{type:"info"},"啊啊啊"),n.default.createElement(c.Tip,{type:"warning"},"啊啊啊"),n.default.createElement(c.Tip,{type:"danger"},"啊啊啊"),n.default.createElement(c.Tip,{type:"success",title:"错误"},"啊啊啊"))),n.default.createElement("div",{className:"doc-demo-meta"},n.default.createElement("div",{className:"doc-demo-description"},n.default.createElement("p",null,"几种类型")),n.default.createElement("div",{className:"doc-demo-code"},n.default.createElement("pre",null,n.default.createElement("code",{className:"language-jsx"},"<div>",n.default.createElement("br",null),'    <Tip type="success">啊啊啊</Tip>',n.default.createElement("br",null),'    <Tip type="info">啊啊啊</Tip>',n.default.createElement("br",null),'    <Tip type="warning">啊啊啊</Tip>',n.default.createElement("br",null),'    <Tip type="danger">啊啊啊</Tip>',n.default.createElement("br",null),'    <Tip type="success" title="错误">啊啊啊</Tip>',n.default.createElement("br",null),"</div>",n.default.createElement("br",null)))),n.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},n.default.createElement("i",null)))),n.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode9?"doc-demo-code-active":"")},n.default.createElement("div",{className:"doc-demo-instance"},n.default.createElement("h4",null,"Example"),n.default.createElement("div",null,n.default.createElement("button",{className:"btn btn-primary",onClick:function(){return window.___lastTip=c.Tip.info("提示啦，提示啦")}},"默认 3s 关闭"),n.default.createElement("button",{className:"btn btn-default",onClick:function(){return window.___lastTip=c.Tip.success({children:"需要用户自行关闭的",time:0,onClose:function(){return console.log("tip closed by user")}})}},"需要用户自行关闭的"),n.default.createElement("button",{className:"btn btn-default",onClick:function(){return c.Tip.clear(window.___lastTip)}},"关闭指定 tip （比如最后一个tip）"))),n.default.createElement("div",{className:"doc-demo-meta"},n.default.createElement("div",{className:"doc-demo-description"},n.default.createElement("p",null,"浮层形式")),n.default.createElement("div",{className:"doc-demo-code"},n.default.createElement("pre",null,n.default.createElement("code",{className:"language-jsx"},"<div>",n.default.createElement("br",null),'    <button className="btn btn-primary" onClick=',"{","() => window.___lastTip = Tip.info('提示啦，提示啦')","}",">默认 3s 关闭</button>",n.default.createElement("br",null),'    <button className="btn btn-default" onClick=',"{","() => window.___lastTip = Tip.success(","{",n.default.createElement("br",null),"        children: '需要用户自行关闭的',",n.default.createElement("br",null),"        time: 0,",n.default.createElement("br",null),"        onClose: () => console.log('tip closed by user')",n.default.createElement("br",null),"    ","}",")","}",">需要用户自行关闭的</button>",n.default.createElement("br",null),'    <button className="btn btn-default" onClick=',"{","() => Tip.clear(window.___lastTip)","}",">关闭指定 tip （比如最后一个tip）</button>  ",n.default.createElement("br",null),"</div>",n.default.createElement("br",null)))),n.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,9)},n.default.createElement("i",null)))),n.default.createElement("h3",{id:"props"},n.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement("code",null,"title (string)")," 标题啦"),n.default.createElement("li",null,n.default.createElement("code",null,"type (string)")," 类型，有",n.default.createElement("code",null,"success")," ",n.default.createElement("code",null,"info")," ",n.default.createElement("code",null,"warning")," ",n.default.createElement("code",null,"danger"),"四种"),n.default.createElement("li",null,n.default.createElement("code",null,"onClose")," (func) 关闭后触发"),n.default.createElement("li",null,n.default.createElement("code",null,"children")," 显示的内容，一般提供字符串，也可以是其他")),n.default.createElement("h3",{id:"static"},n.default.createElement("a",{className:"header-anchor",href:"#static","aria-hidden":"true"},"¶")," Static"),n.default.createElement("p",null,"方法返回 id ,可以通过 clear(id) 来关闭指定的 tip"),n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement("code",null,"success()")),n.default.createElement("li",null,n.default.createElement("code",null,"info()")),n.default.createElement("li",null,n.default.createElement("code",null,"warning()")),n.default.createElement("li",null,n.default.createElement("code",null,"danger()")),n.default.createElement("li",null,n.default.createElement("code",null,"clear(id)")),n.default.createElement("li",null,n.default.createElement("code",null,"clearAll()"))))}}]),t}();t.default=u}}]);
//# sourceMappingURL=6.bbfc338b.bundle.js.map