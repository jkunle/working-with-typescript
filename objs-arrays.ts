// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Olakunle',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };
// let favoriteActivites: string[];
// favoriteActivites = ['Sports'];
// console.log(person.name);

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Olakunle',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

for(const hobby of person.hobbies) {
  console.log(hobby);
}

//person.role[1] = 10;
console.log(person);

if (person.role == Role.ADMIN) {
  console.log('is admin');
}