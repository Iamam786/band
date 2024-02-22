
// Slider carousel

let myIndex = 0;

function carousel() {
    let i;
    let box = document.getElementsByClassName('box')
    for (let i = 0; i < box.length; i++) {
        box[i].style.display = "none";


    }
    myIndex++;
    if (myIndex > box.length) {
        myIndex = 1;
    }
    box[myIndex - 1].style.display = 'block'
    setTimeout(carousel, 4000);
    addEventListener

}
carousel();

let dropdown = document.getElementsByClassName('dropdown');

document.querySelector('ul li.eventlistner').addEventListener('mouseover', function() {
   for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].style.display = 'block';
   }
})

document.querySelector('ul li.eventlistner').addEventListener('mouseout', function() {
   for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].style.display = 'none';
   }
})

