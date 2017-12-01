const superHeroes = [
  { name: 'Spider Man', age: 18 },
  { name: 'Tony Stark', age: 49 },
  { name: 'Thor Odinson', age: 5000 }
]

export default () =>
  new Promise((resolve, reject) => {
    setTimeout(() =>
      resolve(superHeroes),
    3000)
  })