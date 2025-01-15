document.getElementById("js").addEventListener("click",()=>{
    let list=document.getElementById("nav-page")
    if (!list.style.display) {
     return list.style.display="block"

    }
    if (list.style.display=="none") {
     list.style.display="block"
    } else {
        list.style.display="none"
    }
    
    })
    
    
    
    document.getElementById("bar").addEventListener("click",()=>{
        let list=document.getElementById("phone")
        if (!list.style.display) {
            return list.style.display="block"
       
           }
        if (list.style.display=="none") {
         list.style.display="block"
        } else {
            list.style.display="none"
        }
        
        })
        