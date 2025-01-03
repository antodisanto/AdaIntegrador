// 1.A Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades:
// id (número)
// título (string),
// autor (string),
// año (número),
// género (string),
// disponible (booleano).

// Acá creo un array de libros(objeto libro, con sus atributos)
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
// Realice una funcion para ordenar tipos de libro en funcion de un criterio solicitado (titulo o año) 
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
// Realice una funcion para eliminar libro en funcion de un criterio solicitado. Utilice constante index para acceder o localizar un elemento (libro)
function borrarLibro(id) {
  const index = libros.findIndex((libro) => libro.id === id);
  if (index !== -1) {
    libros.splice(index, 1);  // Utilice el método "splice" para eliminar elemento solicitado.
  }
}
// 3.A Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
// Realice una funcion para registrar usuario en funcion de un criterio solicitado (nombre, email) y despues lo agrego al array usuarios.
function registrarUsuario(nombre, email) {
  const id = usuarios.length + 1;
  usuarios.push({ id, nombre, email, librosPrestados: [] });
}

// 3.B Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
// Realice una funcion para mostrar todos los usuarios disponibles (array completo de ussuarios)
function mostrarTodosLosUsuarios() {
  return usuarios;
}

// 3.C Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
// Realice una funcion para buscar usuario en funcion de un criterio solicitado (email) y luego que me brinde informacion de tal usuario
function buscarUsuario(email) {
  return usuarios.find((usuario) => usuario.email === email);
}
// 3.D Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.
// Realice una funcion para borrar usuario seleccionado en funcion de un criterio solicitado (nombre, email) 
function borrarUsuario(email) {
  const index = usuarios.findIndex((usuario) => usuario.email === email);
  if (index !== -1) {
    usuarios.splice(index, 1);
  }
}
// 4.A Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
// Realice una funcion para prestar libro en funcion a un criterio solicitado (idlibro, idusuario) y luego que me brinde información sobre libros no disponibles y la lita de libros prestados.
function prestarLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (libro && usuario && libro.disponible) {
        libro.disponible = false;
        usuario.librosPrestados.push(idLibro);
    }
}

// 4.B Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.
// Realice una funcion para devolver libro en funcion a un criterio solicitado (idlibro, idusuario) , para que luego marque un libro disponible (true) y elimine de la lista el libro prestado al usuario.
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
// Realice una funcion para generar reporte de libros en funcion a un criterio solicitado (métos avanzados de arrays) y despues generar un reporte donde se visualice la cantidad de libros (total, prestados, por género, mas antiguo y mas nuevo)
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
// Realice una funcion teniendo en cuenta los libros que poseen palabras en el titulo en funcion a un criterio solicitado (titulos de libros que contenga mas de una palabra), para luego devolver un array con los tirulos de dichos libros y mostralos en consola
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

// Realice una funcion para calcular estadisticas en funcion a un criterio solicitado (promedio de años de publicacion de libros, año de publicacion mas frecuente, diferencia de años entre el libro mas antiguo y el mas nuevo)
function calcularEstadisticas() {
    let anios = libros.map(libro => libro.anio);
    let promedio = anios.reduce((a, b) => a + b, 0) / anios.length;
    let anioMasFrecuente = anios.sort((a, b) =>
        anios.filter(anio => anio === a).length - anios.filter(anio => anio === b).length
    ).pop();
    let diferenciaAnios = Math.max(...anios) - Math.min(...anios);
    return { promedio, anioMasFrecuente, diferenciaAnios };
}
// 8.A Crear una función normalizarDatos() que utilice métodos de strings para:
// Convertir todos los títulos a mayúsculas.
// Eliminar espacios en blanco al inicio y final de los nombres de autores.
// Formatear los emails de los usuarios a minúsculas.

// Realice una funcion para normalizar datos en funcion a un criterio solicitado (strings) 
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

// Realice una funcion de menu principal en funcion a un criterio solicitado (prompt) para mostrar un menu de opciones al usuario.
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

// Realizado en cada punto.

// 10.B Deberán seleccionar el código punto por punto y con una explicación corta y simple de que hicieron en cada punto.
// Ejemplo: 
//Punto 1:
// a). Consigna
// código y comentarios de lo que crean necesario explicar

