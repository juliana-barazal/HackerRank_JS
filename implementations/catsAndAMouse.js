//determinar qual gato pegará o rato primeiro; se ambos pegarem ao mesmo tempo exibir "Mouse C".
function catAndMouse(x, y, z) {
    let a = Math.abs(x-z);
    let b = Math.abs(y-z);
    
    if(a === b){
        return("Mouse C");
    }
    
    else if(a>b){
        return("Cat B");
    }
    
    else{
        return("Cat A");    
    }

}