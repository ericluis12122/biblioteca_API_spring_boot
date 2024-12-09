import { getBooks, deleteBook, getCategories } from "./api.js"; 

async function listBooks() {
    // Obtiene los libros desde la API
    let json = await getBooks();

    let html = '';
    json.forEach(book => {
        html += `<tr>
                    <td>${book.title}</td>
                    <td>${book.category}</td>
                    <td>${book.fk_author?.name || 'Desconocido'}</td>
                    <td>${book.available ? 'Si' : 'No'}</td>
                    <td>
                        <a href="#" data-id="${book.id}" class="btn-edit btn btn-primary btn-icon-split">
                            <span class="text">Editar</span>
                        </a>
                        <a href="#" data-id="${book.id}" class="btn-delete btn btn-danger btn-icon-split">
                            <span class="text">Eliminar</span>
                        </a>
                    </td>
                </tr>`;
    });

    document.getElementById('tablaLibros').innerHTML = html;
    
    //Add events
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-id');
            handleDeleteBottom(id);
        });
    });

    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-id');
            handleEditBottom(id);
        });
    });
}

async function listCategories() {
    const categories = await getCategories();

    let container = document.getElementById('categoria-container');

    container.innerHTML = '';

    categories.forEach(category => {
        let buttonHtml = `<div class="text-right" style="display: inline-block;">
        <a href="tables.html?category=${category}" class="btn btn-primary btn-icon-split btn-margin">
        <span class="text">${category}</span></a></div>`;
        container.innerHTML += buttonHtml;
    });
}

async function handleDeleteBottom(id) {
    let confirmDelete = confirm('Are you sure, Delete?');
    if(confirmDelete) 
        await deleteBook(id);
    listBooks();
}

async function handleEditBottom(id) {
    window.location.href = "gestionar-libro.html?" + id;
}

listCategories();
listBooks();