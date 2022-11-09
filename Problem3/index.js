function change(color="blue",fontsize="1.5rem",background="#979A9A"){
    this.style.color= color;
    this.style.fontSize = fontsize;
    this.style.backgroundColor= background;
}

let el= document.getElementById("example")
let changer = change.bind(el);
changer('orange', '2rem','red')//use this line to test with given arguments
//changer() //Use this line to test the default values
//Methods like call(), apply(), and bind() can refer this to any object.
//the event handler proved to be more tricky, so binding the context was easier for the sake of the problem