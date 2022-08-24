// let stu1 = {
//   name: "Orxan",
//   surnamne: "Akbarov",
//   age: 27,
//   phoneNumbers: [0516523252, 0993123252],
//   groups: [
//     {
//       name: "P130",
//       room: "sirius",
//       teachers: [
//         {
//           name: "Cavid",
//           age: 28,
//         },
//         {
//           name: "Rovshan",
//           age: 22,
//         },
//       ],
//     },

//     {
//       name: "DL210",
//       room: "Pluton",
//       teachers: ["Cavid", "Gulnar"],
//     },
//   ],
// };

// let teacherFullData = () => {
//   for (const item of stu1.groups) {
//     if (item.name == "P130") {
//       for (const teacher of item.teachers) {
//         if (teacher.name == "Cavid") {
//           return `${teacher.name} - ${teacher.age}`;
//         }
//       }
//     }
//   }
// };

// let setGroupTeacher = (groupName) =>{
//     let teacherData= teacherFullData();
//     return `${teacherData} ${groupName}`
// }

// let group = "P130"
// console.log(setGroupTeacher(group));

// for (const item of stu1.groups) {
//     if (item.room == "sirius") {
//         console.log(item.name);
//     }

// }

// for (const item of stu1.groups) {
//     if (item.name == "P130") {
//         console.log(item.teachers);
//     }

// }

// for (const item of stu1.phoneNumbers) {
//     if (item == 0516523252) {
//         console.log(stu1.name);
//     }
// }

// let stu2 = {
//     name: "Emil",
//     surnamne: "Abdullayev",
//     age: 21
// }

// let isExist = stu1.phoneNumbers.includes(0516523252)

// if (isExist) {
//     console.log("var");
// }else{
//     console.log("yoxdur");
// }

// let stu3 = {
//     name: "Narmin",
//     surnamne: "Mammadova",
//     age: 28
// }

//  let students = [stu1,stu2,stu3];

// for (const item of students) {
//     console.log(item.name);
//     //console.log(item["name"]);
// }

// let stu1 = {
//     id: 0,
//     name: "Orxan",
//     surname: "Akbar"
// }

// let stu2 = {
//     id: 1,
//     name: "Emil",
//     surname: "Abdulla"
// }

// let stu3 = {
//     id: 2,
//     name: "Fidan",
//     surname: "Mardan"
// }

// let stu4 = {
//     id: 3,
//     name: "Nara",
//     surname: "Mammad"
// }

// let group = {
//     name:"P130",
//     capacity: 5,
//     students: [],
//     addStudent: function(stu){

//         // find method alternative
//         // let student = this.students.filter(m=>m.id == stu.id)
//         // if (student.length != 0) {
//         //     console.log("Artiq telebe var");
//         //     return;
//         // }

//         let student = this.students.find(m=>m.id == stu.id)

//         if (student != undefined) {
//             console.log("Artiq telebe var");
//             return;
//         }
//         if(this.students.length != this.capacity){
//             this.students.push(stu);
//             return;
//         }
//         console.log("Qrupda bosh yer yoxdur");
//     }
// }

// group.addStudent(stu1);
// group.addStudent(stu2);
// group.addStudent(stu3);
// group.addStudent(stu4);
// group.addStudent(stu4);

// let group = {
//     name:"P130",
//     capacity: 5,
//     students: [],
//     addStudent: function(stu){
//         if(this.students.length != this.capacity){
//             this.students.push(stu);
//             return;
//         }
//         console.log("Qrupda bosh yer yoxdur");
//     }
// }

// group.addStudent("Orxan");
// group.addStudent("Togrul");
// group.addStudent("Seid");
// group.addStudent("Emil");
// group.addStudent("Fidan");
// group.addStudent("Narmin");

//console.log(group.students);

// function Book(name,author) {
//     this.name = name;
//     this.author = author;

//     function getFullData() {
//         console.log(name + "-" + author);
//     }

// }

// let book = new Book("Xosrov", "Nizami")

// Book.prototype.pageCount = 55;

// Book.prototype.getAuthor  = function () {
//     console.log(author);
// }

// console.log(book);

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;

//     }

//     getFullName(){
//         console.log(this.name + " " + this.surname);
//     }
// }

// class Employee extends Person {

// }

// let employee = new Employee("Orxan","Akbar")
// employee.getFullName();
// console.log(employee.surname);

// String qebul eden bir function yaziriq. Hemin function yeni bir array qaytaracaq, hemin arrayin elementleri functiona gelen stringin sozlerinin herflerinin cemine beraber olmalidir.
