//https://javascript.info/mouse-drag-and-drop
let currentDroppable = null;
const target = document.querySelector('.droppable');

document.addEventListener('mousedown', (e) => {
let draggableElem = e.target.closest('.draggable');

if (!draggableElem) return;

e.preventDefault();

draggableElem.ondragstart = function (e) {
return false;
};

let shiftX = e.clientX - draggableElem.getBoundingClientRect().left;
let shiftY = e.clientY - draggableElem.getBoundingClientRect().top;
let rightEdge =
document.documentElement.clientWidth - draggableElem.offsetWidth;
let bottomEdge =
document.documentElement.clientHeight - draggableElem.offsetHeight;

function moveAt(pageX, pageY) {
let newLeft = pageX - shiftX;
let newTop = pageY - shiftY;

if (newLeft < 0) {
newLeft = 0;
}
if (newLeft > rightEdge) {
newLeft = rightEdge;
}
if (newTop < 0) {
newTop = 0;
}
if (newTop > bottomEdge) {
newTop = bottomEdge;
}
draggableElem.style.left = newLeft + 'px';
draggableElem.style.top = newTop + 'px';
}

moveAt(e.pageX, e.pageY);

function onMouseMove(e) {
moveAt(e.pageX, e.pageY);

draggableElem.hidden = true;
let elemBelow = document.elementFromPoint(e.clientX, e.clientY);

draggableElem.hidden = false;

if (!elemBelow) return;

let droppableBelow = elemBelow.closest('.droppable');

if (currentDroppable != droppableBelow) {
if (currentDroppable) {
leaveTarget(currentDroppable);
}

currentDroppable = droppableBelow;

if (currentDroppable) {
enterTarget(currentDroppable);
}
}
}

function onMouseUp(e) {
document.removeEventListener('mousemove', onMouseMove);
draggableElem.onmouseup = null;
}

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);

function enterTarget(elem) {
elem.style.backgroundColor = 'pink';
}

function leaveTarget(elem) {
elem.style.backgroundColor = '';
}
});
