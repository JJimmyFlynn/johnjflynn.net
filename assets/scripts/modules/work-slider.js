import flickity from 'flickity';

document.addEventListener('DOMContentLoaded', () => {
  const workSlider = document.querySelectorAll('[data-slider]');
  const workSliderSelect = document.querySelector('[data-work-slider-select]');
  const workSliderSelectTabs = workSliderSelect.querySelectorAll('[data-tab-select-tab]');

  /**
   * Exit if no slider is present
   */
  if(!workSlider) {
    return;
  }

  /**
   * Initialize slider for each portfolio category
   */
  workSlider.forEach(slider => {
    new flickity( slider, {
      pageDots: true,
      prevNextButtons: false,
      draggable: false
    } );
  });

  /**
   * Swap slider types on tab clicks
   */
  workSliderSelectTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const sliderIndex = this.getAttribute('data-slider-index');
      const activeTab = document.querySelector('.c-tab-select__tab--active');
      const activeSlider = document.querySelector('.m-work__slider--active');
      const targetSlider = document.querySelector(`.m-work__slider[data-slide-index='${sliderIndex}']`);

      /**
       * Update active tab
       */
      activeTab.classList.remove('c-tab-select__tab--active');
      this.classList.add('c-tab-select__tab--active');

       /**
        * Update active slider
        */
      activeSlider.classList.remove('m-work__slider--active');
      targetSlider.classList.add('m-work__slider--active');
    });
  });

});
