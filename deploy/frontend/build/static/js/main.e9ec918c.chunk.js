(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(55)},33:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(26),o=n.n(l),c=(n(33),n(15)),u=n(6),i=n(7),s=n(9),m=n(8),h=n(10),d=n(11),f=n.n(d),p=n(4),E=n(0),v=n(16),b=(n(53),n(5)),g=function(e){var t=e.todo,n=e.deleteTodoItem;return r.a.createElement("tr",null,r.a.createElement("td",null,t.text),r.a.createElement("td",null,t.user),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return n(t.id)},type:"button"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))},j=function(e){var t=e.todos,n=e.deleteTodoItem,a=(0,e.is_authenticated)();return r.a.createElement("table",{className:"App-header"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"text"),r.a.createElement("th",null,"User"))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement(g,{todo:e,deleteTodoItem:n})})),a?r.a.createElement("a",{href:"/todos/create/"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"):"")},k=function(e){var t=e.todos,n=e.is_authenticated,a=Object(E.h)().id,l=t.filter(function(e){return e.project===a});return l.length>0?r.a.createElement("div",null,"\u041f\u0440\u043e\u0435\u043a\u0442 - ",l[0].project.name,r.a.createElement(j,{todos:l,is_authenticated:function(){return n()}})):r.a.createElement("div",null,"\u043d\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u0435\u0439")},_=function(e){var t=e.project,n=e.deleteProjectItem;return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,r.a.createElement(p.b,{to:t.id},t.name)),r.a.createElement("td",null,t.users),r.a.createElement("td",null,t.link),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return n(t.id)},type:"button"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))},y=function(e){var t=e.projects,n=e.todos,l=e.deleteProjectItem,o=e.is_authenticated,c=Object(a.useState)(),u=Object(b.a)(c,2),i=u[0],s=u[1];t.map(function(e){return e.href=r.a.createElement(p.b,{to:e.id},e.name)}),t.map(function(e){return e.key=e.id}),Object(a.useEffect)(function(){"object"!==typeof i&&t.length>0&&s(t)});return r.a.createElement("div",null,r.a.createElement("table",{className:"App-header"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Project name"),r.a.createElement("th",null,"Users"),r.a.createElement("th",null,"Link"),r.a.createElement("td",null,"Action"))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement(_,{project:e,deleteProjectItem:l})})),o()?r.a.createElement("a",{href:"/projects/create/"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442"):"",r.a.createElement("div",null,r.a.createElement("label",null,"\u041f\u043e\u0438\u0441\u043a: "),r.a.createElement("input",{type:"text",className:"form-control",name:"name",onSearch:function(e){t=t.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())}),s(t)}}))),r.a.createElement(E.d,null,r.a.createElement(E.b,{path:":id",element:r.a.createElement(k,{todos:n,is_authenticated:function(){return o()}})})))},C=function(e){var t=e.user;return r.a.createElement("tr",null,r.a.createElement("td",null,t.username),r.a.createElement("td",null,t.first_name),r.a.createElement("td",null,t.last_name),r.a.createElement("td",null,t.email))},S=function(e){var t=e.users;return r.a.createElement("table",null,r.a.createElement("th",null,"User name"),r.a.createElement("th",null,"First name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"E-mail"),t.map(function(e){return r.a.createElement(C,{user:e})}))},O=function(){return r.a.createElement("div",null,"Information For You")},F=function(e){var t=e.is_authenticated();return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/projects"},"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/todos"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043c\u0435\u0442\u043e\u043a")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/users"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")),r.a.createElement("li",null,t?r.a.createElement("button",{onClick:function(){return e.logout()}},"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 "):r.a.createElement(p.b,{to:"/login"},"\u0412\u043e\u0439\u0442\u0438"))))},I=function(){return r.a.createElement("div",null,"Training Project -= To Do =-")},w=function(){return r.a.createElement("div",null,"Achtung! Alarm! Page nicht gefunden!")},T=n(27),P=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={login:"",password:""},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(T.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){this.props.get_token(this.state.login,this.state.password),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("input",{type:"text",name:"login",placeholder:"login",onChange:function(t){return e.handleChange(t)},value:this.state.login}),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:function(t){return e.handleChange(t)},value:this.state.password}),r.a.createElement("input",{type:"submit",value:"Login"}))}}]),t}(r.a.Component),N=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).onFinish=function(e){!1!==n.props.is_authenticated()?(n.props.createTodoItem(e.text,e.project,e.user),n.setState({isFinish:!0})):n.onFinishFailed("Not auth")},n.onFinishFailed=function(e){console.log("Failed:",e)},n.state={text:"",project:e.projects,user:0,isFinish:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return!0===this.state.isFinish?r.a.createElement(E.a,{to:"/todos"}):r.a.createElement("div",null,r.a.createElement("div",null,"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("div",null,r.a.createElement("label",{for:"todos"},"\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",value:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",null,r.a.createElement("label",{for:"project"},"\u041f\u0440\u043e\u0435\u043a\u0442"),r.a.createElement("select",{name:"project",className:"form-control",onChange:function(t){return e.handleChange(t)}},this.props.projects.map(function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)}))),r.a.createElement("div",null,r.a.createElement("label",{for:"user"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"),r.a.createElement("select",{name:"user",className:"form-control",onChange:function(t){return e.handleChange(t)}},this.props.users.map(function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.username)}))),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Save"})))}}]),t}(r.a.Component),x=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).onFinish=function(e){!1!==n.props.is_authenticated()?(n.props.createProjectItem(e.name,e.link,e.user),n.setState({isFinish:!0})):n.onFinishFailed("Not auth")},n.onFinishFailed=function(e){console.log("Failed:",e)},n.onSearch=function(e){console.log(e)},n.state={isFinish:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return!0===this.state.isFinish?r.a.createElement(E.a,{to:"/projects"}):r.a.createElement("div",null,r.a.createElement("div",null,"\u041d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("div",null,r.a.createElement("label",{for:"name"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",null,r.a.createElement("label",{for:"user"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"),r.a.createElement("select",{name:"user",className:"form-control",onChange:function(t){return e.handleChange(t)}},this.props.users.map(function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.username)}))),r.a.createElement("div",null,r.a.createElement("label",{for:"link"},"\u0421\u0441\u044b\u043b\u043a\u0430"),r.a.createElement("input",{type:"text",className:"form-control",name:"link",value:this.state.name,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Save"})))}}]),t}(r.a.Component),L=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={authors:[],users:[],projects:[],todos:[],token:"",auth_login:""},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"set_token",value:function(e,t){var n=this,a=new v.a;a.set("token",e),a.set("auth_login",t),this.setState({token:e},function(){return n.load_data()}),this.setState({auth_login:t})}},{key:"is_authenticated",value:function(){return""!==this.state.token}},{key:"logout",value:function(){this.set_token("","")}},{key:"get_token_from_storage",value:function(){var e=this,t=new v.a,n=t.get("token"),a=t.get("auth_login");void 0!==n&&this.setState({token:n},function(){return e.load_data()}),this.setState({auth_login:a})}},{key:"get_token",value:function(e,t){var n=this;console.log(e),f.a.post("http://127.0.0.1:8000/api-token-auth/",{username:e,password:t}).then(function(t){n.set_token(t.data.token,e),console.log(t.data)}).catch(function(e){console.log(e),e.response&&400===e.response.status?alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"):alert("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430")})}},{key:"get_headers",value:function(){var e={"Content-Type":"application/json"};return this.is_authenticated()&&(e.Authorization="Token "+this.state.token),e}},{key:"load_data",value:function(){var e=this,t=this.get_headers();f.a.get("http://127.0.0.1:8000/api/authors/",{headers:t}).then(function(t){var n=t.data.results;e.setState({authors:n})}).catch(function(e){return console.log(e)}),f.a.get("http://127.0.0.1:8000/api/users/",{headers:t}).then(function(t){var n=t.data.results;e.setState({users:n})}).catch(function(e){return console.log(e)}),f.a.get("http://127.0.0.1:8000/api/projects/",{headers:t}).then(function(t){var n=t.data.results;e.setState({projects:n})}).catch(function(e){return console.log(e)}),f.a.get("http://127.0.0.1:8000/api/project_todos/",{headers:t}).then(function(t){var n=t.data.results;e.setState({todos:n})}).catch(function(e){return console.log(e)})}},{key:"deleteProjectItem",value:function(e){}},{key:"createProjectItem",value:function(e,t,n){var a=this,r=this.get_headers(),l={name:e,link:t,users:n};f.a.post("http://127.0.0.1:8000/api/projects/",l,{headers:r}).then(function(e){a.setState({projects:[].concat(Object(c.a)(a.state.projects),[e.data])})}).catch(function(e){return console.log(e)})}},{key:"deleteTodoItem",value:function(e){}},{key:"createTodoItem",value:function(e,t,n){var a=this,r=this.get_headers(),l={text:e,project:t,user:n};f.a.post("http://127.0.0.1:8000/api/project_todos/",l,{headers:r}).then(function(e){var t=e.data,n=a.state.projects.filter(function(e){return e.id===t.project})[0];t.project=n,a.setState({todos:[t].concat(Object(c.a)(a.state.todos))})}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.get_token_from_storage()}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(F,{is_authenticated:function(){return e.is_authenticated()},logout:function(){return e.logout()},auth_login:this.state.auth_login}),r.a.createElement("main",null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/",element:r.a.createElement(I,null)}),r.a.createElement(E.b,{path:"/projects/*",element:r.a.createElement(y,{projects:this.state.projects,todos:this.state.todos,deleteProjectItem:function(t){return e.deleteProjectItem(t)},is_authenticated:function(){return e.is_authenticated()}})}),r.a.createElement(E.b,{path:"/projects/create",element:r.a.createElement(x,{users:this.state.users,is_authenticated:function(){return e.is_authenticated()},createProjectItem:function(t,n,a){return e.createProjectItem(t,n,a)}})}),r.a.createElement(E.b,{path:"/todos",element:r.a.createElement(j,{todos:this.state.todos,deleteTodoItem:function(t){return e.deleteTodoItem(t)},is_authenticated:function(){return e.is_authenticated()}})}),r.a.createElement(E.b,{path:"/todos/create",element:r.a.createElement(N,{projects:this.state.projects,users:this.state.users,is_authenticated:function(){return e.is_authenticated()},createTodoItem:function(t,n,a){return e.createTodoItem(t,n,a)}})}),r.a.createElement(E.b,{path:"/users",element:r.a.createElement(S,{users:this.state.users})}),r.a.createElement(E.b,{path:"/login",element:r.a.createElement(P,{get_token:function(t,n){return e.get_token(t,n)},is_authenticated:function(){return e.is_authenticated()}})}),r.a.createElement(E.b,{path:"*",element:r.a.createElement(w,null)}))),r.a.createElement(O,null))}}]),t}(r.a.Component),A=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,56)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,l=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),l(e),o(e)})};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),A()}},[[28,3,2]]]);
//# sourceMappingURL=main.e9ec918c.chunk.js.map