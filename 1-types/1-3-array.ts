{
  // Array
  const fruits: string[] = ['π', 'π'];
  const scores: Array<number> = [1, 3, 4]; // βοΈ readonly μμ± μ¬μ© λΆκ°
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student; // Object Desctructuring (better)
}
