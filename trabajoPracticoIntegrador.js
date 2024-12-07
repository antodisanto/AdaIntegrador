// 1.A Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades:
// id (número)
// título (string),
// autor (string),
// año (número),
// género (string),
// disponible (booleano).

// Acá creo un arreglo de libros(objeto libro, con sus atributos)
let libros = [
  {
    id: 1,
    titulo: "El principito",
    autor: "Antoine de Saint Exupery",
    anio: 1943,
    genero: "novela",
    disponible: true,
  },
  {
    id: 2,
    titulo: "Martin Fierro",
    autor: "Jose Hernandez",
    anio: 1872,
    genero: "gauchesco",
    disponible: true,
  },
  {
    id: 3,
    titulo: "Crepusculo",
    autor: "Stephenie Meyer",
    anio: 2005,
    genero: "novela",
    disponible: true,
  },
  {
    id: 4,
    titulo: "Mi planta naranja lima",
    autor: "Jose Mauro Devasconcelo",
    anio: 1968,
    genero: "novela",
    disponible: true,
  },
  {
    id: 5,
    titulo: "One piece",
    autor: "Eiichiro Oda",
    anio: 1997,
    genero: "fantasia",
    disponible: true,
  },
  {
    id: 6,
    titulo: "El Cantar de mio Cid",
    autor: "Desconocido",
    anio: 1200,
    genero: "épica",
    disponible: true,
  },
  {
    id: 7,
    titulo: "Los ojos del perro siberiano",
    autor: "Antonio Santa Ana",
    anio: 1963,
    genero: "novela juvenil",
    disponible: true,
  },
  {
    id: 8,
    titulo: "Eneida",
    autor: "Virgilio",
    anio: -19,
    genero: "Poesía y epopeya",
    disponible: true,
  },
  {
    id: 9,
    titulo: "Mis tios gigantes",
    autor: "Nicolas Shuff",
    anio: 2019,
    genero: "infantil",
    disponible: true,
  },
  {
    id: 10,
    titulo: "La abuela electronica",
    autor: "Silvia Schujer",
    anio: 2014,
    genero: "infantil",
    disponible: true,
  },
];
// 1.B Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener:

// id (número)
// nombre (string)
// email (string)
// librosPrestados (array de ids de libros).

// Cree un array de usuarios (objetos) con los atributos solicitados.

let usuarios = [
  {
    id: 1,
    usuario: "Antonela",
    email: "antodsc94@gmail.com",
    librosPrestados: [1, 2, 3],
  },
  {
    id: 2,
    usuario: "Mauro",
    email: "mauro.123@gmail.com",
    librosPrestados: [3, 4],
  },
  {
    id: 3,
    usuario: "Antonio",
    email: "antonio@gmail.com",
    librosPrestados: [5],
  },
  {
    id: 4,
    usuario: "Daniel",
    email: "dani.1567@gmail.com",
    librosPrestados: [6, 7],
  },
  {
    id: 5,
    usuario: "Fernando",
    email: "fercho@gmail.com",
    librosPrestados: [8, 9, 10],
  },
];

// 2.A Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
//  Realice una funcion en la que paso por parametros todos los atributos de libro y despues lo agrego al array de libros.
function agregarLibro(id, titulo, autor, anio, genero) {
  let libro = { id, titulo, autor, anio, genero };
  libros.push(libro);
}

// 2.B Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
// Realice una funcion para buscar tipos de libros en funcion de un criterio solicitado (título, autor, genero)
function buscarLibro(criterio, valor) {
  for (let index = 0; index < libros.length; index++) {
    const libro = libros[index]; // aca se crea la constante libro
    if (libro[criterio] == valor) {
      return libro;
    }
  }
}
// 2.C Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.
function ordenarLibros(criterio) {
  for (let i = 0; i <= libros.length; i++) {
    for (let j = 0; j <= libros.length; i++) {
      if (libros[j][criterio] > libros[j + 1][criterio]) {
        [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
      }
    }
  }
  console.log(libros);
}
// 2.D Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.
function borrarLibro(id) {
  const index = libros.findIndex((libro) => libro.id === id);
  if (index !== -1) {
    libros.splice(index, 1);
  }
}
// 3.A Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
function registrarUsuario(nombre, email) {
  const id = usuarios.length + 1;
  usuarios.push({ id, nombre, email, librosPrestados: [] });
}

// 3.B Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
function mostrarTodosLosUsuarios() {
  return usuarios;
}

// 3.C Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
function buscarUsuario(email) {
  return usuarios.find((usuario) => usuario.email === email);
}
// 3.D Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.
function borrarUsuario(email) {
  const index = usuarios.findIndex((usuario) => usuario.email === email);
  if (index !== -1) {
    usuarios.splice(index, 1);
  }
}
// 4.A Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
function prestarLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (libro && usuario && libro.disponible) {
        libro.disponible = false;
        usuario.librosPrestados.push(idLibro);
    }
}

// 4.B Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.
function devolverLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);

    if (libro && usuario) {
        libro.disponible = true;
        usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);
    }
}

