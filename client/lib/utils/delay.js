import { getNode } from "../dom/getNode.js";


function delay(callback,timeout=1000){
  setTimeout(callback,timeout);
}


const first = getNode('.first');
const second = getNode('.second');



// delay(()=>{
//   console.log(1);
//   first.style.top = '-100px';
//   delay(()=>{
//     console.log(2);
//     first.style.transform = 'rotate(360deg)';
//     delay(()=>{
//       console.log(3);
//       first.style.top = '0';
//       second.style.top = '0';
//     })
//     second.style.top = '100px';
//     console.log('b');
//   })
// })


// delayP 함수를 실행하면 리턴되는 값이 promise 객체입니다.

//  객체 합성 mixin 

const defaultOptions = {
  shouldReject:false,
  timeout:1000,
  data:'성공!',
  errorMessage:'알 수 없는 오류가 발생했습니다.'
}

function delayP(options){
  
  let config = {...defaultOptions}

  if(typeof options === 'number'){
    config.timeout = options;
  }
  
  if(typeof options === 'object'){
    config = {...defaultOptions,...options}
  }

  const {shouldReject,data,errorMessage,timeout}  = config;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if(!shouldReject){
        resolve(data)
      }else{
        reject({message:errorMessage});
      }  
    }, timeout);
  })
}



delayP({shouldReject:false})
.then((res)=>{
  // console.log( res );
})
.catch(({message})=>{
  alert(message)
})
.finally(()=>{
  // console.log('어쨋든 실행합니다.');
})



// console.log(2);
// console.log(3);









































