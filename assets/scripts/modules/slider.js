import Flickity from 'flickity';

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('[data-slider]');

  console.log(slider);

  /**
   * Exit if no slider is present
   */
  if(!slider) {
    return;
  }

  new Flickity(slider, {
    prevNextButtons: false
  });
});
