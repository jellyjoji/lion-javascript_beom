

import { insertLast, tiger } from './lib/index.js';





// 1. tiger 함수를 사용해서 user를 가져와 주세요.
// 2. 함수 안으로 넣기
// 3. 유저 데이터 랜더링 
//      - html template을 만든다. 
//      - 유저 data를 넘겨주기.
//      - inserLast 사용하기.

async function renderUserList(){
  const response = await tiger.get('https://jsonplaceholder.typicode.com/users')

  const userData = response.data;

  
  userData.forEach((item)=>{
    console.log( item );
      const template = `
      <article class="user-card" data-index="user-1">
        <h3 class="user-name">kindtiger</h3>
        <div class="user-resouce-info">
          <div>
            <a class="user-email" href="mailto:tiger@euid.dev">tiger@euid.dev</a>
          </div>
          <div>
            <a class="user-website" href="http://tiger.com" target="_blank" rel="noopener noreferer">tiger.com</a>
          </div>
        </div>
        <button class="delete">삭제</button>
      </article>
    `

    insertLast('.user-card-inner',template)
  })



}





renderUserList()











