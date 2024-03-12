//DEPENENCIES
const userNameInput = document.querySelector('#username')
const titleInput = document.querySelector('#title')
const contentInput = document.querySelector('#content')
const submit = document.querySelector('#submit')




//DATA
let blogPosts = []
console.log(blogPosts);




//FUNCTIONS
submit.addEventListener('click', function (event) {
    event.preventDefault();

    blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    if (blogPosts === null) {
        alert('All fields are required.');
    }
})

const newBlogPost = {
    username: userNameInput.value,
    title: titleInput.value,
    content: contentInput.value
};

blogPosts.push(newBlogPost);
console.log(newBlogPost);
localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
window.location.href = 'blog.html'
//USER INTERACTIONS


//INITIALATION