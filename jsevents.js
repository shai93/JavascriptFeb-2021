// events action

function changeName() {
  //logic

  document.getElementById("nametext").innerHTML = "Sachin";
}

function changeImage(img) {
  if (img.src == "https://tinyurl.com/4c3zfs5y") {
    //check if image is white
    img.src = "https://tinyurl.com/3mtjjty4"; //make it yellow
  } else {
    img.src = "https://tinyurl.com/4c3zfs5y"; //make it white
  }
}
