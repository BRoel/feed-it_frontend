export function fetchPosts(){
    return (dispatch)
    fetch('http://localhost:3000/api/v1/posts')
    .then(response => response.json())
    .then(data => console.log(data))
}