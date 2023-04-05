
// MODAL SECTIONAS

// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     modalImg.alt = this.alt;
//     captionText.innerHTML = this.alt;
// }


// // When the user clicks on <span> (x), close the modal
// modal.onclick = function() {
//     img01.className += " out";
//     setTimeout(function() {
//        modal.style.display = "none";
//        img01.className = "modal-content";
//      }, 400);
    
//  }



// IMAGE SLIDER SECTION

const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const imageContainer = document.querySelector('.image-container');
const myWork = document.querySelectorAll('.image-container img');
let activeButton;

let counter = 0;
const size = window.innerWidth < 640? 300 : 540;


imageContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

rightButton.addEventListener('click', () => {
    console.log(size);
    if (counter >= myWork.length - 1) return;
    imageContainer.style.transition = "transform 0.5s ease-in-out";
    counter++;
    imageContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    leftButton.disabled = false;
    if (counter === myWork.length - 1) {
        rightButton.disabled = true;
    }
  });
  
  leftButton.addEventListener('click', () => {
    if (counter <= 0) return;
    imageContainer.style.transition = "transform 0.5s ease-in-out";
    counter--;
    imageContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    rightButton.disabled = false;
    if (counter === 0) {
      leftButton.disabled = true;
    }
  });