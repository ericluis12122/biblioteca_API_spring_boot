import { getAuthors, saveBook, updateBook, getBookById } from "./api.js";

async function loadAuthors() {
    let json = await getAuthors();

    let select = document.getElementById('listaAutores');
    select.innerHTML = '';
    json.forEach(author => {
        let option = document.createElement('option');
        option.value = author.id;
        option.text = author.name;
        select.appendChild(option);
    });
}

function clickCreate() {
    const id = window.location.href.split('?')[1];
    
    const book = {
        'title': document.getElementById('txtTitulo').value,
        'category': document.getElementById('txtCategoria').value,
        'available': document.getElementById('txtDisponibilidad').value == 'Si',
        'fk_author': {
            'id': parseInt(document.getElementById('listaAutores').value, 10)
        }
    }
    if(id)  updateBook(id, book);
    else    saveBook(book);
}

async function loadBook() {
    const id = window.location.href.split('?')[1];
    if(id) {
        const book = await getBookById(id);
        document.getElementById('txtTitulo').value = book.title;
        document.getElementById('txtCategoria').value = book.category;
        document.getElementById('txtDisponibilidad').value = book.available ? 'Si' : 'No';


        const options = document.getElementById('listaAutores').options;
        
        for (const e of options) {
            console.log(e.value, book.fk_author.id);
            if(e.value == book.fk_author.id) {
                e.selected = true;  
                break;
            }
        }
    }
}

loadAuthors();
loadBook();

document.getElementById('btnGuardarLibro').addEventListener('click', clickCreate);