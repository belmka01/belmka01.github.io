import{j as n}from"./three-e9b3e8f9.js";import"./vendor-7249422d.js";import{d as t}from"./ui-4dbc6f2d.js";import{a,C as s,G as p,L as d}from"./mui-383fc1a0.js";const l=t.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`,c=t.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({theme:e})=>e.card};
  color: ${({theme:e})=>e.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`,m=t.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`,g=t.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,h=t.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`,f=t.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  object-position: center;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  background-color: ${({theme:e})=>e.white};
  padding: 16px;
  box-sizing: border-box;
`,w=t.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`,b=t.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`,u=t.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme:e})=>e.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.primary+20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`,y=t.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
`,j=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,v=t.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`,$=t.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({theme:e})=>e.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`,z=t.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`,x=t.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.primary};
  ${({dull:e,theme:o})=>e&&`
        background-color: ${o.bgLight};
        color: ${o.text_secondary};
        &:hover {
            background-color: ${({theme:i})=>i.bg+99};
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({theme:e})=>e.primary+99};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`,L=({openModal:e,setOpenModal:o})=>{const i=e==null?void 0:e.project;return n.jsx(a,{open:!0,onClose:()=>o({state:!1,project:null}),children:n.jsx(l,{children:n.jsxs(c,{children:[n.jsx(s,{style:{position:"absolute",top:"10px",right:"20px",cursor:"pointer"},onClick:()=>o({state:!1,project:null})}),n.jsx(f,{src:i==null?void 0:i.image}),n.jsx(m,{children:i==null?void 0:i.title}),n.jsx(g,{children:i.date}),n.jsx(b,{children:i==null?void 0:i.tags.map(r=>n.jsx(u,{children:r}))}),n.jsx(h,{children:i==null?void 0:i.description}),i.member&&n.jsxs(n.Fragment,{children:[n.jsx(w,{children:"Members"}),n.jsx(y,{children:i==null?void 0:i.member.map(r=>n.jsxs(j,{children:[n.jsx(v,{src:r.img}),n.jsx($,{children:r.name}),n.jsx("a",{href:r.github,target:"new",style:{textDecoration:"none",color:"inherit"},children:n.jsx(p,{})}),n.jsx("a",{href:r.linkedin,target:"new",style:{textDecoration:"none",color:"inherit"},children:n.jsx(d,{})})]}))})]}),n.jsxs(z,{children:[n.jsx(x,{dull:!0,href:i==null?void 0:i.github,target:"new",children:"View Code"}),n.jsx(x,{href:i==null?void 0:i.webapp,target:"new",children:"View Live App"})]})]})})})};export{L as default};
