
function likePost(img) {
  img.style.transform = "scale(1.1)";
  setTimeout(() => {
    img.style.transform = "scale(1)";
  }, 200);
  alert("💖 You liked this post!");
}
