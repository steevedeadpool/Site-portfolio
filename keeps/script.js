'use strict'


const new_keep_btn = document.getElementById('new_keep_btn');
const show_keep_btn = document.getElementById('show_keep_btn');
const new_keep = document.getElementById('new_keep');
const keeps = document.getElementById('keeps');

new_keep.value = localStorage.getItem('input_value')



new_keep.oninput = save_input
function save_input(event) {    
    localStorage.setItem('input_value', event.target.value)
}



//Добавление и сохранение новой заметки

let keeps_array = JSON.parse(localStorage.getItem('keeps')) || [];
render_keep();



new_keep_btn.onclick = add_keep
function render_keep() {
    keeps.innerHTML = ""
    let i = 0
    for (let value of keeps_array) {
        const keep_template = `
            <div class='col-3 p-2 m-3'>
                <div class="border p-2">
            <p class="text-wrap overflow-hidden">${value}</p>
            <button class="btn btn-danger" data-index="${i}" data-action="delete" id="remove_btn">DELETE</button>
                </div>
            </div>
        `;
        keeps.insertAdjacentHTML('afterbegin', keep_template)
        i++
    }
}

function add_keep(event) {
    if (new_keep.value) {
        keeps_array.push(new_keep.value)
        localStorage.setItem('keeps', JSON.stringify(keeps_array))
        render_keep()
        new_keep.value = ''
        localStorage.removeItem('input_value')
        is_hidden = true
        new_keep.hidden = is_hidden
        new_keep_btn.hidden = is_hidden 
    }
}


//видимость поля добавления заметки
show_keep_btn.onclick = show_and_hide
let is_hidden = false;
function show_and_hide() {
    if(is_hidden == true)
    {is_hidden = false;}
    else{is_hidden = true;}
    new_keep.hidden = is_hidden
    new_keep_btn.hidden = is_hidden 
}
// удаление заметки

keeps.onclick = check_action

function check_action(event) {
    let HTMLelement = event.target

    if (HTMLelement.dataset.action == 'delete') {
        delete_keep(HTMLelement.dataset.index)
    }
}


function delete_keep(index) {
    keeps_array.splice(index, 1)
    localStorage.setItem('keeps', JSON.stringify(keeps_array))
    render_keep();
}