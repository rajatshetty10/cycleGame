let bike = document.getElementById('bike');
let tree = document.getElementById('tree');

window.addEventListener('keypress', () => {
  if (bike.classList != 'animate') {
    bike.classList.add('animate');
    setTimeout(function () {
      bike.classList.remove('animate');
    }, 500);
  }
});

setInterval(() => {
  let bikeWidth = parseInt(
    window.getComputedStyle(bike).getPropertyValue('width')
  );

  let bikeBottom = parseInt(
    window.getComputedStyle(bike).getPropertyValue('bottom')
  );

  let treeLeft = parseInt(
    window.getComputedStyle(tree).getPropertyValue('left')
  );

  let treeRight = parseInt(
    window.getComputedStyle(tree).getPropertyValue('right')
  );
  console.log('Tree Right: ' + treeRight);
  console.log('Tree Left: ' + treeLeft);

  let treeHeight = parseInt(
    window.getComputedStyle(tree).getPropertyValue('height')
  );

  if (treeLeft - 20 <= bikeWidth && bikeBottom <= treeHeight - 10) {
    alert('You Lose');
    location.reload();
  }
}, 10);
