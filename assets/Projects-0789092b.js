import{j as i}from"./three-e9b3e8f9.js";import{r as x}from"./vendor-7249422d.js";import{d as t}from"./ui-4dbc6f2d.js";import{p}from"./index-49e1c01a.js";import"./mui-383fc1a0.js";const l=t.div`
  width: 330px;
  height: 490px;
  background-color: ${({theme:e})=>e.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`,c=t.img`
  width: 100%;
  height: 180px;
  background-color: ${({theme:e})=>e.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  object-fit: contain;
  object-position: center;
  padding: 8px;
  box-sizing: border-box;
`,g=t.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`,m=t.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:e})=>e.primary};
  background-color: ${({theme:e})=>e.primary+15};
  padding: 2px 8px;
  border-radius: 10px;
`,h=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`,f=t.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,b=t.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`,w=t.div`
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`,u=t.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`,y=t.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({theme:e})=>e.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({theme:e})=>e.card};
`;t.a`
  color: ${({theme:e})=>e.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
`;const v=({project:e,setOpenModal:a})=>{var r,n;return i.jsxs(l,{onClick:()=>a({state:!0,project:e}),children:[i.jsx(c,{src:e.image,alt:e.title,onError:o=>{console.log("Image failed to load:",e.image),o.target.style.display="none"}}),i.jsx(g,{children:(r=e.tags)==null?void 0:r.map((o,I)=>i.jsx(m,{children:o}))}),i.jsxs(h,{children:[i.jsx(f,{children:e.title}),i.jsx(b,{children:e.date}),i.jsx(w,{children:e.description})]}),i.jsx(u,{children:(n=e.member)==null?void 0:n.map(o=>i.jsx(y,{src:o.img}))})]})},j=t.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
padding: 0 16px;
align-items: center;
`,k=t.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,$=t.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,C=t.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,z=t.div`
display: flex;
border: 1.5px solid ${({theme:e})=>e.primary};
color: ${({theme:e})=>e.primary};
font-size: 16px;
border-radius: 12px;
font-weight 500;
margin: 22px 0;
@media (max-width: 768px){
    font-size: 12px;
}
`,d=t.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({theme:e})=>e.primary+20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({active:e,theme:a})=>e&&`
  background:  ${a.primary+20};
  `}
`,s=t.div`
  width: 1.5px;
  background: ${({theme:e})=>e.primary};
`,A=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`,B=({openModal:e,setOpenModal:a})=>{const[r,n]=x.useState("all");return i.jsx(j,{id:"Projects",children:i.jsxs(k,{children:[i.jsx($,{children:"Projects"}),i.jsx(C,{style:{marginBottom:"40px"},children:"I have worked on a wide range of projects. From AI/ML solutions to cybersecurity tools and mobile apps. Here are some of my projects."}),i.jsxs(z,{children:[i.jsx(d,{active:r==="all",onClick:()=>n("all"),children:"ALL"}),i.jsx(s,{}),i.jsx(d,{active:r==="AI/ML",onClick:()=>n("AI/ML"),children:"AI/ML"}),i.jsx(s,{}),i.jsx(d,{active:r==="Cybersecurity",onClick:()=>n("Cybersecurity"),children:"CYBERSECURITY"}),i.jsx(s,{}),i.jsx(d,{active:r==="Mobile App",onClick:()=>n("Mobile App"),children:"MOBILE APP"})]}),i.jsx(A,{children:p.filter(o=>r==="all"||o.category===r).map(o=>i.jsx(v,{project:o,openModal:e,setOpenModal:a},o.id))})]})})};export{B as default};
