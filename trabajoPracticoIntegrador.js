const prompt = require('prompt-sync')()

//Punto 1 Estructura de datos
// Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades:
// id (número)
// título (string),
// autor (string),
// año (número),
// género (string),
// disponible (booleano).


// Creacion de un array de objetos con sus propiedades
let libros = [
    {
        id: 1,
        titulo: "Don quijote de la mancha",
        autor: "Miguel de cervantes",
        anio: 1605,
        genero: "Novela de aventura",
        disponible: true,
    },
    {
        id: 2,
        titulo: "Los miserables",
        autor: "Victor hugo",
        anio: 1862,
        genero: "Ficción historica",
        disponible: true,
    },
    {
        id: 3,
        titulo: "Cien años de soledad",
        autor: "Gabriel Garcia Marquez",
        anio: 1967,
        genero: "Realismo magico",
        disponible: true,
    },
    {
        id: 4,
        titulo: "1984",
        autor: "George Orwell",
        anio: 1949,
        genero: "Ciencia ficcion",
        disponible: true,
    },
    {
        id: 5,
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        anio: 1813,
        genero: "Romantica",
        disponible: true,
    },
    {
        id: 6,
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        anio: 1997,
        genero: "Fantasia",
        disponible: true,
    },
    {
        id: 7,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupery",
        anio: 1943,
        genero: "Novela filosofica",
        disponible: true,
    },
    {
        id: 8,
        titulo: "El señor de los anillos",
        autor: "J.R.R. Tolkien",
        anio: 1954,
        genero: "Fantasia heroica",
        disponible: true,
    },
    {
        id: 9,
        titulo: "Matar a un ruiseñor",
        autor: "Harper Lee",
        anio: 1960,
        genero: "Novela de aprendizaje",
        disponible: true,
    },
    {
        id: 10,
        titulo: "Hamlet",
        autor: "William Shakespeare",
        anio: 1603,
        genero: "Tragedia",
        disponible: true,
    },
]
// Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener: 
// id (número)
// nombre (string)
// email (string)
// librosPrestados (array de ids de libros).


// Creacion de un array de objetos con sus propiedades
let usuarios = [
    {
        id: 1,
        nombre: "Pepita Lapistolera", //aprobame
        email: "Pepitalapistolera@gmail.com",
        librosPrestados: [],
    },
    {
        id: 2,
        nombre: "Lucia Fernandez",
        email: "Luciafernandez@gmail.com",
        librosPrestados: [],
    },
    {
        id: 3,
        nombre: "Javier Gomez",
        email: "Javiergomez@gmail.com",
        librosPrestados: [],
    },
    {
        id: 4,
        nombre: "Alejandro Ruiz",
        email: "Alejandroruiz@gmail.com",
        librosPrestados: [],
    },
    {
        id: 5,
        nombre: "Valeria Torres",
        email: "Valeriatorres@gmail.com",
        librosPrestados: [],
    },
]
//Punto 2: Funciones de Gestión de Libros
// Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.

// Funcion que agrega libros al array mediante prompt


let agregarLibro = (cantidad) => {
    for (let i = 0; i < cantidad; i++) {
        id = libros.length + 1;
        titulo = prompt("Ingrese el titulo del libro: ");
        autor = prompt("Ingrese el nombre del autor: ")
        anio = parseInt(prompt("Ingrese el año del libro: "))
        genero = prompt("Ingrese el genero del libro: ")
    
        
        if (!titulo || !autor || isNaN(anio) || anio <= 0 || !genero) {
            console.log("Datos invalidos, ingreselos nuevamente");
            }
        let nuevoLibro = {
            id: id,
            titulo: titulo,
            autor: autor,
            anio: anio,
            genero: genero,
            disponible: true
        }
        libros.push(nuevoLibro)
        console.log("Libro agregado", nuevoLibro);
    }
}


let buscarLibro = () => {
    let criterio = prompt("Ingrese el criterio de la busqueda entre: titulo, autor o genero: ").toLowerCase();
    let valorBusqueda = prompt(`ingrese el ${criterio} del libro que desea buscar: `).toLowerCase();

    let resultados = [];
    
    for (let i=0; i < libros.length; i++) {
        let coincide = false;

        switch (criterio) {
            case "titulo":
                coincide = libros[i].titulo.toLowerCase().includes(valorBusqueda);
                break;
            case "autor":
                coincide = libros[i].autor.toLowerCase().includes(valorBusqueda);
                break;
            case "genero":
                coincide = libros[i].genero.toLowerCase().includes(valorBusqueda);
                break;
            }
            if (coincide) {
                resultados.push(libros[i]);
        }
    }
    if (resultados.length > 0 ) {
        console.log("Libros encontrados: ", resultados);
    }
}
// Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.

