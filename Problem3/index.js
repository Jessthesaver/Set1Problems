function change(e,color="blue",fontsize="1.5rem",background="#979A9A"){
    if(this!=window){ 
        this.style.color= color;
        this.style.fontSize = fontsize;
        this.style.backgroundColor= background;
    }else{
        let el = document.getElementById(e.id)
        el.style.color= color;
        el.style.fontSize = fontsize;
        el.style.backgroundColor= background;
    }

}

function specificchange(){
    return change(this, 'yellow','16px','blue')
}

let el= document.getElementById("example")
el.onclick=specificchange;
//i dont know if this is a problem, but the two cases work, the difference is what function needs to be called in order to use the attribute values