// let addFun = () => {
//     let textaras = document.getElementById("write_comment").value;
//     let p = document.getElementById("text_comment");
//     let post = document.getElementById("post_comment");

//     p.innerHTML = textaras;

// }
// post_comment.addEventListener("click",addFun);



post_comment.addEventListener("click", function(){
    let p = document.getElementById("text_comment");
    let textFun = document.getElementById("write_comment").value;
    let posts = document.getElementById("post_comment");
    p.innerHTML = textFun;
});

