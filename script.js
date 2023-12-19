window.addEventListener('load', getElements);

function getElements() {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = [
    '#60d394',
    '#d36060',
    '#c060d3',
    '#d3d160',
    '#606bd3',
    '#60c2d3'
  ];

  for (let i = 0; i < pads.length; i += 1) {
    pads[i].addEventListener('click', playSound(i));
  }

  function playSound(index) {
    return function () {
      if (sounds[index].loop) {
        sounds[index].loop = false;
        sounds[index].stop();
      } else {
        sounds[index].currentTime = 0;
        sounds[index].loop = true;
        sounds[index].play();
      }
      createBubble(index);
    }
  }

  function createBubble(index) {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener('animationend', function () {
      visual.removeChild(bubble);
    })
  }
}

