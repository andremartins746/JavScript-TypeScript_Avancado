function wathTime(min,max){
    min *= 1000
    max *= 1000
    return Math.floor( Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    setTimeout(() => {
        console.log(msg)
        
    }, tempo);
}

esperaAi('frase 1',wathTime(1, 3))
esperaAi('frase 2',wathTime(1, 3))
esperaAi('frase 3',wathTime(1, 3))
esperaAi('frase 4',wathTime(1, 3))