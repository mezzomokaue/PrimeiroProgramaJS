var valores = [4,5,7,9,32]

for (var cont = 0; cont < valores.legth; cont++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//ou

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)    
}