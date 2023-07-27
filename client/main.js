

// fetch 는 왜 쓰는 건가요?

import { insertLast, tiger } from './lib/index.js';

const URL = 'https://jsonplaceholder.typicode.com/users/1';



const response = await fetch(URL);
const data = await response.json();

console.log( data );

// fetch(URL).then((result)=>{

//     result // response object
//     return result.json()
// })
// .then((result)=>{
//   console.log( result );
// })







