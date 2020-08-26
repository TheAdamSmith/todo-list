(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{50:function(e,t,n){e.exports=n(89)},55:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),l=n(42),c=n.n(l),r=(n(55),n(43)),o=n(44),u=n(8),d=n(49),m=n(48),h=function(e){return i.a.createElement("input",Object.assign({type:"checkbox"},e))},s=function(e){var t=e.item;return i.a.createElement("li",{className:"todolistitem"},i.a.createElement(h,{checked:t.completed,onChange:function(){e.handleComplete(t)}})," ".concat(t.content),i.a.createElement("br",null),i.a.createElement("button",{className:"editbutton",onClick:function(){e.handleEdit(t)}},"edit"),i.a.createElement("button",{className:"button",onClick:function(){e.handleDelete(t)}},"delete"))},f=function(e){var t=e.item;return i.a.createElement("li",{className:"todolistitem"},i.a.createElement("form",{onSubmit:function(n){n.preventDefault(),e.updateItem(t)}},i.a.createElement("input",{value:t.content,onChange:function(n){t.content=n.target.value,e.handleItemChange(t)}}),i.a.createElement("button",{className:"button",type:"submit"},"update")))},p=function(e){var t=e.item;return i.a.createElement("li",null,i.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addNewItem()}},i.a.createElement("input",{value:t.content,onChange:function(n){t.content=n.target.value,e.handleNewItemChange(t)}}),i.a.createElement("button",{className:"button",type:"submit"},"Add")))},b=n(47),E=n(91),C=n(94),g=n(93),I=n(92),O=function(e){var t=e.currFilter,n=e.filtOptions,l=e.handleFilterChange,c=Object(a.useState)(!1),r=Object(b.a)(c,2),o=r[0],u=r[1],d=function(e){l(e.target.id)};return i.a.createElement(E.a,{isOpen:o,toggle:function(){return u((function(e){return!e}))}},i.a.createElement(C.a,{caret:!0},t),i.a.createElement(g.a,null,n.map((function(e,t){return i.a.createElement(I.a,{key:t,id:t,onClick:d},e)}))))},v=n(18),w=n.n(v),N="/api/todolist",j=function(){return w.a.get(N).then((function(e){return e.data}))},S=function(e){return w.a.post(N,e).then((function(e){return e.data}))},F=function(e,t){return w.a.put("".concat(N,"/").concat(e),t).then((function(e){return e.data}))},k=function(e){return w.a.delete("".concat(N,"/").concat(e)).then((function(e){return e.data}))},y=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(r.a)(this,n),(a=t.call(this,e)).handleEdit=function(e){e.edit=!0,a.setState({list:a.state.list.map((function(t){return t.id===e.id?e:t}))})},a.handleDelete=function(e){k(e.id).then((function(t){a.setState({list:a.state.list.filter((function(t){return t.id!==e.id}))})})).catch((function(e){throw e.response.data}))},a.handleComplete=function(e){e.completed=!e.completed,F(e.id,e).then((function(t){a.setState({list:a.state.list.map((function(n){return n.id===e.id?t:n}))})}))},a.handleItemChange=function(e){a.setState({list:a.state.list.map((function(t){return t.id===e.id?e:t}))})},a.handleNewItemChange=function(e){a.setState({newItem:e})},a.addNewItem=function(){var e={content:"",completed:!1,edit:!1};S(a.state.newItem).then((function(t){a.setState({list:a.state.list.concat(t),newItem:e})}))},a.handleFilterChange=function(e){a.setState({currFilter:a.filtOptions[e]})},a.filtOptions=["All","Completed","Pending"];return a.state={list:[],newItem:{content:"",completed:!1,edit:!1},currFilter:a.filtOptions[0]},j().then((function(e){a.setState({list:e})})).catch((function(e){throw e.response.data})),a.handleEdit=a.handleEdit.bind(Object(u.a)(a)),a.handleDelete=a.handleDelete.bind(Object(u.a)(a)),a.handleComplete=a.handleComplete.bind(Object(u.a)(a)),a.updateItem=a.updateItem.bind(Object(u.a)(a)),a.handleItemChange=a.handleItemChange.bind(Object(u.a)(a)),a.handleNewItemChange=a.handleNewItemChange.bind(Object(u.a)(a)),a.addNewItem=a.addNewItem.bind(Object(u.a)(a)),a.handleFilterChange=a.handleFilterChange.bind(Object(u.a)(a)),a}return Object(o.a)(n,[{key:"updateItem",value:function(e){var t=this;e.edit=!1,F(e.id,e).then((function(n){t.setState({list:t.state.list.map((function(t){return t.id===e.id?n:t}))})}))}},{key:"render",value:function(){var e=this,t=this.state.list.filter((function(t){return"All"===e.state.currFilter?t:"Completed"===e.state.currFilter?t.completed:!t.completed}));return i.a.createElement("div",null,i.a.createElement(O,{currFilter:this.state.currFilter,filtOptions:this.filtOptions,handleFilterChange:this.handleFilterChange}),i.a.createElement("br",null),i.a.createElement("ul",null,t.map((function(t){return t.edit?i.a.createElement(f,{key:t.id,item:t,updateItem:e.updateItem,handleItemChange:e.handleItemChange}):i.a.createElement(s,{key:t.id,item:t,handleEdit:e.handleEdit,handleDelete:e.handleDelete,handleComplete:e.handleComplete})}))),i.a.createElement(p,{item:this.state.newItem,handleNewItemChange:this.handleNewItemChange,addNewItem:this.addNewItem}))}}]),n}(i.a.Component);var D=function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"To-do List"),i.a.createElement("p",null,"by: Adam Smith,",i.a.createElement("a",{href:"https://github.com/TheAdamSmith/todo-list"},"Code Repository")),i.a.createElement(y,null))};n(88);c.a.render(i.a.createElement(D,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.d10ec8bd.chunk.js.map