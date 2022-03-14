const employees = [

    {

        name: 'Homer Jay Simpson',

        salary: 1200,

        age: 52,

        hoursWorked: 50,

        entryRegistered: '2022-02-21 8:50:21',

        homeOffice: false

    },

    {

        name: 'Carl Carlson',

        salary: 1450,

        age: 48,

        hoursWorked: 90,

        entryRegistered: '2022-02-21 8:20:10',

        homeOffice: false

    },

    {

        name: 'Lenford Lenny Leonard',

        salary: 1380,

        age: 52,

        hoursWorked: 120,

        entryRegistered: '2022-02-21 8:59:10',

        homeOffice: false

    },

    {

        name: 'Seymour Skinner',

        salary: 1290,

        age: 50,

        hoursWorked: 183,

        entryRegistered: '2022-02-21 6:59:20',

        homeOffice: false

    },

    {

        name: 'Ned Flanders',

        salary: 1800,

        age: 60,

        hoursWorked: 190,

        entryRegistered: '2022-02-21 7:48:20',

        homeOffice: true

    },

    {

        name: 'Barney Gómez',

        salary: 900,

        age: 49,

        hoursWorked: 20,

        entryRegistered: '2022-02-21 10:48:20',

        homeOffice: true

    },

    {

        name: 'Moe Szyslak',

        salary: 1320,

        age: 39,

        hoursWorked: 95,

        entryRegistered: '2022-02-21 8:05:35',

        homeOffice: true

    },

];
// Ejercicio #1

// var mayor = 0;

// for (let index = 0; index < employees.length; index++) {

//     const element = employees[index].hoursWorked;

//     if(element > mayor){

//         mayor = element

//     }

   

// }
// console.log('el mayor es:',mayor)
// ------------------------------------------
// Ejercicio #3
// console.log(employees.sort((a,b) => b.salary - a.salary))
// ------------------------------------------
// Ejercicio #5
const employeesLater = employees.filter( (element) => element.homeOffice);

console.log('Los que trabajan en casa --> ', employeesLater);