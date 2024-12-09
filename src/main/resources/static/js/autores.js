import { getAuthors } from "./api.js";

async function listAuthors() {
    let json = await getAuthors();

    let html = '';

    json.forEach(author => {
        html += `<tr>
                    <td>${author.name}</td>
                    <td>${author.country}</td>
                    <td>
                        <a href="#" onclick="verLibrosPorAutor(1)" class="btn btn-info btn-icon-split">
                            <span class="text">Ver libros</span>
                        </a>
                    </td>             
                </tr>`
    });

    document.getElementById('tablaAutor').innerHTML = html;
}

listAuthors();