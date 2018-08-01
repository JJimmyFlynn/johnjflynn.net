import Flickity from 'flickity';

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelectorAll('[data-slider]');

  /**
   * Exit if no slider is present
   */
  if(!slider) {
    return;
  }

  slider.forEach(element => {
    new Flickity(element, {
      prevNextButtons: false
    });
  });
});
