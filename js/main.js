const grades=['a','b','c','d','e','e','f'];
console.log('hi');

for(const [index,grade] of grades.entries()){
    console.log(`index is ${index} grade is ${grade}`);
}