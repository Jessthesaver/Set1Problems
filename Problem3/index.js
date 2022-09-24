function change(element,color="black",fontsize="13",backgrouncolor="#beige"){
    let el = document.getElementsByTagName(this);
    el.style.color= color;
    el.style.fontSize = fontsize;
    el.style.backgrounColor= backgrouncolor;
}

change('div')

document.getElementById("example").addEventListener("click", change);
    function change(element,color="#081EDE",fontsize="13",backgrouncolor="#000000"){
    let el = document.getElementById(this.id||element);
    el.style.color= color;
    el.style.fontSize = fontsize;
    el.style.backgroundColor = backgrouncolor;
}

change('example',"#0B5345", "20", "#D0D3D4");