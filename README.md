# API - BIBLIOTECA

Manejo y control de libros en linea

## Descripcion de los Endpoints 

### GET "/api/books"
Devuelve una lista de todos los libros

**Respuesta Exitosa**:
- **Codigo**: 200 OK
- **Cuerpo**: Array de objetos Book

**Ejemplo de Respuesta**:
```json
[
  {
    "ïd": 1,
    "title": "Cien años de soledad",
    "category": "novela",
    "available": true,
    "author": {
      "id": 1,
      "name": "Gabriel Garcia Marquez",
      "country": "Colombia"
    }
  }
]
```

### GET "/api/books/{id}"
Devuelve el libro especificado en el id proporcionado

**Parametro**:
- **Path Varible:** id (Long) - ID del libro

**Respuesta Existosa**:
- **Codigo**: 200 OK
- **Cuerpo**: Objeto Book

**Respuesta si no se encuentra el libro**:
- **Codigo**: 404 Not Found

### POST "/api/books"
Guarda un libro en la base de datos

**Cuerpo de la Solicitud**:
- **Tipo**: JSON
- **Ejemplo**:
    ```json
    {
      "title": "Cien años de soledad",
      "category": "novela",
      "available": true,
      "author": {
        "id": 1
      }
    }
    ```
**Respuesta Existosa**:
- **Codigo**: 200 OK
- **Cuerpo**: Objeto libro

### DELETE "/api/books/{id}"
Elimina el libro correspondiente al id proporcionado

**Parametro**:
- **Path Variable**: id (Long) - ID del libro

**Respuesta Exitosa**:
- **Codigo**: 202 No Content

### PUT "/api/books/{id}"
Actualiza el libro del id proporcionado

**Parametro**:
- **Path Variable**: id (Long) - ID del libro

**Cuerpo de la Solicitud**:
- **Tipo**: JSON
- **Ejemplo**:
    ```json
    {
      "title": "Cien años de soledad",
      "category": "novela",
      "available": true,
      "author": {
        "id": 1
      }
    }
    ```
**Respuesta Exitosa**:
- **Codigo**: 200 Ok
- **Cuerpo**: Objeto libro

**Respuesta en caso de no encontrar el libro**:
- **Codigo**: 404 Not Found

### GET "/api/books/author/{id}"
Devuelve una lista de libros basado en el ID del autor proporcionado

**Parametro**:
- **Path Variable**: id (Long) - ID del autor

**Respuesta Exitosa**:
- **Codigo**: 200 Ok
- **Cuerpo**: Array de objetos Book
- **Ejemplo de Respuesta**:
```json
[
    {
        "id": 5,
        "title": "Harry Potter",
        "category": "aventura",
        "available": true,
        "fk_author": {
            "id": 2,
            "name": "J.K. Rowling",
            "country": "Inglaterra"
        }
    },
    {
        "id": 6,
        "title": "Harry Potter II",
        "category": "aventura",
        "available": true,
        "fk_author": {
            "id": 2,
            "name": "J.K. Rowling",
            "country": "Inglaterra"
        }
    }
]
```

### GET "/api/books/categories"
Devuelve una lista con las categorias de los libros disponibles

**Respuesta Exitosa**:
- **Codigo**: 200 Ok
- **Cuerpo**: Array de String
- **Ejemplo de Respuesta**:
```json
[
  "novela",
  "terror",
  "aventura"
]
```

### GET "/api/books/categories/{category}"
Devuelte una lista de libros de la cateroria proporcionada

**Parametro**:
- **Path Variable**: category (String) - Categoria de los libros

**Respuesta Exitosa**:
- **Codigo**: 200 Ok
- **Cuerpo**: Array de objetos Book
- **Ejemplo de Respuesta**:
```json
[
    {
        "id": 5,
        "title": "Harry Potter",
        "category": "aventura",
        "available": true,
        "fk_author": {
            "id": 2,
            "name": "J.K. Rowling",
            "country": "Inglaterra"
        }
    },
    {
        "id": 8,
        "title": "Viaje Submarino",
        "category": "aventura",
        "available": true,
        "fk_author": {
            "id": 2,
            "name": "Julio X",
            "country": "Francia"
        }
    }
]
```

### GET "/api/authors"
Devuelve una lista de todos los autores

**Respuesta Exitosa**:
- **Codigo**: 200 OK
- **Cuerpo**: Array de objetos Author
- **Ejemplo de Respuesta**:
    ```json
    [  
      {
        "id": 1,
        "name": "Gabriel Garcia Marquez",
        "country": "Colombia"
      }
    ]
    ```