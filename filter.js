/* 
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

*/
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
//ciclo del primer salon
for (let horario1 of student1Courses) {
    //ciclo del segundo salon
    for (let horario2 of student2Courses) {
        //revisando igualdades en los cursos
        if (horario1 === horario2) {
            //imprimiendo cursos en comun
            console.log(horario1); //
        }
    }
}