// No termine de entender mucho como funciona esto, me ayude con la IA para poder completarlo asi que no sabria como explicarlo bien
let ordenarLibros = (criterio) => {
    let n = libros.length;
    for (let i = 0; i < n -1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
        if (criterio === "titulo") {
            if (libros[j][criterio].toLowerCase() > libros[j + 1][criterio].toLowerCase()) {
                [libros[j], libros[j + 1]] =[libros[j + 1 ], libros [j]]
            }
        } else if (criterio === "anio") {
            if (libros[j][criterio] > libros [ j + 1][criterio]) {
                [libros[j], libros[j + 1]] = [libros[j + 1 ], libros[j]]
            }
        }
    }
}
    return libros;
}

// Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.

// Utilizo findIndex para buscar el libro en el array y si lo encuentra lo borra con el metodo splice. caso contrario no hace nada
let borrarLibro = (id) => {
    let i = libros.findIndex(libro => libro.id === id);
    if (i !== -1) {
        libros.splice(i, 1);
    }
}


//Punto 3: Gestión de Usuarios
//  Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.

// Funcion flecha para crear un usuario por medio de prompt y agregarlo al array usuarios por medio de push (en menu princial)
let registrarUsuario = (nombre, email) => {
    let nuevoUsuario = {
        id: usuarios.length + 1,
        nombre: nombre,
        email: email,
        librosPrestados: []
    };
    usuarios.push(nuevoUsuario)
}
// Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios

// Funcion que imprime el array usuarios
let mostrarUsuarios = () => {
    return usuarios;
}

// Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

// Funcion que busca la propiedad email dentro del array usuarios con el metodo find y convierte el email a lowerCase para encontrar coincidencias
let buscarUsuario = (email) => {
    return usuarios.find(usuario => usuario.email.toLowerCase() === email.toLowerCase());
}

// Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

// Utilizo findIndex para buscar el usuario en el array por medio del nombre y el email y lo convierto a lowerCase para encontrar coincidencias.
//  si no las encuentra no hace nada
let borrarUsuario = (nombre, email) => {
    let i = usuarios.findIndex(usuario => 
        usuario.nombre.toLowerCase() === nombre.toLowerCase() &&
    usuario.email.toLowerCase() === email.toLowerCase()
);
    if (i !== -1) {
        usuarios.splice(i, 1);
        console.log("Usuario borrado correctamente");
    } else {
        console.log("Usuario no encontrado");
        
    }
}

// Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista 
// de libros prestados del usuario.

// funcion flecha que busca el libro por su id dentro del array libros 
// busca al usuario por su id dentro del array usuarios, si el libro esta disponible lo envia a los libros prestados del usuario
// y volviendo false su estado de disponible. si no esta disponible devuelve un console log
let prestarLibro = (idLibro, idUsuario) => {
    let libro = libros.find(libro => libro.id === idLibro);
    let usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (libro && libro.disponible && usuario) {
        libro.disponible = false;
        usuario.librosPrestados.push(libro);
    } else {
        console.log("El libro no esta disponible");
        
    }
}

// Implementar una función devolverLibro(idLibro, idUsuario) 
// que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.

// Busca un usuario y un libro por su id, si estos coinciden devuelve el libro, sino devuelve -1
// vuelve a poner el libro en la lista de disponibles y borra el libro del usuario.
let devolverLibro= (idLibro, idUsuario) => {
    let usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (usuario) {
        let indiceLibro = usuario.librosPrestados.findIndex(libro => libro.id === idLibro);
        if (indiceLibro !== -1) {
            let libro = usuario.librosPrestados[indiceLibro];
            libro.disponible = true;
            usuario.librosPrestados.splice(indiceLibro, 1);
        } else {
            console.log("El libro no esta en la lista de libros prestados");
            }
    }
}
// Punto 5: Sistema de Préstamos
// Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) 
// para generar un reporte con la siguiente información:

