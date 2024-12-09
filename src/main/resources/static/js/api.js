const URL_BASE = "http://localhost:8080/api"

async function getAuthors() {
    let response = await fetch(URL_BASE + "/authors", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return await response.json();
}

async function getCategories() {
    let response = await fetch(URL_BASE + "/books/categories", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return await response.json();
}

async function getBooks() {
    let response = await fetch(URL_BASE + "/books", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return await response.json();
}

async function getBookById(id) {
    let response = await fetch(`${URL_BASE}/books/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return await response.json();
}

async function deleteBook(id) {
    await fetch(`${URL_BASE}/books/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
}

async function updateBook(id, book) {
    await fetch(`${URL_BASE}/books/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    });
    alert('book updated!');
    window.location.href = "./tables.html";
}

async function saveBook(book) {
    await fetch(URL_BASE + "/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    });
    alert('book saved!');
    window.location.href = "./tables.html";
}

export {getAuthors, getBooks, deleteBook, saveBook, updateBook, getBookById, getCategories};