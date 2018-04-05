// export default function hello() {
//   console.log('Hello from JS Module');
// }

function hello() {
  console.log('Bonjour JS Module');
}

function quoiDe9() {
  console.log('Quoi de neuf...');
}

const inc = (x)=>x+3;

//function capLettre(str) {
//  return str.replace(/(^|\s)[a-z]/g, x => x.toUpperCase());
//}

//function pur
const capLettre = (str) => str.replace(/(^|\s)[a-z]/, x => x.toUpperCase());


export {hello, quoiDe9, inc, capLettre};
