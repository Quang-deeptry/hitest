const person = [
  {
    id: 1,
    isActive: true,
  },
  {
    id: 2,
    isActive: true,
  },
  {
    id: 3,
    isActive: false,
  },
  {
    id: 4,
    isActive: false,
  },
];

const activePersion = person.filter((job) => job.isActive);

console.log(activePersion);
