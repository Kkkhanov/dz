let button1 = document.getElementById('calc');
let out = document.getElementById('out');
let S = document.getElementById('S');
let h = document.getElementById('h');
let cost = document.getElementById('cost');
let quantity = document.getElementById('quantity');
let button2 = document.getElementById('calc-2');
let out2 = document.getElementById('out-2')


function f1(){
    let V = S.value * h.value;
    let price = V * cost.value;
    out.textContent = 'фундамент будет стоить ' + price + ' денег';
}

function f2(){
    let sum = quantity.value * 1500;
    let qua = quantity.value;
    if(qua > 100 && qua <= 200){
        let discount1 = sum * 0.05;
        let total1 = sum - discount1;
        out2.textContent = 'Ваша сумма со скидкой будет равна ' + total1;
        console.log(sum)
        console.log(discount1)
    }
    else if(qua > 200 && qua <= 300){
        let discount2 = sum * 0.1;
        let total2 = sum - discount2;
        out2.textContent = 'Ваша сумма со скидкой будет равна ' + total2;
    }
    else if(qua > 300){
        let discount3 = sum * 0.2;
        let total3 = sum - discount3;
        out2.textContent = 'Ваша сумма со скидкой будет равна ' + total3;
    }
    else{
        out2.textContent = 'Ваша сумма без скидки будет равна ' + sum;
    }
}



button1.onclick = f1;
button2.onclick = f2;
