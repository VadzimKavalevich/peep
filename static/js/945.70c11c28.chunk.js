"use strict";(self.webpackChunkpeep=self.webpackChunkpeep||[]).push([[945],{3945:(s,t,e)=>{e.r(t),e.d(t,{default:()=>N});var o=e(2791);const a="ProfileInfo_descriptionBlock__n51iN",r="ProfileInfo_userPhoto__vrpo7";var i=e(9163),n=e(184);o.Component;const l=s=>{let[t,e]=(0,o.useState)(!1),[a,r]=(0,o.useState)(s.status);(0,o.useEffect)((()=>{r(s.status)}),[s.status]);return(0,n.jsxs)("div",{children:[!t&&(0,n.jsx)("div",{children:(0,n.jsx)("span",{onDoubleClick:()=>{e(!0)},children:s.status||"No status"})}),t&&(0,n.jsx)("div",{children:(0,n.jsx)("input",{onChange:s=>{r(s.currentTarget.value)},autoFocus:!0,onBlur:()=>{e(!1),s.updateStatus(a)},value:a})})]})},u=s=>{let{profile:t,status:e,updateStatus:o}=s;return t?(0,n.jsxs)("div",{children:[(0,n.jsx)("img",{src:"https://wallpapercave.com/wp/wp2461898.jpg"}),(0,n.jsx)(l,{status:e,updateStatus:o}),(0,n.jsxs)("div",{className:a,children:[(0,n.jsx)("img",{className:r,src:t.photos.large}),(0,n.jsx)("div",{children:t.fullName}),(0,n.jsx)("div",{children:t.aboutMe}),(0,n.jsx)("a",{href:t.contacts.twitter,target:"_blank",children:"X"}),t.lookingForAJob,(0,n.jsx)("div",{children:"I'm open for a job"}),(0,n.jsx)("div",{children:t.lookingForAJobDescription})]})]}):(0,n.jsx)(i.Z,{})};var p=e(6508);const d="Post_post__4mLt8",c=s=>(0,n.jsxs)("div",{className:d,children:[(0,n.jsx)("img",{src:s.ava}),s.message,(0,n.jsxs)("div",{children:[s.likesCount," likes"]})]}),h="MyPosts_myposts__xFj9P";var x=e(6139),j=e(704),m=e(5304),v=e(1436);const f=(0,m.DT)(10),g=(0,j.Z)({form:"newPostText"})((s=>(0,n.jsx)("div",{children:(0,n.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,n.jsx)("div",{children:(0,n.jsx)(x.Z,{component:v.gx,name:"newPostText",placeholder:"type text",validate:[m.C1,f]})}),(0,n.jsx)("button",{children:"Add post"})]})}))),P=o.memo((s=>{let t=s.posts.map((s=>(0,n.jsx)(c,{ava:s.ava,message:s.message,likesCount:s.likesCount})));return(0,n.jsxs)("div",{className:h,children:[(0,n.jsx)("h3",{children:"My Posts"}),(0,n.jsx)(g,{onSubmit:t=>{s.addPost(t.newPostText)}}),(0,n.jsx)("div",{children:t})]})}));var S=e(8687);const k=(0,S.$j)((s=>({posts:s.profilePage.posts,newPostText:s.profilePage.newPostText})),(s=>({addPost:t=>{s((0,p.Wl)(t))}})))(P),_=s=>(0,n.jsxs)("div",{children:[(0,n.jsx)(u,{profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,n.jsx)(k,{})]});var b=e(4880),w=e(97);class C extends o.Component{componentDidMount(){let s=this.props.match.params.userId;s||(s=this.props.authorizedUserId),this.props.getUserProfile(s),this.props.getStatus(s)}render(){return(0,n.jsx)(_,{...this.props,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})}}const N=(0,w.qC)((0,S.$j)((s=>({profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth})),{getUserProfile:p.et,getStatus:p.lR,updateStatus:p.Nf}),b.EN)(C)}}]);
//# sourceMappingURL=945.70c11c28.chunk.js.map