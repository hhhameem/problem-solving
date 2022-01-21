const sortByEven = (a) => {
  let even = [];
  let odd = [];
  let sortedByEven = [];
  
  a.forEach(item => {
    (item.age) % 2 === 0 ? even.push(item) : odd.push(item)
  })
  
  even.sort((x, y) => x.age - y.age);
  odd.sort((x, y) => x.age - y.age);
  // odd.sort((m, n) => m.age - n.age);
  sortedByEven = even.concat(odd);
  return sortedByEven;
}



const vaxTrail = (arr) => {
  let a = [];
  let b = [];
  let c = [];
  let d = [];
  
  arr.forEach(item => {
    if(item.temperature >= 100){
      d.push(item)
    }
    else if(item.age>=20 && item.age<=30 && item.temperature <100){
      a.push(item)
    }
    else if(item.age>=31 && item.age<=40 && item.temperature <100){
      b.push(item)
    }
    else if(item.age>=41 && item.age<=50 && item.temperature <100){
      c.push(item)
    }
    
  })
  
  
  const A = sortByEven(a);
  const B = sortByEven(b);
  const C = sortByEven(c);
  const D = sortByEven(d);
  
  return {
    A, B, C, D 
  }
}



console.log(vaxTrail([
{ name: 'sunil', age: 21, temperature: 98 },
{ name: 'Biplap', age: 22, temperature: 98 },
{ name: 'sl', age: 37, temperature: 90 },
{ name: 'xap', age: 31, temperature: 90 },
{ name: 'xapEven', age: 36, temperature: 90 },
{ name: 'ASHFDl Even', age: 42, temperature: 98 },
{ name: 'ASHFDl', age: 41, temperature: 98 },
{ name: 'RTJY', age: 51, temperature: 100 },
{ name: 'RTJY Even', age: 50, temperature: 108 },
]));
