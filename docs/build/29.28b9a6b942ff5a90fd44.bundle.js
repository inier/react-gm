webpackJsonp([29],{502:function(e,t,l){"use strict";function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var m=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),d=l(1),c=function(e){return e&&e.__esModule?e:{default:e}}(d),s=l(242),o=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),m(t,[{key:"render",value:function(){return c.default.createElement(s.Form,{onSubmit:this.handleSubmit},c.default.createElement(s.FormItem,{label:"姓名"},c.default.createElement("input",{type:"text"})),c.default.createElement(s.FormItem,{label:"描述"},c.default.createElement("textarea",{type:"text",name:"desc"})),c.default.createElement(s.FormButton,null,c.default.createElement("button",{className:"btn btn-primary",type:"submit"},"提交")))}}]),t}(c.default.Component),f=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),m(t,[{key:"render",value:function(){return c.default.createElement(s.Form,{onSubmit:this.handleSubmit,inline:!0},c.default.createElement(s.FormItem,{label:"姓名"},c.default.createElement("input",{type:"text"})),c.default.createElement(s.FormItem,{label:"描述"},c.default.createElement("textarea",{type:"text",name:"desc"})),c.default.createElement(s.FormButton,null,c.default.createElement("button",{className:"btn btn-primary",type:"submit"},"提交")))}}]),t}(c.default.Component),i=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),m(t,[{key:"render",value:function(){return c.default.createElement(s.Form,{onSubmit:this.handleSubmit,labelWidth:"100px",horizontal:!0},c.default.createElement(s.FormItem,{label:"姓名"},c.default.createElement("input",{type:"text"})),c.default.createElement(s.FormItem,{label:"描述"},c.default.createElement("textarea",{type:"text",name:"desc"})),c.default.createElement(s.FormButton,null,c.default.createElement("button",{className:"btn btn-primary",type:"submit"},"提交")))}}]),t}(c.default.Component),E=function(e){function t(e){n(this,t);var l=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={email:"",url:"",cityList:[],city:null},l}return u(t,e),m(t,[{key:"handleChangeOther",value:function(e,t){this.setState(a({},e,t))}},{key:"render",value:function(){return c.default.createElement(s.Form,{onSubmit:this.handleSubmit},c.default.createElement(s.FormItem,{label:"姓名"},c.default.createElement("input",{type:"text"})),c.default.createElement(s.FormItem,{label:"姓名",error:!0,help:"错误啦"},c.default.createElement("input",{type:"text"})),c.default.createElement(s.FormItem,{label:"网址"},c.default.createElement("div",null,c.default.createElement(s.Dropper,null)," 其他东西")),c.default.createElement(s.FormItem,{label:"多选（行内排列）"},c.default.createElement(s.CheckboxGroup,{inline:!0,name:"cityList",value:this.state.cityList,onChange:this.handleChangeOther.bind(this,"cityList")},c.default.createElement(s.Checkbox,{value:1},"广州"),c.default.createElement(s.Checkbox,{value:2},"深圳"))),c.default.createElement(s.FormItem,{label:"单选"},c.default.createElement(s.RadioGroup,{name:"city",value:this.state.city,onChange:this.handleChangeOther.bind(this,"city")},c.default.createElement(s.Radio,{value:1},"广州"),c.default.createElement(s.Radio,{value:2},"深圳"))),c.default.createElement(s.FormButton,null,c.default.createElement("button",{className:"btn btn-primary",type:"submit"},"提交")))}}]),t}(c.default.Component),b=function(e){function t(e){n(this,t);var l=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={email:"",repeat_email:"",url:"",name:""},l.validateRepeatEmail=l.validateRepeatEmail.bind(l),l}return u(t,e),m(t,[{key:"handleSubmit",value:function(e){console.log("submit")}},{key:"handleSubmitValidated",value:function(){console.log("handleSubmitValidated")}},{key:"validateRepeatEmail",value:function(e){return e===this.state.email?"":"两次邮件输入不一致"}},{key:"render",value:function(){var e=this;return c.default.createElement(s.Form,{onSubmit:this.handleSubmit,onSubmitValidated:this.handleSubmitValidated},c.default.createElement(s.FormItem,{label:"名字",required:!0,validate:s.Validator.create([],this.state.name)},c.default.createElement("input",{type:"text",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}})),c.default.createElement(s.FormItem,{label:"网址",validate:s.Validator.create(s.Validator.TYPE.url,this.state.url)},c.default.createElement("input",{type:"text",value:this.state.url,onChange:function(t){return e.setState({url:t.target.value})}})),c.default.createElement(s.FormItem,{label:"邮件",required:!0,validate:s.Validator.create([s.Validator.TYPE.email],this.state.email)},c.default.createElement("input",{type:"text",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})),c.default.createElement(s.FormItem,{label:"重复邮件",required:!0,validate:s.Validator.create([s.Validator.TYPE.email],this.state.repeat_email,this.validateRepeatEmail)},c.default.createElement("input",{type:"text",value:this.state.repeat_email,onChange:function(t){return e.setState({repeat_email:t.target.value})}})),c.default.createElement(s.FormButton,null,c.default.createElement("button",{className:"btn btn-primary",type:"submit"},"提交")))}}]),t}(c.default.Component),p=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),m(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(s.Form,{onSubmit:this.handleSubmit},c.default.createElement(s.FormBlock,null,c.default.createElement(s.FormItem,{label:"姓名",required:!0,inline:!0,width:"200px",validate:s.Validator.create([],"")},c.default.createElement("input",{type:"text"})),c.default.createElement(s.FormItem,{label:"身高",inline:!0},c.default.createElement("input",{type:"text"}))),c.default.createElement(s.FormItem,{label:"姓名",required:!0,validate:s.Validator.create([],"")},c.default.createElement("input",{type:"text"})),c.default.createElement(s.FormItem,{label:"描述"},c.default.createElement("textarea",{type:"text",name:"desc"})),c.default.createElement(s.FormButton,null,c.default.createElement("button",{className:"btn btn-primary",type:"submit"},"提交"))),c.default.createElement(s.Form,{onSubmit:this.handleSubmit,horizontal:!0,labelWidth:"50px"},c.default.createElement(s.FormBlock,null,c.default.createElement(s.FormItem,{label:"姓名",required:!0,inline:!0,width:"200px",validate:s.Validator.create([],"")},c.default.createElement("input",{type:"text"})),c.default.createElement(s.FormItem,{label:"身高",inline:!0},c.default.createElement("input",{type:"text"}))),c.default.createElement(s.FormItem,{label:"姓名",required:!0,validate:s.Validator.create([],"")},c.default.createElement("input",{type:"text"})),c.default.createElement(s.FormItem,{label:"描述"},c.default.createElement("textarea",{type:"text",name:"desc"})),c.default.createElement(s.FormButton,null,c.default.createElement("button",{className:"btn btn-primary",type:"submit"},"提交"))))}}]),t}(c.default.Component),h=function(e){function t(e){n(this,t);var l=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={},l}return u(t,e),m(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return c.default.createElement("div",{className:"doc"},c.default.createElement("h2",{id:"form"},c.default.createElement("a",{className:"header-anchor",href:"#form","aria-hidden":"true"},"¶")," Form"),c.default.createElement("p",null,"目的：约束Form表单的UI，同时提供更便捷的表单写法。"),c.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},c.default.createElement("div",{className:"doc-demo-instance"},c.default.createElement("h4",null,"Example"),c.default.createElement(o,null)),c.default.createElement("div",{className:"doc-demo-meta"},c.default.createElement("div",{className:"doc-demo-description"},c.default.createElement("p",null,"默认形态")),c.default.createElement("div",{className:"doc-demo-code"},c.default.createElement("pre",null,c.default.createElement("code",{className:"language-js"},c.default.createElement("span",{className:"hljs-class"},c.default.createElement("span",{className:"hljs-keyword"},"class")," ",c.default.createElement("span",{className:"hljs-title"},"FormWrap")," ",c.default.createElement("span",{className:"hljs-keyword"},"extends")," ",c.default.createElement("span",{className:"hljs-title"},"React"),".",c.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",c.default.createElement("br",null),"    render() ","{",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-keyword"},"return")," (",c.default.createElement("br",null),"            <Form onSubmit=","{","this.handleSubmit","}",">",c.default.createElement("br",null),'                <FormItem label="姓名">',c.default.createElement("br",null),'                    <input type="text"/>',c.default.createElement("br",null),"                </FormItem>",c.default.createElement("br",null),'                <FormItem label="描述">',c.default.createElement("br",null),'                    <textarea type="text" name="desc"/>',c.default.createElement("br",null),"                </FormItem>",c.default.createElement("br",null),"                <FormButton>",c.default.createElement("br",null),'                    <button className="btn btn-primary" type="submit">提交</button>',c.default.createElement("br",null),"                </FormButton>",c.default.createElement("br",null),"            </Form>",c.default.createElement("br",null),"        );",c.default.createElement("br",null),"    ","}",c.default.createElement("br",null),"}",c.default.createElement("br",null))),c.default.createElement("pre",null,c.default.createElement("code",{className:"language-jsx"},"<FormWrap/>",c.default.createElement("br",null)))),c.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},c.default.createElement("i",null)))),c.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode10?"doc-demo-code-active":"")},c.default.createElement("div",{className:"doc-demo-instance"},c.default.createElement("h4",null,"Example"),c.default.createElement(f,null)),c.default.createElement("div",{className:"doc-demo-meta"},c.default.createElement("div",{className:"doc-demo-description"},c.default.createElement("p",null,"内联表单 inline")),c.default.createElement("div",{className:"doc-demo-code"},c.default.createElement("pre",null,c.default.createElement("code",{className:"language-js"},c.default.createElement("span",{className:"hljs-class"},c.default.createElement("span",{className:"hljs-keyword"},"class")," ",c.default.createElement("span",{className:"hljs-title"},"FormWrap2")," ",c.default.createElement("span",{className:"hljs-keyword"},"extends")," ",c.default.createElement("span",{className:"hljs-title"},"React"),".",c.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",c.default.createElement("br",null),"    render() ","{",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-keyword"},"return")," (",c.default.createElement("br",null),"            <Form onSubmit=","{","this.handleSubmit","}"," inline>",c.default.createElement("br",null),'                <FormItem label="姓名">',c.default.createElement("br",null),'                    <input type="text"/>',c.default.createElement("br",null),"                </FormItem>",c.default.createElement("br",null),'                <FormItem label="描述">',c.default.createElement("br",null),'                    <textarea type="text" name="desc"/>',c.default.createElement("br",null),"                </FormItem>",c.default.createElement("br",null),"                <FormButton>",c.default.createElement("br",null),'                    <button className="btn btn-primary" type="submit">提交</button>',c.default.createElement("br",null),"                </FormButton>",c.default.createElement("br",null),"            </Form>",c.default.createElement("br",null),"        );",c.default.createElement("br",null),"    ","}",c.default.createElement("br",null),"}",c.default.createElement("br",null))),c.default.createElement("pre",null,c.default.createElement("code",{className:"language-jsx"},"<FormWrap2/>",c.default.createElement("br",null)))),c.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,10)},c.default.createElement("i",null)))),c.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode14?"doc-demo-code-active":"")},c.default.createElement("div",{className:"doc-demo-instance"},c.default.createElement("h4",null,"Example"),c.default.createElement(i,null)),c.default.createElement("div",{className:"doc-demo-meta"},c.default.createElement("div",{className:"doc-demo-description"},c.default.createElement("p",null,"水平排列表单。 需要提供labelWidth以便对齐label的宽度")),c.default.createElement("div",{className:"doc-demo-code"},c.default.createElement("pre",null,c.default.createElement("code",{className:"language-js"},c.default.createElement("span",{className:"hljs-class"},c.default.createElement("span",{className:"hljs-keyword"},"class")," ",c.default.createElement("span",{className:"hljs-title"},"FormWrap3")," ",c.default.createElement("span",{className:"hljs-keyword"},"extends")," ",c.default.createElement("span",{className:"hljs-title"},"React"),".",c.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",c.default.createElement("br",null),"    render() ","{",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-keyword"},"return")," (",c.default.createElement("br",null),"            <Form onSubmit=","{","this.handleSubmit","}",' labelWidth="100px" horizontal>',c.default.createElement("br",null),'                <FormItem label="姓名">',c.default.createElement("br",null),'                    <input type="text"/>',c.default.createElement("br",null),"                </FormItem>",c.default.createElement("br",null),'                <FormItem label="描述">',c.default.createElement("br",null),'                    <textarea type="text" name="desc"/>',c.default.createElement("br",null),"                </FormItem>",c.default.createElement("br",null),"                <FormButton>",c.default.createElement("br",null),'                    <button className="btn btn-primary" type="submit">提交</button>',c.default.createElement("br",null),"                </FormButton>",c.default.createElement("br",null),"            </Form>",c.default.createElement("br",null),"        );",c.default.createElement("br",null),"    ","}",c.default.createElement("br",null),"}",c.default.createElement("br",null))),c.default.createElement("pre",null,c.default.createElement("code",{className:"language-jsx"},"<FormWrap3/>",c.default.createElement("br",null)))),c.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,14)},c.default.createElement("i",null)))),c.default.createElement("p",null,"行内表单和内联表单在手机端均失效，显示出默认形态"),c.default.createElement("h3",{id:"props"},c.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("code",null,"inline (bool)")," 默认",c.default.createElement("code",null,"false"),"，内联表单"),c.default.createElement("li",null,c.default.createElement("code",null,"horizontal (bool)")," 默认",c.default.createElement("code",null,"false")," 水平排列表单"),c.default.createElement("li",null,c.default.createElement("code",null,"labelWidth (string)")," label的宽度"),c.default.createElement("li",null,c.default.createElement("code",null,"onSubmit (func)")," 已默认处理了 preventDefault"),c.default.createElement("li",null,c.default.createElement("code",null,"onSubmitValidated (func)")," 只有所有验证通过才会回调，依据是",c.default.createElement("code",null,"FormItem"),"的",c.default.createElement("code",null,"error"),"属性是",c.default.createElement("code",null,"false"),"或者",c.default.createElement("code",null,"validate"),"运行的结果是成功。")),c.default.createElement("h2",{id:"formitem"},c.default.createElement("a",{className:"header-anchor",href:"#formitem","aria-hidden":"true"},"¶")," FormItem"),c.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode54?"doc-demo-code-active":"")},c.default.createElement("div",{className:"doc-demo-instance"},c.default.createElement("h4",null,"Example"),c.default.createElement(E,null)),c.default.createElement("div",{className:"doc-demo-meta"},c.default.createElement("div",{className:"doc-demo-description"},c.default.createElement("p",null,"会给子表单元素添加class",c.default.createElement("code",null,"form-control")," ",c.default.createElement("br",null),"children也可以是其他元素")),c.default.createElement("div",{className:"doc-demo-code"},c.default.createElement("pre",null,c.default.createElement("code",{className:"language-js"},c.default.createElement("span",{className:"hljs-class"},c.default.createElement("span",{className:"hljs-keyword"},"class")," ",c.default.createElement("span",{className:"hljs-title"},"FormItemWrap")," ",c.default.createElement("span",{className:"hljs-keyword"},"extends")," ",c.default.createElement("span",{className:"hljs-title"},"React"),".",c.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",c.default.createElement("br",null),"    ",c.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props)","{",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",c.default.createElement("br",null),"            ",c.default.createElement("span",{className:"hljs-attr"},"email"),": ",c.default.createElement("span",{className:"hljs-string"},"''"),",",c.default.createElement("br",null),"            ",c.default.createElement("span",{className:"hljs-attr"},"url"),": ",c.default.createElement("span",{className:"hljs-string"},"''"),",",c.default.createElement("br",null),"            ",c.default.createElement("span",{className:"hljs-attr"},"cityList"),": [],",c.default.createElement("br",null),"            ",c.default.createElement("span",{className:"hljs-attr"},"city"),": ",c.default.createElement("span",{className:"hljs-literal"},"null"),c.default.createElement("br",null),"        ","}",";",c.default.createElement("br",null),"    ","}",c.default.createElement("br",null),"    ",c.default.createElement("br",null),"    handleChangeOther(field, value) ","{",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",c.default.createElement("br",null),"            [field]: value",c.default.createElement("br",null),"        ","}",");",c.default.createElement("br",null),"    ","}",c.default.createElement("br",null),"    ",c.default.createElement("br",null),"    render() ","{",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-keyword"},"return")," (",c.default.createElement("br",null),"            <Form onSubmit=","{","this.handleSubmit","}",">",c.default.createElement("br",null),'                <FormItem label="姓名">',c.default.createElement("br",null),'                    <input type="text"/>',c.default.createElement("br",null),"                </FormItem>",c.default.createElement("br",null),"                <FormItem ",c.default.createElement("br",null),'                    label="姓名" ',c.default.createElement("br",null),"                    error ",c.default.createElement("br",null),'                    help="错误啦"',c.default.createElement("br",null),"                >",c.default.createElement("br",null),'                    <input type="text"/>',c.default.createElement("br",null),"                </FormItem>",c.default.createElement("br",null),'                <FormItem label="网址">',c.default.createElement("br",null),"                    <div>",c.default.createElement("br",null),"                        <Dropper/> 其他东西",c.default.createElement("br",null),"                    </div>",c.default.createElement("br",null),"                </FormItem>",c.default.createElement("br",null),'                <FormItem label="多选（行内排列）">',c.default.createElement("br",null),"                    <CheckboxGroup",c.default.createElement("br",null),"                        inline",c.default.createElement("br",null),'                        name="cityList"',c.default.createElement("br",null),"                        value=","{","this.state.cityList","}",c.default.createElement("br",null),"                        onChange=","{","this.handleChangeOther.bind(this, 'cityList')","}",c.default.createElement("br",null),"                    >",c.default.createElement("br",null),"                        <Checkbox value=","{","1","}",">广州</Checkbox>",c.default.createElement("br",null),"                        <Checkbox value=","{","2","}",">深圳</Checkbox>",c.default.createElement("br",null),"                    </CheckboxGroup>",c.default.createElement("br",null),"                </FormItem>",c.default.createElement("br",null),'                <FormItem label="单选">',c.default.createElement("br",null),"                    <RadioGroup",c.default.createElement("br",null),'                        name="city"',c.default.createElement("br",null),"                        value=","{","this.state.city","}",c.default.createElement("br",null),"                        onChange=","{","this.handleChangeOther.bind(this, 'city')","}",c.default.createElement("br",null),"                    >",c.default.createElement("br",null),"                        <Radio value=","{","1","}",">广州</Radio>",c.default.createElement("br",null),"                        <Radio value=","{","2","}",">深圳</Radio>",c.default.createElement("br",null),"                    </RadioGroup>",c.default.createElement("br",null),"                </FormItem>",c.default.createElement("br",null),"                <FormButton>",c.default.createElement("br",null),'                    <button className="btn btn-primary" type="submit">提交</button>',c.default.createElement("br",null),"                </FormButton>",c.default.createElement("br",null),"            </Form>",c.default.createElement("br",null),"        );",c.default.createElement("br",null),"    ","}",c.default.createElement("br",null),"}",c.default.createElement("br",null))),c.default.createElement("pre",null,c.default.createElement("code",{className:"language-jsx"},"<FormItemWrap/>",c.default.createElement("br",null)))),c.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,54)},c.default.createElement("i",null)))),c.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode58?"doc-demo-code-active":"")},c.default.createElement("div",{className:"doc-demo-instance"},c.default.createElement("h4",null,"Example"),c.default.createElement(b,null)),c.default.createElement("div",{className:"doc-demo-meta"},c.default.createElement("div",{className:"doc-demo-description"},c.default.createElement("p",null,"校验。推荐用",c.default.createElement("code",null,"Validator.TYPE"),"提供的校验类型校验，没有则注册")),c.default.createElement("div",{className:"doc-demo-code"},c.default.createElement("pre",null,c.default.createElement("code",{className:"language-js"},c.default.createElement("span",{className:"hljs-class"},c.default.createElement("span",{className:"hljs-keyword"},"class")," ",c.default.createElement("span",{className:"hljs-title"},"FormItemWrap2")," ",c.default.createElement("span",{className:"hljs-keyword"},"extends")," ",c.default.createElement("span",{className:"hljs-title"},"React"),".",c.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",c.default.createElement("br",null),"    ",c.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props)","{",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",c.default.createElement("br",null),"            ",c.default.createElement("span",{className:"hljs-attr"},"email"),": ",c.default.createElement("span",{className:"hljs-string"},"''"),",",c.default.createElement("br",null),"            ",c.default.createElement("span",{className:"hljs-attr"},"repeat_email"),": ",c.default.createElement("span",{className:"hljs-string"},"''"),",",c.default.createElement("br",null),"            ",c.default.createElement("span",{className:"hljs-attr"},"url"),": ",c.default.createElement("span",{className:"hljs-string"},"''"),",",c.default.createElement("br",null),"            ",c.default.createElement("span",{className:"hljs-attr"},"name"),": ",c.default.createElement("span",{className:"hljs-string"},"''"),c.default.createElement("br",null),"        ","}",";",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-keyword"},"this"),".validateRepeatEmail = ::",c.default.createElement("span",{className:"hljs-keyword"},"this"),".validateRepeatEmail;",c.default.createElement("br",null),"    ","}",c.default.createElement("br",null),"    ",c.default.createElement("br",null),"    handleSubmit(e)","{",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-built_in"},"console"),".log(",c.default.createElement("span",{className:"hljs-string"},"'submit'"),");",c.default.createElement("br",null),"    ","}",c.default.createElement("br",null),"    ",c.default.createElement("br",null),"    handleSubmitValidated()","{",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-built_in"},"console"),".log(",c.default.createElement("span",{className:"hljs-string"},"'handleSubmitValidated'"),");",c.default.createElement("br",null),"    ","}",c.default.createElement("br",null),"    ",c.default.createElement("br",null),"    validateRepeatEmail(value)","{",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-keyword"},"if"),"(value === ",c.default.createElement("span",{className:"hljs-keyword"},"this"),".state.email)","{",c.default.createElement("br",null),"            ",c.default.createElement("span",{className:"hljs-keyword"},"return")," ",c.default.createElement("span",{className:"hljs-string"},"''"),";",c.default.createElement("br",null),"        ","}",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-keyword"},"return")," ",c.default.createElement("span",{className:"hljs-string"},"'两次邮件输入不一致'"),";",c.default.createElement("br",null),"    ","}",c.default.createElement("br",null),"    ",c.default.createElement("br",null),"    render() ","{",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-keyword"},"return")," (",c.default.createElement("br",null),"            <Form onSubmit=","{","this.handleSubmit","}"," onSubmitValidated=","{","this.handleSubmitValidated","}",">",c.default.createElement("br",null),"                <FormItem ",c.default.createElement("br",null),'                    label="名字" ',c.default.createElement("br",null),"                    required",c.default.createElement("br",null),"                    validate=","{","Validator.create([], this.state.name)","}",c.default.createElement("br",null),"                >",c.default.createElement("br",null),"                    <input ",c.default.createElement("br",null),'                        type="text" ',c.default.createElement("br",null),"                        value=","{","this.state.name","}"," ",c.default.createElement("br",null),"                        onChange=","{","e => this.setState(","{","name: e.target.value","}",")","}",c.default.createElement("br",null),"                    />",c.default.createElement("br",null),"                </FormItem>",c.default.createElement("br",null),"                <FormItem ",c.default.createElement("br",null),'                    label="网址" ',c.default.createElement("br",null),"                    validate=","{","Validator.create(Validator.TYPE.url, this.state.url)","}",c.default.createElement("br",null),"                >",c.default.createElement("br",null),"                    <input ",c.default.createElement("br",null),'                        type="text" ',c.default.createElement("br",null),"                        value=","{","this.state.url","}"," ",c.default.createElement("br",null),"                        onChange=","{","e => this.setState(","{","url: e.target.value","}",")","}",c.default.createElement("br",null),"                    />",c.default.createElement("br",null),"                </FormItem>",c.default.createElement("br",null),"                <FormItem ",c.default.createElement("br",null),'                    label="邮件" ',c.default.createElement("br",null),"                    required ",c.default.createElement("br",null),"                    validate=","{","Validator.create([Validator.TYPE.email], this.state.email)","}",c.default.createElement("br",null),"                >",c.default.createElement("br",null),"                    <input ",c.default.createElement("br",null),'                        type="text" ',c.default.createElement("br",null),"                        value=","{","this.state.email","}"," ",c.default.createElement("br",null),"                        onChange=","{","e => this.setState(","{","email: e.target.value","}",")","}",c.default.createElement("br",null),"                    />",c.default.createElement("br",null),"                </FormItem>",c.default.createElement("br",null),"                <FormItem ",c.default.createElement("br",null),'                    label="重复邮件" ',c.default.createElement("br",null),"                    required ",c.default.createElement("br",null),"                    validate=","{","Validator.create([Validator.TYPE.email], this.state.repeat_email, this.validateRepeatEmail)","}",c.default.createElement("br",null),"                >",c.default.createElement("br",null),"                    <input ",c.default.createElement("br",null),'                        type="text" ',c.default.createElement("br",null),"                        value=","{","this.state.repeat_email","}"," ",c.default.createElement("br",null),"                        onChange=","{","e => this.setState(","{","repeat_email: e.target.value","}",")","}",c.default.createElement("br",null),"                    />",c.default.createElement("br",null),"                </FormItem>",c.default.createElement("br",null),"                <FormButton>",c.default.createElement("br",null),'                    <button className="btn btn-primary" type="submit">提交</button>',c.default.createElement("br",null),"                </FormButton>",c.default.createElement("br",null),"            </Form>",c.default.createElement("br",null),"        );",c.default.createElement("br",null),"    ","}",c.default.createElement("br",null),"}",c.default.createElement("br",null))),c.default.createElement("pre",null,c.default.createElement("code",{className:"language-jsx"},"<FormItemWrap2/>",c.default.createElement("br",null)))),c.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,58)},c.default.createElement("i",null)))),c.default.createElement("h3",{id:"props-2"},c.default.createElement("a",{className:"header-anchor",href:"#props-2","aria-hidden":"true"},"¶")," Props"),c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("code",null,"required (bool)")," label旁边的",c.default.createElement("code",null,"*")),c.default.createElement("li",null,c.default.createElement("code",null,"label (string)")),c.default.createElement("li",null,c.default.createElement("code",null,"validate (func)")," 校验后返回错误帮助信息，且只有过提交过动作后才显示，onChange则会自动重新校验。存在validate，则",c.default.createElement("code",null,"error")," ",c.default.createElement("code",null,"help"),"无效。如果存在",c.default.createElement("code",null,"required"),"，则先校验是否有值。"),c.default.createElement("li",null,c.default.createElement("code",null,"error (bool)")," 校验的状态，只有",c.default.createElement("code",null,"true"),"时help才会显示"),c.default.createElement("li",null,c.default.createElement("code",null,"help (string)")," 错误帮助信息")),c.default.createElement("h2",{id:"formblock"},c.default.createElement("a",{className:"header-anchor",href:"#formblock","aria-hidden":"true"},"¶")," FormBlock"),c.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode95?"doc-demo-code-active":"")},c.default.createElement("div",{className:"doc-demo-instance"},c.default.createElement("h4",null,"Example"),c.default.createElement(p,null)),c.default.createElement("div",{className:"doc-demo-meta"},c.default.createElement("div",{className:"doc-demo-description"},c.default.createElement("p",null,"用FormBlock做更复杂的布局")),c.default.createElement("div",{className:"doc-demo-code"},c.default.createElement("pre",null,c.default.createElement("code",{className:"language-js"},c.default.createElement("span",{className:"hljs-class"},c.default.createElement("span",{className:"hljs-keyword"},"class")," ",c.default.createElement("span",{className:"hljs-title"},"FormBlockWrap")," ",c.default.createElement("span",{className:"hljs-keyword"},"extends")," ",c.default.createElement("span",{className:"hljs-title"},"React"),".",c.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",c.default.createElement("br",null),"    render() ","{",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-keyword"},"return")," (",c.default.createElement("br",null),"            <div>",c.default.createElement("br",null),"                <Form onSubmit=","{","this.handleSubmit","}",">",c.default.createElement("br",null),"                    <FormBlock>",c.default.createElement("br",null),'                        <FormItem label="姓名" required inline width="200px" validate=',"{","Validator.create([], '')","}",">",c.default.createElement("br",null),'                            <input type="text"/>',c.default.createElement("br",null),"                        </FormItem>",c.default.createElement("br",null),'                        <FormItem label="身高" inline>',c.default.createElement("br",null),'                            <input type="text"/>',c.default.createElement("br",null),"                        </FormItem>",c.default.createElement("br",null),"                    </FormBlock>",c.default.createElement("br",null),'                    <FormItem label="姓名" required validate=',"{","Validator.create([], '')","}",">",c.default.createElement("br",null),'                        <input type="text"/>',c.default.createElement("br",null),"                    </FormItem>",c.default.createElement("br",null),'                    <FormItem label="描述">',c.default.createElement("br",null),'                        <textarea type="text" name="desc"/>',c.default.createElement("br",null),"                    </FormItem>",c.default.createElement("br",null),"                    <FormButton>",c.default.createElement("br",null),'                        <button className="btn btn-primary" type="submit">提交</button>',c.default.createElement("br",null),"                    </FormButton>",c.default.createElement("br",null),"                </Form>",c.default.createElement("br",null),"<Form onSubmit=","{","this.handleSubmit","}",' horizontal labelWidth="50px">',c.default.createElement("br",null),"                    <FormBlock>",c.default.createElement("br",null),'                        <FormItem label="姓名" required inline width="200px" validate=',"{","Validator.create([], '')","}",">",c.default.createElement("br",null),'                            <input type="text"/>',c.default.createElement("br",null),"                        </FormItem>",c.default.createElement("br",null),'                        <FormItem label="身高" inline>',c.default.createElement("br",null),'                            <input type="text"/>',c.default.createElement("br",null),"                        </FormItem>",c.default.createElement("br",null),"                    </FormBlock>",c.default.createElement("br",null),'                    <FormItem label="姓名" required validate=',"{","Validator.create([], '')","}",">",c.default.createElement("br",null),'                        <input type="text"/>',c.default.createElement("br",null),"                    </FormItem>",c.default.createElement("br",null),'                    <FormItem label="描述">',c.default.createElement("br",null),'                        <textarea type="text" name="desc"/>',c.default.createElement("br",null),"                    </FormItem>",c.default.createElement("br",null),"                    <FormButton>",c.default.createElement("br",null),'                        <button className="btn btn-primary" type="submit">提交</button>',c.default.createElement("br",null),"                    </FormButton>",c.default.createElement("br",null),"                </Form>",c.default.createElement("br",null),"            </div>",c.default.createElement("br",null),"        );",c.default.createElement("br",null),"    ","}",c.default.createElement("br",null),"}",c.default.createElement("br",null))),c.default.createElement("pre",null,c.default.createElement("code",{className:"language-jsx"},"<FormBlockWrap/>",c.default.createElement("br",null)))),c.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,95)},c.default.createElement("i",null)))),c.default.createElement("h3",{id:"props-3"},c.default.createElement("a",{className:"header-anchor",href:"#props-3","aria-hidden":"true"},"¶")," Props"),c.default.createElement("p",null,"无，自动根据children等分"))}}]),t}(c.default.Component);t.default=h}});