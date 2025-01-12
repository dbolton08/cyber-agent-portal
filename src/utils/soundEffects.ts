const sounds = {
  hover: new Audio('/hover.mp3'),
  click: new Audio('/click.mp3'),
  startup: new Audio('/startup.mp3'),
};

export const playSound = (type: keyof typeof sounds) => {
  sounds[type].currentTime = 0;
  sounds[type].volume = 0.2;
  sounds[type].play().catch(() => {
    // Ignore autoplay errors
  });
};