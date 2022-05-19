const anim = anime.timeline({
  loop: false,
  direction: 'alternate',
});

anim
  .add({
    targets: '.hexpath1',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuart',
    duration: 2000,
    delay: function(el, i) { return i * 250 },
  })
  .add({
    targets: '.hexagon #B',
    duration: 500,
    opacity: 1,
    easing: 'easeInOutQuart',
  });

var buttonEl = document.querySelector('.hexagon ');

var buttonAnimation = anime({
  targets: buttonEl,
  scale: 1.2,
  duration: 800,
  autoplay: false
});

function enterButton() {
  if (buttonAnimation.reversed) buttonAnimation.reverse();
  console.log(buttonAnimation);
  buttonAnimation.play();

  const anim = anime.timeline({
  loop: false,
  direction: 'normal'
});

anim
  .add({
    targets: '.hexpath',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuart',
    duration: 2000,
    delay: function(el, i) { return i * 150 },
  })
}

function leaveButton() {
  if (!buttonAnimation.reversed) buttonAnimation.reverse();
  buttonAnimation.play();
}


buttonEl.addEventListener('mouseenter', enterButton, false);
buttonEl.addEventListener('mouseleave', leaveButton, false);


