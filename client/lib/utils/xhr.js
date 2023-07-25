/* 

[readystate]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/

/* callback --------------------------------------------- */

// 객체 구조 분해 할당 

function xhr(options) {

  // console.log( options );
  // method, url, onSuccess, onFail, body, headers



  const { 
    method = 'GET', 
    url = '', 
    onSuccess = null, 
    onFail = null, 
    body = null, 
    headers =   {
    'Content-Type':'application.json',
    'Access-Control-Allow-Origin':'*'
    } 
  } = options;



  // const {
  //   method = 'GET', 
  //   url = '', 
  //   onSuccess = null, 
  //   onFail = null, 
  //   body = null, 
  //   headers = {
  //     'Content-Type':'application.json',
  //     'Access-Control-Allow-Origin':'*'
  //   }
  // } = options;
  
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value);
  })

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
  });

  xhr.send(JSON.stringify(body));

}


// method, url, onSuccess, onFail, body, headers
xhr({
  url:'https://jsonplaceholder.typicode.com/users',
  onSuccess:()=>{},
  onFail:()=>{},
  body:{
    name:'tiger'
  },
  
});









// 유저랜더링(data)
