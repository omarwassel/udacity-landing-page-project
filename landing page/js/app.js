
const _sections=document.querySelectorAll("section");
const _navbar=document.getElementById("navbar__list");

creatNavBar=()=>{
    
    const frag=document.createDocumentFragment();
    
    scrollSmoothly=(e)=>{
        e.preventDefault();
        const sec=document.querySelector(e.target.getAttribute("sec-id"));
        sec.scrollIntoView({behavior : 'smooth'})
    }
    
    for(const sec of _sections){
        
        const id=sec.id;
        const data_nav=sec.getAttribute("data-nav");
        
        const li=document.createElement("li");
        const a=document.createElement("a");
        
        a.href=`#${id}`;
        a.setAttribute("sec-id",`#${id}`);
        a.textContent=data_nav;
        a.addEventListener("click",scrollSmoothly);
        
        li.appendChild(a);
        frag.appendChild(li);
        
    }
    _navbar.appendChild(frag);
}

creatNavBar();

window.addEventListener("scroll",function(){
   
    const _links=_navbar.querySelectorAll("li a");
    
    _links.forEach((link)=>{
       
        const id = link.getAttribute("sec-id");
        const sec =document.querySelector(id);
        const pos=sec.getBoundingClientRect();
        const ref=300;
        
        if(pos.top <=ref & pos.bottom >= ref ){
            console.log("bshoo");
            link.style.color="#00FFFF";
        }else
            link.style.color="#FFF";
    });
   
   
});

