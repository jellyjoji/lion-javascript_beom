
/* 

[readystate]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/


/* callback --------------------------------------------- */

function xhr(method,url,onSuccess,onFail){
  const xhr = new XMLHttpRequest();

  xhr.open(method,url)
  xhr.addEventListener('readystatechange',()=>{
    const {status,readyState,response} = xhr;
    if(status >= 200 && status < 400){
      
      if(readyState === 4){
        onSuccess(JSON.parse(response))
      }
    }else{
      onFail('실패')
    }
  })
  
  xhr.send();
}


xhr(
  'GET',
  'https://jsonplaceholder.typicode.com/user',
  (result)=>{
    console.log( result );
  },
  (err)=>{
    console.log( err );
  }
)


// 유저랜더링(data)











