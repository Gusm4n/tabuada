function tabuar(){
    var num = document.getElementById('num')
    var numero = Number(num.value)
    var res = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('insira um número corretamente')
    }else{
        let c = 1
        res.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero * c}`
            res.appendChild(item)
            c++
        }
    }
}