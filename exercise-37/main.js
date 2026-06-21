function addPost(){

const title = document.querySelector("#title")
const image = document.querySelector("#image")
const content = document.querySelector("#content")

if(title === "" || content === ""){
alert("wax soo geli inta");
return;
}

posts.push({
title:title,
image:image,
content:content
});

localStorage.setItem("posts",JSON.stringify(posts));

showPosts();

document.getElementById("title").value = "";
document.getElementById("image").value = "";
document.getElementById("content").value = "";

}

const posts = JSON.parse(localStorage.getItem("posts")) || [];

showPosts();

function showPosts(){

const postList = document.getElementById("postList");

postList.innerHTML = "";

for(let i = 0; i < posts.length; i++){

postList.innerHTML += `
<div class="post">
<h3>${posts[i].title}</h3>
<img src="${posts[i].image}" width="100%">
<p>${posts[i].content}</p>
<button onclick="editPost(${i})">Edit</button>
<button onclick="deletePost(${i})">Delete</button>
</div>
`;

}

}

function deletePost(index){

posts.splice(index,1);

localStorage.setItem("posts",JSON.stringify(posts));

showPosts();

}

function editPost(index){

const newTitle = prompt("Edit Title",posts[index].title);
const newImage = prompt("Edit Image URL",posts[index].image);
const newContent = prompt("Edit Content",posts[index].content);

if(newTitle !== null){
posts[index].title = newTitle;
}

if(newImage !== null){
posts[index].image = newImage;
}

if(newContent !== null){
posts[index].content = newContent;
}

localStorage.setItem("posts",JSON.stringify(posts));

showPosts();

}