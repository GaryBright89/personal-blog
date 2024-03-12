//DEPENENCIES
const userNameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submit = document.querySelector("#submit");

let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

submit.addEventListener("click", function (event) {
  event.preventDefault();

  const newBlogPost = {
    username: userNameInput.value,
    title: titleInput.value,
    content: contentInput.value,
  };

  if (!newBlogPost.username || !newBlogPost.title || !newBlogPost.content) {
    alert("All fields are required.");
    return;
  }

  blogPosts.push(newBlogPost);
  localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

  window.location.href = "blog.html";
});
//USER INTERACTIONS

//INITIALATION