// En este trabajo integrador se desarrolla un sistema para gestionar una biblioteca, donde se administren libros y usuarios.
// Punto 1 A: se crea un array de libros (objetos de libro con sus atributos, id, titulo del libro, auto, año, genero y su disponibilidad)
// Comence colocando la variable let (palabra reservada) y la palabra libros (que resulta significativa y engloba a lo que me quiero referir)
// Se declara una variable llamada libros utilizando la palabra clave "let". Esta variable almacenará una lista de objetos (que es una estructura de datos que permite agrupar múltiples valores. En este ejercicio observamos que cada valor es un objeto que representa un libro.)
// Punto 1 B: Se crea un array de usuarios (objetos) con los atributos solicitados. Cada usuario posee id (número), nombre (string) , email (string) y librosPrestados (array de ids de libros).
// Los corchetes indican que usuarios es un array. (Un array es una colección ordenada de elementos. En este ejercicio el array va a contener información sobre los usuarios. 
// Las llaves indican que dentro del array hay un objeto.
// Punto 2 A: Se realiza una funcion en la que paso por parámetros todos los atributos de libro y después lo agrego al array de libros.
// Podemos observar que la función "agregarLibro" tiene como objetivo principal añadir un nuevo libro a una colección existente.
// Se utiliza el método push del array libros para añadir el objeto libro recién creado al final del array. (El nuevo libro se agregará a la colección de libros existentes)
// Punto 2 B: Se realiza una funcion para buscar tipos de libros en funcion de un criterio solicitado (título, autor, genero), ademas se agrega la constante libro.
// La funcion creada llamada buscarLibro toma dos parámetros: criterio y valor.
// El criterio es una cadena de texto que indica la propiedad del libro por la cual se quiere buscar (por ejemplo, "titulo", "autor", "anio").
// El valor es lo específico que se quiere encontrar en la propiedad indicada por criterio.
// Punto 2 C: Se realiza una funcion para ordenar tipos de libro en función de un criterio solicitado (titulo o año)
// La funcion ordenarLibros tiene como objetivo ordenar un array de libros según un criterio específico. Utiliza algoritmo de ordenamiento por burbuja.
// Esta funcion ordenarLibros que toma un parámetro: criterio
// El criterio es una cadena de texto que indica la propiedad del libro por la cual se desea ordenar.
// Se observa un doble bucle (for)
// Se observa el (if) que es la condición que verifica si el valor de la propiedad indicada por criterio en el libro actual es mayor que el valor de la propiedad correspondiente en el siguiente libro. 
// Si es así, se intercambian los dos libros de posición.
// Punto 2 D: Se crea una funcion para eliminar libro en funcion de un criterio solicitado.
// Utilizo constante index para acceder o localizar un elemento (libro). 
// Utilizo el método "splice" para eliminar elemento solicitado.
// Se puede resumir en que la funcion borrarLibros realiza los siguientes pasos:
// Primero busca el libro con el id especificado en el array libros.
// Segundo si encuentra el libro, elimina ese elemento del array utilizando el método splice.
// Punto 3 A: A continuación, se realiza una funcion para registrar usuario en función de un criterio solicitado (nombre, email) y despues lo agrego al array usuarios.
// La función de registrarUsuario se utiliza para agregar un nuevo usuario a una lista de usuarios.
// Al agregar un nuevo usuario, se le asigna un ID único y se inicializa su lista de libros prestados.
// Punto 3 B: Realizo una funcion para mostrar todos los usuarios disponibles (array completo de ussuarios)
// Punto 3 C: Realizo una funcion para buscar usuario en funcion de un criterio solicitado (email) y luego que me brinde informacion de tal usuario.
// Punto 3 D: Realizo una funcion para borrar usuario seleccionado en funcion de un criterio solicitado (nombre, email)
// Punto 4 A: Realizo una funcion para prestar libro en funcion a un criterio solicitado (idlibro, idusuario) y luego que me brinde información sobre libros no disponibles y la lita de libros prestados.
// Punto 4 B: En este punto, realizo una funcion para devolver libro en funcion a un criterio solicitado (idlibro, idusuario) , para que luego marque un libro disponible (true) y elimine de la lista el libro prestado al usuario.
// Punto 5: Realizo una funcion para generar reporte de libros en funcion a un criterio solicitado (métos avanzados de arrays) y despues generar un reporte donde se visualice la cantidad de libros (total, prestados, por género, mas antiguo y mas nuevo)
// Punto 6: Realizo una funcion teniendo en cuenta los libros que poseen palabras en el titulo en funcion a un criterio solicitado (titulos de libros que contenga mas de una palabra), para luego devolver un array con los tirulos de dichos libros y mostralos en consola.
// Punto 7: En este punto, realizo una funcion para calcular estadisticas en funcion a un criterio solicitado (promedio de años de publicacion de libros, año de publicacion mas frecuente, diferencia de años entre el libro mas antiguo y el mas nuevo) utilizo la variable let.
// En esta función se proporciona una forma eficiente de calcular estadísticas básicas sobre los años de publicación de los libros en un arreglo.
// El método Math.max(...anios) máximo valor del arreglo anios, esto quiere decir, que encuentra el máximo valor (años mas recientes) utilizando la función max.
// El método Math.min(...anios) mínimo valor del arreglo anios, esto quiere decir, que encuentra el valor mínimo (años mas antiguos) utilizando la función min.
// La resta entre estos valores calcula la diferencia entre el año más reciente y el más antiguo en el array.
// return: La función devuelve un objeto que contiene las propiedades calculadas. 
// Punto 8: Realizo una funcion para normalizar datos en funcion a un criterio solicitado (strings) 
// En esta funcion se realiza las siguientes acciones principales:
// Se convierte todos los títulos de libros a mayúsculas, lo que podría ser útil para búsquedas que no sean sensibles a las mayúsculas y minúsculas.
// Además, elimina los espacios en blanco iniciales y finales de los nombres de autores, garantizando la coherencia en los datos.
// También, convierte todos los correos electrónicos de usuarios a minúsculas, lo que también podría ser útil para búsquedas que no distingan mayúsculas y minúsculas.
// Punto 9: Por último, realizo una funcion de menu principal en funcion a un criterio solicitado (prompt) para mostrar un menu de opciones al usuario.
// La funcion menuPrincipal responde a un menu interactivo que permite al usuario realizar diversas operaciones sobre una colección de libros y usuarios.
// Se utiliza prompt para que el usuario ingrese un número correspondiente a la opción deseada.
// El valor ingresado por el usuario se convierte a un número entero. La estructura switch case para ejecutar la acción correspondiente.
// Con respecto al caso "default" se ejecuta si el usuario ingresa una opción inválida.
// El do-while loop asegura que el menú se repita hasta que el usuario seleccione la opción de salir. (13)
// Entonces, podemos resumir que la función menuPrincipal proporciona una interfaz de usuario básica para interactuar con un sistema de gestión de biblioteca.
// Cada opción del menú dependerá de las características específicas que se deseen incluir en el sistema.
