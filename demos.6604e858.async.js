(self.webpackChunk_rc_component_tooltip=self.webpackChunk_rc_component_tooltip||[]).push([[433],{89320:function(l,_,t){"use strict";t.r(_);var h=t(21739),n=t(80563),c=t(18126),e=t(27174),r=(0,e.jsx)("span",{children:"Tooltip Text"}),s={display:"table-cell",height:"60px",width:"80px",textAlign:"center",background:"#f6f6f6",verticalAlign:"middle",border:"5px solid white"},i={display:"table-row"},f=function(){return(0,e.jsxs)("div",{style:{display:"table",padding:120},children:[(0,e.jsxs)("div",{style:i,children:[(0,e.jsx)(n.default,{placement:"left",overlay:r,arrowContent:(0,e.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,e.jsx)("a",{href:"#",style:s,children:"Left"})}),(0,e.jsx)(n.default,{placement:"top",overlay:r,arrowContent:(0,e.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,e.jsx)("a",{href:"#",style:s,children:"Top"})}),(0,e.jsx)(n.default,{placement:"bottom",overlay:r,arrowContent:(0,e.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,e.jsx)("a",{href:"#",style:s,children:"Bottom"})}),(0,e.jsx)(n.default,{placement:"right",overlay:r,arrowContent:(0,e.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,e.jsx)("a",{href:"#",style:s,children:"Right"})})]}),(0,e.jsxs)("div",{style:i,children:[(0,e.jsx)(n.default,{placement:"leftTop",overlay:r,arrowContent:(0,e.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,e.jsx)("a",{href:"#",style:s,children:"Left Top"})}),(0,e.jsx)(n.default,{placement:"leftBottom",overlay:r,arrowContent:(0,e.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,e.jsx)("a",{href:"#",style:s,children:"Left Bottom"})}),(0,e.jsx)(n.default,{placement:"rightTop",overlay:r,arrowContent:(0,e.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,e.jsx)("a",{href:"#",style:s,children:"Right Top"})}),(0,e.jsx)(n.default,{placement:"rightBottom",overlay:r,arrowContent:(0,e.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,e.jsx)("a",{href:"#",style:s,children:"Right Bottom"})})]}),(0,e.jsxs)("div",{style:i,children:[(0,e.jsx)(n.default,{placement:"topLeft",overlay:r,arrowContent:(0,e.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,e.jsx)("a",{href:"#",style:s,children:"Top Left"})}),(0,e.jsx)(n.default,{placement:"topRight",overlay:r,arrowContent:(0,e.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,e.jsx)("a",{href:"#",style:s,children:"Top Right"})}),(0,e.jsx)(n.default,{placement:"bottomLeft",overlay:r,arrowContent:(0,e.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,e.jsx)("a",{href:"#",style:s,children:"Bottom Left"})}),(0,e.jsx)(n.default,{placement:"bottomRight",overlay:r,arrowContent:(0,e.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,e.jsx)("a",{href:"#",style:s,children:"Bottom Right"})})]})]})};_.default=f},86712:function(l,_,t){"use strict";t.r(_);var h=t(82100),n=t.n(h),c=t(29186),e=t.n(c),r=t(13720),s=t.n(r),i=t(80619),f=t.n(i),E=t(47074),g=t.n(E),P=t(85573),p=t.n(P),D=t(80563),M=t(21739),T=t(63927),j=t(27174),a=function(C){f()(b,C);var O=g()(b);function b(){var u;n()(this,b);for(var o=arguments.length,m=new Array(o),x=0;x<o;x++)m[x]=arguments[x];return u=O.call.apply(O,[this].concat(m)),p()(s()(u),"state",{visible:!1}),p()(s()(u),"handleDestroy",function(){u.setState({destroy:!0})}),p()(s()(u),"handleChange",function(v){u.setState({visible:!v.target.value})}),u}return e()(b,[{key:"render",value:function(){return this.state.destroy?null:(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{style:{marginTop:100,marginLeft:100,marginBottom:100},children:(0,j.jsx)(D.default,{visible:this.state.visible,motion:{motionName:"rc-tooltip-zoom"},trigger:[],overlayStyle:{zIndex:1e3},overlay:(0,j.jsx)("span",{children:"required!"}),children:(0,j.jsx)("input",{onChange:this.handleChange})})}),(0,j.jsx)("button",{type:"button",onClick:this.handleDestroy,children:"destroy"})]})}}]),b}(M.Component);_.default=a},81715:function(l,_,t){"use strict";t.r(_);var h=t(82100),n=t.n(h),c=t(29186),e=t.n(c),r=t(13720),s=t.n(r),i=t(80619),f=t.n(i),E=t(47074),g=t.n(E),P=t(85573),p=t.n(P),D=t(21739),M=t(80563),T=t(63927),j=t(27174);function a(O){O.preventDefault()}var C=function(O){f()(u,O);var b=g()(u);function u(){var o;n()(this,u);for(var m=arguments.length,x=new Array(m),v=0;v<m;v++)x[v]=arguments[v];return o=b.call.apply(b,[this].concat(x)),p()(s()(o),"state",{visible:!1}),p()(s()(o),"onVisibleChange",function(d){o.setState({visible:d})}),p()(s()(o),"onDestroy",function(){o.setState({destroy:!0})}),o}return e()(u,[{key:"render",value:function(){return this.state.destroy?null:(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{style:{marginTop:300,marginLeft:100,marginBottom:100},children:(0,j.jsx)(M.default,{visible:this.state.visible,motion:{motionName:"rc-tooltip-zoom"},onVisibleChange:this.onVisibleChange,trigger:"click",overlay:(0,j.jsx)("span",{children:"I am a tooltip"}),children:(0,j.jsx)("a",{href:"#",onClick:a,children:"trigger"})})}),(0,j.jsx)("button",{type:"button",onClick:this.onDestroy,children:"destroy"})]})}}]),u}(D.Component);_.default=C},61844:function(l,_,t){"use strict";t.r(_);var h=t(21739),n=t(80563),c=t(63927),e=t(65583),r=t(27174),s=(0,r.jsx)("span",{children:"Tooltip Text"}),i={display:"table-cell",height:"60px",width:"80px",textAlign:"center",background:"#f6f6f6",verticalAlign:"middle",border:"5px solid white"},f={display:"table-row"},E=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{display:"table",padding:120},children:[(0,r.jsxs)("div",{style:f,children:[(0,r.jsx)(n.default,{placement:"left",overlay:s,children:(0,r.jsx)("a",{href:"#",style:i,children:"Left"})}),(0,r.jsx)(n.default,{placement:"top",overlay:s,children:(0,r.jsx)("a",{href:"#",style:i,children:"Top"})}),(0,r.jsx)(n.default,{placement:"bottom",overlay:s,children:(0,r.jsx)("a",{href:"#",style:i,children:"Bottom"})}),(0,r.jsx)(n.default,{placement:"right",overlay:s,children:(0,r.jsx)("a",{href:"#",style:i,children:"Right"})})]}),(0,r.jsxs)("div",{style:f,children:[(0,r.jsx)(n.default,{placement:"leftTop",overlay:s,children:(0,r.jsx)("a",{href:"#",style:i,children:"Left Top"})}),(0,r.jsx)(n.default,{placement:"leftBottom",overlay:s,children:(0,r.jsx)("a",{href:"#",style:i,children:"Left Bottom"})}),(0,r.jsx)(n.default,{placement:"rightTop",overlay:s,children:(0,r.jsx)("a",{href:"#",style:i,children:"Right Top"})}),(0,r.jsx)(n.default,{placement:"rightBottom",overlay:s,children:(0,r.jsx)("a",{href:"#",style:i,children:"Right Bottom"})})]}),(0,r.jsxs)("div",{style:f,children:[(0,r.jsx)(n.default,{placement:"topLeft",overlay:s,children:(0,r.jsx)("a",{href:"#",style:i,children:"Top Left"})}),(0,r.jsx)(n.default,{placement:"topRight",overlay:s,children:(0,r.jsx)("a",{href:"#",style:i,children:"Top Right"})}),(0,r.jsx)(n.default,{placement:"bottomLeft",overlay:s,children:(0,r.jsx)("a",{href:"#",style:i,children:"Bottom Left"})}),(0,r.jsx)(n.default,{placement:"bottomRight",overlay:s,children:(0,r.jsx)("a",{href:"#",style:i,children:"Bottom Right"})})]})]}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h5",{children:"Debug Usage"}),(0,r.jsx)(e.default,{prefixCls:"rc-tooltip",className:"rc-tooltip-placement-top",style:{display:"inline-block",position:"relative"},children:"Test"})]})]})};_.default=E},5572:function(l,_,t){"use strict";t.r(_);var h=t(80563),n=t(21739),c=t(18126),e=t(27174),r=(0,e.jsx)("span",{children:"Tooltip Text"}),s=function(){var f=n.useRef();return(0,e.jsx)("div",{style:{padding:10},children:(0,e.jsx)("div",{ref:f,style:{border:"1px solid black",width:"100%",height:"calc(100vh - 40px)",boxSizing:"border-box",overflow:"auto"},children:(0,e.jsx)("div",{style:{background:"rgba(255,0,0,0.05)",width:"300%",height:"200%",position:"relative"},children:(0,e.jsx)(h.default,{placement:"top",overlay:r,overlayInnerStyle:{width:300,height:50},popupVisible:!0,arrowContent:(0,e.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,e.jsx)("div",{style:{background:"rgba(0,255,0,0.3)",width:100,height:50,position:"absolute",left:"30%",top:"30%"},children:"Hover Me"})})})})})};_.default=s},77596:function(l,_,t){"use strict";t.r(_);var h=t(21739),n=t(80563),c=t(18126),e=t(27174),r=(0,e.jsx)("span",{children:"Tooltip Text"}),s={display:"table-cell",height:"60px",width:"80px",textAlign:"center",background:"#f6f6f6",verticalAlign:"middle",border:"5px solid white"},i={display:"table-row"},f=function(){return(0,e.jsxs)("div",{style:{display:"table",padding:120},children:[(0,e.jsxs)("div",{style:i,children:[(0,e.jsx)(n.default,{placement:"left",overlay:r,showArrow:!1,children:(0,e.jsx)("a",{href:"#",style:s,children:"Left"})}),(0,e.jsx)(n.default,{placement:"top",overlay:r,showArrow:!1,children:(0,e.jsx)("a",{href:"#",style:s,children:"Top"})}),(0,e.jsx)(n.default,{placement:"bottom",overlay:r,showArrow:!1,children:(0,e.jsx)("a",{href:"#",style:s,children:"Bottom"})}),(0,e.jsx)(n.default,{placement:"right",overlay:r,showArrow:!1,children:(0,e.jsx)("a",{href:"#",style:s,children:"Right"})})]}),(0,e.jsxs)("div",{style:i,children:[(0,e.jsx)(n.default,{placement:"leftTop",overlay:r,showArrow:!1,children:(0,e.jsx)("a",{href:"#",style:s,children:"Left Top"})}),(0,e.jsx)(n.default,{placement:"leftBottom",overlay:r,showArrow:!1,children:(0,e.jsx)("a",{href:"#",style:s,children:"Left Bottom"})}),(0,e.jsx)(n.default,{placement:"rightTop",overlay:r,showArrow:!1,children:(0,e.jsx)("a",{href:"#",style:s,children:"Right Top"})}),(0,e.jsx)(n.default,{placement:"rightBottom",overlay:r,showArrow:!1,children:(0,e.jsx)("a",{href:"#",style:s,children:"Right Bottom"})})]}),(0,e.jsxs)("div",{style:i,children:[(0,e.jsx)(n.default,{placement:"topLeft",overlay:r,showArrow:!1,children:(0,e.jsx)("a",{href:"#",style:s,children:"Top Left"})}),(0,e.jsx)(n.default,{placement:"topRight",overlay:r,showArrow:!1,children:(0,e.jsx)("a",{href:"#",style:s,children:"Top Right"})}),(0,e.jsx)(n.default,{placement:"bottomLeft",overlay:r,showArrow:!1,children:(0,e.jsx)("a",{href:"#",style:s,children:"Bottom Left"})}),(0,e.jsx)(n.default,{placement:"bottomRight",overlay:r,showArrow:!1,children:(0,e.jsx)("a",{href:"#",style:s,children:"Bottom Right"})})]})]})};_.default=f},88338:function(l,_,t){"use strict";t.r(_);var h=t(82100),n=t.n(h),c=t(29186),e=t.n(c),r=t(13720),s=t.n(r),i=t(80619),f=t.n(i),E=t(47074),g=t.n(E),P=t(85573),p=t.n(P),D=t(80563),M=t(21739),T=t(63927),j=t(45936),a=t(27174),C=function(O){f()(u,O);var b=g()(u);function u(){var o;n()(this,u);for(var m=arguments.length,x=new Array(m),v=0;v<m;v++)x[v]=arguments[v];return o=b.call.apply(b,[this].concat(x)),p()(s()(o),"state",{destroyTooltipOnHide:!1,destroyTooltipOptions:[{name:"don't destroy",value:0},{name:"destroy parent",value:1},{name:"keep parent",value:2}],placement:"right",transitionName:"rc-tooltip-zoom",trigger:{hover:1,click:0,focus:0},offsetX:j.placements.right.offset[0],offsetY:j.placements.right.offset[1],overlayInnerStyle:void 0}),p()(s()(o),"onPlacementChange",function(d){var y=d.target.value,A=j.placements[y].offset;o.setState({placement:d.target.value,offsetX:A[0],offsetY:A[1]})}),p()(s()(o),"onTransitionChange",function(d){o.setState({transitionName:d.target.checked?d.target.value:""})}),p()(s()(o),"onTriggerChange",function(d){var y=o.state.trigger;d.target.checked?y[d.target.value]=1:delete y[d.target.value],o.setState({trigger:y})}),p()(s()(o),"onOffsetXChange",function(d){var y=d.target.value;o.setState({offsetX:y||void 0})}),p()(s()(o),"onOffsetYChange",function(d){var y=d.target.value;o.setState({offsetY:y||void 0})}),p()(s()(o),"onVisibleChange",function(d){console.log("tooltip",d)}),p()(s()(o),"onDestroyChange",function(d){var y=d.target.value;o.setState({destroyTooltipOnHide:[!1,{keepParent:!1},{keepParent:!0}][y]})}),p()(s()(o),"onOverlayInnerStyleChange",function(){o.setState(function(d){return{overlayInnerStyle:d.overlayInnerStyle?void 0:{background:"red"}}})}),p()(s()(o),"preventDefault",function(d){d.preventDefault()}),o}return e()(u,[{key:"render",value:function(){var m=this.state,x=m.trigger;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{style:{margin:"10px 20px"},children:[(0,a.jsxs)("label",{children:["placement:",(0,a.jsx)("select",{value:this.state.placement,onChange:this.onPlacementChange,children:Object.keys(j.placements).map(function(v){return(0,a.jsx)("option",{value:v,children:v},v)})})]}),"\xA0\xA0\xA0\xA0",(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{value:"rc-tooltip-zoom",type:"checkbox",onChange:this.onTransitionChange,checked:this.state.transitionName==="rc-tooltip-zoom"}),"transitionName"]}),"\xA0\xA0\xA0\xA0",(0,a.jsxs)("label",{children:["destroyTooltipOnHide:",(0,a.jsx)("select",{onChange:this.onDestroyChange,children:this.state.destroyTooltipOptions.map(function(v){var d=v.name,y=v.value;return(0,a.jsx)("option",{value:y,children:d},y)})})]}),"\xA0\xA0\xA0\xA0 trigger:",(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{value:"hover",checked:!!x.hover,type:"checkbox",onChange:this.onTriggerChange}),"hover"]}),(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{value:"focus",checked:!!x.focus,type:"checkbox",onChange:this.onTriggerChange}),"focus"]}),(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{value:"click",checked:!!x.click,type:"checkbox",onChange:this.onTriggerChange}),"click"]}),(0,a.jsx)("br",{}),(0,a.jsxs)("label",{children:["offsetX:",(0,a.jsx)("input",{type:"text",value:m.offsetX,onChange:this.onOffsetXChange,style:{width:50}})]}),"\xA0\xA0\xA0\xA0",(0,a.jsxs)("label",{children:["offsetY:",(0,a.jsx)("input",{type:"text",value:m.offsetY,onChange:this.onOffsetYChange,style:{width:50}})]}),(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{value:"overlayInnerStyle",checked:!!m.overlayInnerStyle,type:"checkbox",onChange:this.onOverlayInnerStyleChange}),"overlayInnerStyle(red background)"]})]}),(0,a.jsx)("div",{style:{margin:100},children:(0,a.jsx)(D.default,{placement:this.state.placement,mouseEnterDelay:0,mouseLeaveDelay:.1,destroyTooltipOnHide:this.state.destroyTooltipOnHide,trigger:Object.keys(this.state.trigger),onVisibleChange:this.onVisibleChange,overlay:(0,a.jsx)("div",{style:{height:50,width:50},children:"i am a tooltip"}),align:{offset:[this.state.offsetX,this.state.offsetY]},motion:{motionName:this.state.transitionName},overlayInnerStyle:m.overlayInnerStyle,children:(0,a.jsx)("div",{style:{height:100,width:100,border:"1px solid red"},children:"trigger"})})})]})}}]),u}(M.Component);_.default=C},13720:function(l){function _(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}l.exports=_,l.exports.__esModule=!0,l.exports.default=l.exports},47074:function(l,_,t){var h=t(34577),n=t(74716),c=t(34456);function e(r){var s=n();return function(){var f=h(r),E;if(s){var g=h(this).constructor;E=Reflect.construct(f,arguments,g)}else E=f.apply(this,arguments);return c(this,E)}}l.exports=e,l.exports.__esModule=!0,l.exports.default=l.exports},34577:function(l){function _(t){return l.exports=_=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},l.exports.__esModule=!0,l.exports.default=l.exports,_(t)}l.exports=_,l.exports.__esModule=!0,l.exports.default=l.exports},80619:function(l,_,t){var h=t(35745);function n(c,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(e&&e.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),Object.defineProperty(c,"prototype",{writable:!1}),e&&h(c,e)}l.exports=n,l.exports.__esModule=!0,l.exports.default=l.exports},74716:function(l){function _(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}l.exports=_,l.exports.__esModule=!0,l.exports.default=l.exports},34456:function(l,_,t){var h=t(31468).default,n=t(13720);function c(e,r){if(r&&(h(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return n(e)}l.exports=c,l.exports.__esModule=!0,l.exports.default=l.exports},35745:function(l){function _(t,h){return l.exports=_=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,e){return c.__proto__=e,c},l.exports.__esModule=!0,l.exports.default=l.exports,_(t,h)}l.exports=_,l.exports.__esModule=!0,l.exports.default=l.exports}}]);