let generarReporteLibros = () => {
    let totalLibros = libros.length; //cuenta libros
    let librosPrestados = libros.filter(libro => !libro.disponible).length; //cuenta la cantidad de libros que no estan disponibles
    let librosPorGenero = libros.reduce((acum, libro) => {  //metodo reduce que separa los libros por genero y les suma 1 por cada genero
        acum[libro.genero] = (acum[libro.genero] || 0) + 1; //que coincide
        return acum;
    }, {});
    let libroMasAntiguo = libros.reduce((antiguo, libro) => { //funcion que busca el año en el array libros y compara su cual es el mas viejo
        return (antiguo.anio < libro.anio) ? antiguo : libro; //con un if ternario
        });
        let libroMasNuevo = libros.reduce((nuevo, libro) => { //lo mismo pero el mas nuevo
            return (nuevo.anio > libro.anio) ? nuevo : libro;
        });
    return { //devuelve un objeto con los resultados
        totalLibros: totalLibros,
        librosPrestados: librosPrestados,
        librosPorGenero: librosPorGenero,
        libroMasAntiguo: libroMasAntiguo,
        libroMasNuevo: libroMasNuevo,
    };
}

// Punto 6: Identificación Avanzada de libros
// Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra 
// (no títulos que contengan números ni otros caracteres). La función debe devolver un array con los títulos de esos libros y mostrarlo 
// en la consola.



let palabrasEnTitulo = () => {
    return libros.filter(libro => {
        let palabras = libro.titulo.split(" ");
        return palabras.length > 1;
    }).map(libro => libro.titulo);
};


// Punto 7: Cálculos Estadísticos
// Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
// Promedio de años de publicación de los libros.
// Año de publicación más frecuente.
// Diferencia en años entre el libro más antiguo y el más nuevo.

let calcularEstadisticas = () =>{
    let totalAnios = libros.reduce((sum, libro) => sum + libro.anio, 0); // suma todos los años de los libros arrancando desde 0
    let promedioAnios= totalAnios / libros.length; // toma el total sumado anteriormente y lo divide por la cantidad de libros
    let frecuencias = libros.reduce((acum, libro) =>{ 
        acum[libro.anio] = (acum[libro.anio] || 0) + 1;//variable que separa a los libros por año y los acumula en cada año,
        return acum;                                        //si no encuentra un dato previo lo establece en 0 y le suma 1
    }, {});
    let anioMasFrecuente = Object.keys(frecuencias).reduce((a, b) => frecuencias[a] > frecuencias [b] ? a : b);
    let anios = libros.map(libro =>libro.anio);
    let anioMasAntiguo = Math.min(...anios);
    let anioMasNuevo = Math.max(...anios);
    let diferenciaAnios= anioMasNuevo -anioMasAntiguo;
    return {
        promedioAnios: promedioAnios,
        anioMasFrecuente: anioMasFrecuente,
        diferenciaAnios: diferenciaAnios,
    };
}

// Punto 8: Manejo de Cadenas
// Crear una función normalizarDatos() que utilice métodos de strings para:
// Convertir todos los títulos a mayúsculas.
// Eliminar espacios en blanco al inicio y final de los nombres de autores.
// Formatear los emails de los usuarios a minúsculas.

//modifica el array libros utilizando un operador de propagacion que copia las propiedades del objeto y las modifica por:
let normalizarDatos = () => {
    libros = libros.map(libro => ({...libro,titulo:libro.titulo.toUpperCase()})); //titulo en mayuscula
    libros = libros.map(libro => ({...libro,autor: libro.autor.trim()}));// autor sin espacios blancos adelante y al final
    usuarios = usuarios.map(usuario => ({...usuario, email: usuario.email.trim().toLowerCase()})); //email en minuscula
}
normalizarDatos();

