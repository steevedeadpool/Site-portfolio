const input = document.getElementById("input");
const equal = document.getElementById("=")
equal.addEventListener('click', get_resutlt)
for (let i = 1; i <= 21; i++) {
    const btn = document.getElementById('btn' + i);
    window[btn] = 'btn' + i
    btn.addEventListener('click', add_symbol)
}

function get_resutlt() {
    input.value = eval(input.value) 
    if (input.value == "undefined") {
        input.value = ""
    }
}

function add_symbol(ev) {
    let eve = ev.target.innerHTML
    if (eve == '^') {
        input.value += '**'
    }
    else if(eve == 'C') {
        input.value = ''
    }
    else if(eve == 'π') {
        input.value += 3.14
    }
    else if(eve == 'cos') {
        input.value = Math.cos(eval(input.value))
    }
    else if(eve == 'sin') {
        input.value = Math.sin(eval(input.value))
    }
    else if(eve == 'log') {
        input.value = Math.log(eval(input.value))
    }
    else {
        input.value += ev.target.innerHTML
    }
}