// 5.A Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
// Cantidad total de libros.
// Cantidad de libros prestados.
// Cantidad de libros por género.
// Libro más antiguo y más nuevo
function generarReporteLibros() {
    const totalLibros = libros.length;
    const librosPrestados = libros.filter(libro => !libro.disponible).length;
    const librosPorGenero = libros.reduce((acc, libro) => {
        acc[libro.genero] = (acc[libro.genero] || 0) + 1;
        return acc;
    }, {});
    const libroMasAntiguo = libros.reduce((antiguo, libro) => (libro.año < antiguo.año ? libro : antiguo));
    const libroMasNuevo = libros.reduce((nuevo, libro) => (libro.año > nuevo.año ? libro : nuevo));

    return { totalLibros, librosPrestados, librosPorGenero, libroMasAntiguo, libroMasNuevo };
}
// 6.A Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra (no títulos que contengan números ni otros caracteres). La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola.
function librosConPalabrasEnTitulo() {
    let librosConPalabras =libros
    .filter(libro => /^[a-zA-Z\s]+$/.test(libro.titulo) && libro.titulo.trim().split(/\s+/).length > 1)
    .map(libro => libro.titulo);
    console.log("Libros con más de una palabra en el título:");
    librosConPalabras.forEach( titulo => console.log(titulo));
    return librosConPalabras;
}
// 7.A Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
// Promedio de años de publicación de los libros.
// Año de publicación más frecuente.
// Diferencia en años entre el libro más antiguo y el más nuevo.
function calcularEstadisticas() {
    const anios = libros.map(libro => libro.anio);
    const promedio = anios.reduce((a, b) => a + b, 0) / anios.length;
    const anioMasFrecuente = anios.sort((a, b) =>
        anios.filter(anio => anio === a).length - anios.filter(anio => anio === b).length
    ).pop();
    const diferenciaAnios = Math.max(...anios) - Math.min(...anios);
    return { promedio, anioMasFrecuente, diferenciaAnios };
}
// 8.A Crear una función normalizarDatos() que utilice métodos de strings para:
// Convertir todos los títulos a mayúsculas.
// Eliminar espacios en blanco al inicio y final de los nombres de autores.
// Formatear los emails de los usuarios a minúsculas.
function normalizarDatos() {
    libros.forEach(libro => {
        libro.titulo = libro.titulo.toUpperCase();
        libro.autor = libro.autor.trim();
    });

    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase();
    });
}
// 9.A Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
// El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.
function menuPrincipal() {
    let opcion; 
    do {
        opcion = prompt(`
            Sistema de Gestión de Biblioteca
            1. Agregar Libro
            2. Buscar Libro
            3. Ordenar Libros
            4. Borrar Libro
            5. Registrar Usuario
            6. Mostrar Usuarios
            7. Buscar Usuario
            8. Borrar Usuario
            9. Prestar Libro
            10. Devolver Libro
            11. Generar Reporte
            12. Estadísticas
            13. Salir
        `);

        switch (parseInt(opcion)) {
            case 1:
                const id = parseInt(prompt("ID del libro:"));
                const titulo = prompt("Título del libro:");
                const autor = prompt("Autor:");
                const año = parseInt(prompt("Año de publicación:"));
                const genero = prompt("Género:");
                agregarLibro(id, titulo, autor, año, genero);
                break;
            case 2:
                const criterio = prompt("Buscar por (titulo/autor/genero):");
                const valor = prompt("Valor de búsqueda:");
                console.log(buscarLibro(criterio, valor));
                break;
            case 3:
                const criterioOrden = prompt("Ordenar por (titulo/año):");
                ordenarLibros(criterioOrden);
                break;
            case 4:
                const idBorrar = parseInt(prompt("ID del libro a borrar:"));
                borrarLibro(idBorrar);
                break;
            case 5:
                const nombreUsuario = prompt("Nombre del usuario:");
                const emailUsuario = prompt("Email del usuario:");
                registrarUsuario(nombreUsuario, emailUsuario);
                break;
            case 6:
                console.log(mostrarTodosLosUsuarios());
                break;
            case 7:
                const emailBusqueda = prompt("Email del usuario a buscar:");
                console.log(buscarUsuario(emailBusqueda));
                break;
            case 8:
                const emailBorrar = prompt("Email del usuario a borrar:");
                borrarUsuario(emailBorrar);
                break;
            case 9:
                const idLibroPrestamo = parseInt(prompt("ID del libro:"));
                const idUsuarioPrestamo = parseInt(prompt("ID del usuario:"));
                prestarLibro(idLibroPrestamo, idUsuarioPrestamo);
                break;
            case 10:
                const idLibroDevolucion = parseInt(prompt("ID del libro:"));
                const idUsuarioDevolucion = parseInt(prompt("ID del usuario:"));
                devolverLibro(idLibroDevolucion, idUsuarioDevolucion);
                break;
            case 11:
                console.log(generarReporteLibros());
                break;
            case 12:
                console.log(calcularEstadisticas());
                break;
            case 13:
                alert("Salir del menú");
                break;
            default:
                alert("Opción no válida");
        }
    } while (opcion !== "13");
}
// 10.A Se tomará como último punto a evaluar la correcta utilización de comentarios explicando paso por paso su código.
// Cada objeto representa un libro con propiedades: id, título, autor, año, género y disponibilidad

// 10.B Deberán seleccionar el código punto por punto y con una explicación corta y simple de que hicieron en cada punto.
// Ejemplo: 
//Punto 1:
// a). Consigna
// código y comentarios de lo que crean necesario explicar