let menuPrincipal = () => {
    let opcion;
    do {
        opcion = prompt(`Seleccione una opcion:
            1. Registrar usuario
            2. Mostrar todos los usuarios
            3. Buscar usuario por email
            4. Borrar usuario
            5. Agregar libro
            6. Borrar libro
            7. Ordenar libros por criterio
            8. Pedir libro prestado
            9.Devolver libro
            10. Generar reporte del libros
            11. Mostrar libros con titulos de mas de una palabra
            12. Calcular estadisticas
            13. Normalizar datos
            14. Buscar libro
            0. salir
            `);
            switch (opcion) {
                case "1": 
                let nombre = prompt("Ingrese el nombre del usuario: ");    // prompt para ingresar nombre
                let email = prompt("Ingrese el email del usuario: ");       //// prompt para ingresar mail
                registrarUsuario(nombre, email); //llamar a la funcion con sus parametros 
                console.log("El usuario se ha registrado correctamente"); // log que muestra mensaje
                break; //rompe el ciclo si el numero ingresado es 1
                case "2":
                console.log(mostrarUsuarios()); //llama a la funcion
                break;//rompe el ciclo si el numero ingresado es 2
                case "3":
                let busquedaEmail = prompt("Ingrese el email del usuario: ") // // prompt para ingresar email
                console.log(buscarUsuario(busquedaEmail)); //llamar a la funcion con su parametro
                break;//rompe el ciclo si el numero ingresado es 3
                case "4": 
                let borrarNombre = prompt("Ingrese el nombre del usuario que desea borrar: "); //prompt para ingresar nombre de usuario
                let borrarEmail = prompt("Ingrese el email del usuario que desea borrar: ") //prompt para ingresar mail de usuario
                borrarUsuario(borrarNombre,borrarEmail); // llamada a la funcion con sus parametros
                break;//rompe el ciclo si el numero ingresado es 4
                case "5":
                    let cantidadLibros = parseInt(prompt("Cuantos libros queres agregar?: "));
                    if (!isNaN(cantidadLibros) && cantidadLibros > 0) {
                        agregarLibro(cantidadLibros);
                    } else {
                        console.log("Numero invalido, prueba nuevamente");
                    } 
                break;//rompe el ciclo si el numero ingresado es 5
                case "6":
                let id = parseInt(prompt("Ingrese el ID del libro a borrar: ")); //prompt para agregar el id del libro a borrar
                borrarLibro(id); //llamada a la funcion con su parametro
                console.log("Libro borrado correctamente");//mensaje de borrado
                break;//rompe el ciclo si el numero ingresado es 6
                case "7":
                let criterio = prompt("Seleccione por (titulo, anio): "); //prompt para seleccionar opcion
                console.log("Libros ordenados: ", ordenarLibros(criterio)); // log con llamado a funcion
                break;//rompe el ciclo si el numero ingresado es 7
                case "8": 
                let idLibro = parseInt(prompt("Ingrese el ID del libro que desea: ")); //prompt para agregar id del libro
                let idUsuario = parseInt(prompt("Ingrese el ID del usuario: ")); // prompt para agregar id del usuario
                prestarLibro(idLibro, idUsuario); //llamado de la funcion
                break;//rompe el ciclo si el numero ingresado es 8
                case "9":
                let devolverLibroId = parseInt(prompt("Ingrese el ID del libro a devolver: "));//prompt para agregar id del libro a devolver
                let devolverUsuarioId = parseInt(prompt("Ingrese el ID del usuario: "));//prompt para ingresar el id del usuario
                devolverLibro(devolverLibroId, devolverUsuarioId);//llamado a la funcion
                break;//rompe el ciclo si el numero ingresado es 9
                case "10": 
                console.log("Reporte de libros generado", generarReporteLibros());//log llamando a la funcion
                break;//rompe el ciclo si el numero ingresado es 10
                case "11":
                console.log("Libros con titulos de mas de una palabra", palabrasEnTitulo());//log llamando a la funcion
                break;//rompe el ciclo si el numero ingresado es 11
                case "12":
                console.log("Estadisticas calculadas", calcularEstadisticas());// log llamando a la funcion
                break;//rompe el ciclo si el numero ingresado es 12
                case "13":
                console.log("Los datos se han normalizado correctamente", normalizarDatos());//log llamando a la funcion
                break;//rompe el ciclo si el numero ingresado es 13
                case "14":
                buscarLibro();
                break;
                case "0":
                console.log("Saliendo del sistema");//log salir del sistema
                break;//rompe el ciclo si el numero ingresado es 0
                default:
                console.log("Opcion invalida, intente de nuevo"); //default para toda opcion invalida ingresada
                break;//rompe el ciclo si ninguna opcion es valida
                
            }
    } while (opcion !== "0"); //bucle do while para que se ejecute hasta que la opcion 0 sea presionada
}

menuPrincipal(); //llamado a la funcion menu principal

