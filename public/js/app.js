//document.getElementById("mainContainer").innerHTML = "";
const getMain = document.getElementById("mainContainer");

const finance = "https://www.reddit.com/r/personalfinance.json";

const metal = "https://www.reddit.com/r/natureismetal.json";



let random = document.createElement("a");
random.href = "#";
random.innerHTML = "Random"
document.getElementById("topNav").appendChild(random);
// random.addEventListener("click", function(){
//   getReddit("https://www.reddit.com/r/aww/.json");
// })

let myBoards = document.createElement("a");
myBoards.href = "#";
myBoards.innerHTML = "My Boards";
document.getElementById("topNav").appendChild(myBoards);
myBoards.addEventListener("click", function () {
  getReddit(finance);
})

let getApp = document.createElement("a");
getApp.href = "#";
getApp.innerHTML = "Get the App"
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
    console.log(element.data.created_utc);

    //const previewPic = element.data.preview;
    let postPic = document.createElement("img");
    postPic.className = "awwPic";
    // postPic.setAttribute("src", element.data.preview.images[0].source.url);
    postPic.setAttribute("src", element.data.url);

    postPic.onerror = function () {
      postPic.src = "http://placekitten.com/400/250";
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
    postAuthor.innerHTML = "by " + element.data.author + " created " + moment.unix(element.data.created_utc).format('M-DD-YY');
    tile.appendChild(postAuthor);

    // let postDate = document.createElement("div");
    // postDate.className = "awwDate";
    // postDate.innerHTML = "Created on " + moment.unix(element.data.created_utc).format('M-DD-YY');
    // tile.appendChild(postDate);

    let postScore = document.createElement("div");
    postScore.className = "awwScore";
    postScore.innerHTML = "Score " + element.data.score;
    tile.appendChild(postScore);

    let postText = document.createElement("div");
    postText.className = "awwText";
    if (element.data.selftext !== "") {
      postText.innerHTML = element.data.selftext
    } else {
      postText.innerHTML = "No inner text."
    }
    tile.appendChild(postText);
    collection.appendChild(tile);
  })
  parentElem.innerHTML = "";
  parentElem.appendChild(collection);
  // parentElem.innerHTML = collection.innerHTML;
}

getReddit("https://www.reddit.com/r/aww/.json");
// getReddit("https://www.reddit.com/r/personalfinance.json")




// let postDate = document.createElement("div");
// postDate.className = "awwDate";
//  postDate.innerHTML = moment.unix(element.data.create).format('MM/DD/YYYY');
//  postDate.appendChild(postScore);


// let postPic = document.createElement("img");
// postPic.className = "awwPic";

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


// document.getElementById("mainContainer").innerHTML = fillIn();


// else{
//   postPic.setAttribute("src", "https://www.blog.google/static/blog/images/google-200x200.7714256da16f.png");
//   // postPic.setAttribute("src", element.data.url);
//   postPic.className = "awwPic";
//   postTitle.appendChild(postPic);

//   postTitle.appendChild(postPic);
//   postPic.className = "awwPic";
//   postTitle.appendChild(postPic);
// if (element.data.preview.images[0].source){
//   postPic.setAttribute("src", element.data.preview.images[0].source.url);
//   postPic.className = "awwPic";
//   postTitle.appendChild(postPic);
// }else {
//   postPic.setAttribute("src", "https://www.pexels.com/photo/man-wearing-gray-crew-neck-shirt-holding-basketball-804121/");
//   postPic.className = "awwPic";
//   postTitle.appendChild(postPic);





// postPic.setAttribute("src", element.data.thumbnail)
// postPic.className = "awwPic";
// // postTitle.appendChild(postPic);
// let postComments = document.createElement("div");
// postComments.className = "awwComments";
// postComments.innerHTML = element.data.num_comments + " comments";
// postTitle.appendChild(postComments);


// let awwReq = new XMLHttpRequest(); 
// awwReq.addEventListener("load", fillIn); 
// awwReq.open("GET", "https://www.reddit.com/r/aww.json"); 
// awwReq.send();



// let titles = JSON.parse(this.response);
//   let getMain = document.getElementById("mainContainer");
//   let postTitle = document.createElement("div");

//   postTitle.className = "nbaPost";
//   postTitle.innerHTML = titles.data.children[0].data.title
//   getMain.appendChild(postTitle);
//   console.log(titles.data.children[0].data)
//   let postAuthor = document.createElement("div");
//   postAuthor.className = "nbaAuthor";
//   postAuthor.innerHTML = titles.data.children[0].data.author;
//   postTitle.appendChild(postAuthor);
//   let postPic = document.createElement("img");
//   postPic.setAttribute("src", titles.data.children[0].data.thumbnail)
//   postPic.className = "nbaPic";
//   postTitle.appendChild(postPic);
//   let postComments = document.createElement("div");
//   postComments.className = "nbaComments";
//   postComments.innerHTML = titles.data.children[0].data.num_comments + " comments";
//   postTitle.appendChild(postComments)