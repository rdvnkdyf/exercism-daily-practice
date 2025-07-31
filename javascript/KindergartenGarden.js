const DEFAULT_STUDENTS = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Fred",
  "Ginny",
  "Harriet",
  "Ileana",
  "Joseph",
  "Kincaid",
  "Larry",
];
const PLANT_CODES = {
  G: "grass",
  V: "violets",
  R: "radishes",
  C: "clover",
};
export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    this.rows = diagram.split("\n");
    this.students = students.sort();
  }
  plants(student) {
    const studentIndex = this.students.indexOf(student);
    const studentPlantCodes = this.rows.map(
      (x) => x[studentIndex * 2] + x[studentIndex * 2 + 1]
    ).map((x) => x.split("")).flat();
   return studentPlantCodes.map(x => PLANT_CODES[x]);
  }
}
