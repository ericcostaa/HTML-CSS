function calcular(){

    let atual = new Date().getFullYear()
    let nasc = document.getElementById('iano')
    let resu = Number(atual) - Number(nasc.value)

    

    iida.innerHTML = `Sua idade atual é ${resu} anos!`                   

             

}