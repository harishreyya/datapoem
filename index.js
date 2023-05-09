

let commentContainer = document.getElementById("comment-container");
let timeStamp;

function createInputBox() {
  let div = document.createElement("div");
  div.setAttribute("class", "input-wrapper-container main-comment-reply");

  div.innerHTML += `
  <div class="input-wrapper">
  <div class="d-flex input-box-wrap">
  <input class="reply-input" type="text" placeholder="Add your comment..."/>
</div>
<br>
<div class="d-flex reply-dp-wrap">
  <img src="./images/avatars/image-juliusomo.webp" alt=""/>
  <button class="reply-btn d-flex submit" >REPLY</button>
</div>
</div>
`;

  return div;
}

function createsendInputBox() {
  let div = document.createElement("div");
  div.setAttribute("class", "input-wrapper-container");

  div.innerHTML += `
  <div class="input-wrapper">
  <div class="d-flex input-box-wrap">
  <input class="reply-input" type="text" placeholder="Add your comment..."/>
</div>
<br>
<div class="d-flex reply-dp-wrap">
  <img src="./images/avatars/image-juliusomo.webp" alt=""/>
  <button class="reply-btn d-flex send">SEND</button>
</div>
</div>
`;

  return div;
}

function addReply(text) {
  let div = document.createElement("div");
  div.setAttribute("class", "all-comment");

  div.innerHTML += `
  <div class="comment-bar main-comment-reply">
  <div class="d-flex comment-dp-name">
   <img src="./images/avatars/image-juliusomo.png" alt=""/>
   <h4>juliusomo</h4>
   <p class="you">YOU</p>
   <p class="grey">${timeStamp}</p>
  </div>
  <p class="grey">${text}</p>
  <div class="d-flex reply-vote-wrap">
  <div class="d-flex vote-bar">
    <img class="plus" src="./images/icon-plus.svg" alt="">
    <p class="votes">0</p>
    <img class="minus" src="./images/icon-minus.svg" alt="">
  </div>
  <div class="d-flex">
  <div class="d-flex edit-wrap">
    <img src="./images/icon-delete.svg" alt=""/>
    <p class="delete">Delete</p>
  </div>
  <div class="d-flex delete-wrap">
  <img src="./images/icon-edit.svg" alt=""/>
  <p class="edit">Edit</p>
</div>
</div>
  </div>
</div>`;

  return div;
}

function addReplyComment(text) {
  let div = document.createElement("div");
  div.setAttribute("class", "all-comment");

  div.innerHTML += `
  <div class="comment-bar">
  <div class="d-flex comment-dp-name">
   <img src="./images/avatars/image-juliusomo.png" alt=""/>
   <h4>juliusomo</h4>
   <p class="grey">${timeStamp}</p>
  </div>
  <p class="grey">${text}</p>
  <div class="d-flex reply-vote-wrap">
  <div class="d-flex vote-bar">
    <img class="plus" src="./images/icon-plus.svg" alt="">
    <p class="votes">0</p>
    <img class="minus" src="./images/icon-minus.svg" alt="">
  </div>
  <div class="d-flex">
  <div class="d-flex edit-wrap">
    <img src="./images/icon-delete.svg" alt=""/>
    <p class="delete">Delete</p>
  </div>
  <div class="d-flex delete-wrap">
  <img src="./images/icon-edit.svg" alt=""/>
  <p class="edit-comment">Edit</p>
</div>
</div>
  </div>
</div>`;

  return div;
}



commentContainer.addEventListener("click", function (e) {
  let replyClicked = e.target.classList.contains("reply");
  let submitClicked = e.target.classList.contains("submit");
  let closestCard = e.target.closest(".all-comment");
  let commentParent = e.target.closest(".comment-bar");
  let editClicked = e.target.classList.contains("edit");
  let deleteClicked = e.target.classList.contains("delete");
  let sendClicked = e.target.classList.contains("send");
  let editComment = e.target.classList.contains("edit-comment");
  let undo = document.getElementById('undo');
  
  if (replyClicked) {
    closestCard.appendChild(createInputBox());
  }

  if (submitClicked) {
    const commentDetails = e.target.closest(".input-wrapper");
    if (commentDetails.children[0].children[0].value) {
      const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      const date = new Date();
      let day = weekday[date.getDay()];
      let mins;
      if(date.getMinutes().length==1){
        mins = "0" + date.getMinutes();
      }else{
        mins = date.getMinutes()
      }
      timeStamp = day+"-"+date.getHours()+":"+mins+" ["+date.getDate()+":"+ (date.getMonth() + 1) +":"+date.getFullYear()+"]"
      closestCard.appendChild(addReply(commentDetails.children[0].children[0].value));
      commentDetails.remove();
    }
  }

  if(editClicked){
    const card = e.target.closest(".comment-bar");
    card.remove()
    closestCard.appendChild(createInputBox());
  }
   if(editComment){
    const card = e.target.closest(".comment-bar");
    card.remove()
    closestCard.appendChild(createsendInputBox());
    closestCard.remove()
   }

  if(deleteClicked){
   commentParent.classList.add("d-none");
    commentParent.remove()
  }

  if(undo){
    commentParent.classList.remove("d-none");
  }

 

  if(sendClicked){
    const commentDetails = e.target.closest(".input-wrapper");
    if (commentDetails.children[0].children[0].value) {
      const date = new Date();
      timeStamp = date.getHours()+":"+date.getMinutes()+"h-"+date.getDate()+":"+ (date.getMonth() + 1) +":"+date.getFullYear()
      closestCard.appendChild(addReplyComment(commentDetails.children[0].children[0].value));
      commentDetails.remove();
      closestCard.appendChild(createsendInputBox());
    }
  }
});


// ---------------------------------------------------------------------

// porfolio- https://harishreyya.github.io/Harish-Porfolio/
// github-https://github.com/harishreyya
// medium-https://medium.com/@harishrebel0
