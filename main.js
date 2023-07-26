

console.log('main.js connected')

const handleFormInputFocus = () => {
    console.log(`focus occurred`)

}


document.getElementById("myForm").addEventListener("submit", myFunction);

function myFunction() {
  alert("The form was submitted");
}

/*document.getElementById("btn").addEventListener("delete", myFunction);
function myFunction() {
    alert("Comment Deleted")
}*/

document.getElementById('button').addEventListener('click', myFunction2);
function myFunction2() {
    alert("Post Deleted")
};