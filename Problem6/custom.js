class TreeNode{
  constructor(name){
    this.name = name;
    this.children =[];
  }
  addchild(element){
    this.children.push(element);
  }
}

const ciri = new TreeNode('Ciri');
const chuy = new TreeNode('Chuy');
const jesus = new TreeNode('Jesus');
const vane = new TreeNode('Vane')
const vero = new TreeNode('Vero')

ciri.addchild(chuy);
ciri.addchild(vero)
chuy.addchild(jesus);
chuy.addchild(vane)

var indents = 1;
function walk(node,indent=indents) {
		console.log('--' + Array(indent).join('--'), node.name);
		if(node.children) {
      if(node.children.length>0){
        node.children.forEach(element=>walk(element, indent+1));
        }else{
          indent--;
        }
      }
}

walk(ciri)