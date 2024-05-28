const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (event) {
    // event.pageX --> across(left and right);
    // event.pageY --> up and down
    moveCursor(event.pageX, event.pageY);
});

const moveCursor = function(pageX, pageY){
    cursor.style.left = pageX + 'px'
    cursor.style.top = pageY + 'px'
}