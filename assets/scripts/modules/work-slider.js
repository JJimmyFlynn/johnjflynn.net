import Flickity from 'flickity'

const workSlider = document.querySelectorAll('[data-slider]')
const workSliderSelect = document.querySelector('[data-work-slider-select]')
const workSliderSelectTabs = workSliderSelect.querySelectorAll('[data-tab-select-tab]')

/**
 * Initialize slider for each portfolio category
 */
workSlider.forEach(slider => {
  // eslint-disable-next-line
  new Flickity(slider, {
    pageDots: true,
    prevNextButtons: false,
    draggable: false
  })
})

/**
 * Swap slider types on tab clicks
 */
workSliderSelectTabs.forEach(tab => {
  tab.addEventListener('click', function () {
    const sliderIndex = this.getAttribute('data-slider-index')
    const activeTab = document.querySelector('.c-tab-select__tab--active')
    const activeSlider = document.querySelector('.m-work__slider--active')
    const targetSlider = document.querySelector(`.m-work__slider[data-slide-index='${sliderIndex}']`)

    /**
     * Update active tab
     */
    activeTab.classList.remove('c-tab-select__tab--active')
    this.classList.add('c-tab-select__tab--active')

    /**
      * Update active slider
      */
    activeSlider.classList.remove('m-work__slider--active')
    activeSlider.setAttribute('aria-hidden', 'true')
    targetSlider.classList.add('m-work__slider--active')
    targetSlider.setAttribute('aria-hidden', 'false')
  })
})
