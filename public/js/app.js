//document.getElementById("mainContainer").innerHTML = "";
const getMain = document.getElementById("mainContainer");

const finance = "https://www.reddit.com/r/personalfinance.json";

const metal = "https://www.reddit.com/r/natureismetal.json";

const randomReddit = ["https://www.reddit.com/r/Hawaii.json", "https://www.reddit.com/r/nba.json", "https://www.reddit.com/r/movies/.json", "https://www.reddit.com/r/OldSchoolCool.json"];

let chooseRandom = randomReddit[Math.floor(Math.random() * randomReddit.length)];
let random = document.createElement("a");
random.href = "#";
random.className = "button";
random.id = "random";
random.innerHTML = "RANDOM"
document.getElementById("topNav").appendChild(random);
random.addEventListener("click", function(){
getReddit(chooseRandom);
})

let myBoards = document.createElement("a");
myBoards.href = "#";
myBoards.innerHTML = "MY BOARDS";
myBoards.className = "button";
myBoards.id = "boards";
document.getElementById("topNav").appendChild(myBoards);
myBoards.addEventListener("click", function () {
  getReddit(finance);
})

let getApp = document.createElement("a");
getApp.href = "#";
getApp.innerHTML = "GET THE APP";
getApp.className = "button";
getApp.id = "app"
document.getElementById("topNav").appendChild(getApp);
getApp.addEventListener("click", function () {
  getReddit(metal);
})

function getReddit(url) {
  let nReq = new XMLHttpRequest();
  nReq.addEventListener("load", function () {
    let data = JSON.parse(this.responseText);
    fillIn(data, getMain);
  })
  nReq.open("GET", url);
  nReq.send();
}

function fillIn(redditInfo, parentElem) {
  let redditTitles = redditInfo.data.children;
  let collection = document.createElement("div");
  collection.id = "collectionId";

  //console.log(redditTitles.data.children);

  redditTitles.forEach(function (element) {
    // let tile = document.createElement("div");
    // tile.className = "tilez";
    let tile = document.createElement("div");
    tile.className = "tilez";
    //console.log(element.data.created_utc);

    //const previewPic = element.data.preview;
    let postPic = document.createElement("img");
    postPic.className = "awwPic";
    // postPic.setAttribute("src", element.data.preview.images[0].source.url);
    postPic.setAttribute("src", element.data.url);

    postPic.onerror = function () {
      postPic.src = "http://lorempixel.com/350/210/";
    };
    tile.appendChild(postPic);

    // if (previewPic && previewPic.images[0]) {
    //  if (previewPic.images[0].source.url.height = "16px") {
    // postPic.setAttribute("src", "https://www.blog.google/static/blog/images/google-200x200.7714256da16f.png");
    // postPic.setAttribute("src", element.data.url);

    // postPic.className = "awwPic";
    // tile.appendChild(postPic);
    // } else {
    // postPic.setAttribute("src", element.data.preview.images[0].source.url);


    // }       getMain.appendChild(postTitle)


    let postTitle = document.createElement("div");
    postTitle.className = "awwPost";
    postTitle.innerHTML = element.data.title;
    tile.appendChild(postTitle);
    //console.log(titles.data.children[0].data)

    let postAuthor = document.createElement("div");
    postAuthor.className = "awwAuthor";
    postAuthor.innerHTML = "by " + element.data.author + "  • created " + moment.unix(element.data.created_utc).format('M-DD-YY') + " • Score " + element.data.score;
    tile.appendChild(postAuthor);

    // let postDate = document.createElement("div");
    // postDate.className = "awwDate";
    // postDate.innerHTML = "Created on " + moment.unix(element.data.created_utc).format('M-DD-YY');
    // tile.appendChild(postDate);

    // let postScore = document.createElement("div");
    // postScore.className = "awwScore";
    // postScore.innerHTML = " • Score " + element.data.score;
    // tile.appendChild(postScore);

    let postText = document.createElement("div");
    postText.className = "awwText";
    if (element.data.selftext !== "") {
      postText.innerHTML = element.data.selftext;
    } else {
      postText.innerHTML = "This post has no text. Enjoy the picture!"
    }
    tile.appendChild(postText);
    collection.appendChild(tile);

  })
  parentElem.innerHTML = "";
  parentElem.appendChild(collection);
  // parentElem.innerHTML = collection.innerHTML;
}

getReddit("https://www.reddit.com/r/aww/.json");

// getMain.appendChild(postTitle)

//   const previewPic = element.data.preview;
//   if (previewPic && previewPic.images[0]) {
//     if (previewPic.images[0].source.url.height = "16px") {
//       // postPic.setAttribute("src", "https://www.blog.google/static/blog/images/google-200x200.7714256da16f.png");
//       // postPic.setAttribute("src", element.data.url);
//       postPic.setAttribute("src", element.data.preview.images[0].source.url);
//       // postPic.className = "awwPic";
//       postTitle.appendChild(postPic);
//     } else {
//       // postPic.setAttribute("src", element.data.preview.images[0].source.url);
//       postPic.setAttribute("src", "https://www.blog.google/static/blog/images/google-200x200.7714256da16f.png");
//       // postPic.className = "awwPic";
//       postTitle.appendChild(postPic);

//   }       getMain.appendChild(postTitle)


// }
