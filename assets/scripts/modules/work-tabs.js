
const workSliderSelect = document.querySelector('[data-work-slider-select]')
const workSliderSelectTabs = workSliderSelect.querySelectorAll('[data-tab-select-tab]')

// FLIP function to flip gallery images between scenes
const flipTabs = (firstEl, lastEl) => {
  // First/Last -- Get info on elements to be flipped
  const firstRect = firstEl.getBoundingClientRect()
  const lastRect = lastEl.getBoundingClientRect()

  // Invert - Calculate changes between the two states
  const deltaX = firstRect.left - lastRect.left
  const deltaY = firstRect.top - lastRect.top
  const deltaW = firstRect.width / lastRect.width
  const deltaH = firstRect.height / lastRect.height

  // Add a data attribute to facilitate styling
  lastEl.dataset.flipping = true

  // Play - Play the animation
  const animation = lastEl.animate([
    {
      transform: `translateX(${deltaX}px) translateY(${deltaY}px) scaleX(${deltaW}) scaleY(${deltaH})`
    },
    {
      transform: 'none'
    }
  ], {
    duration: 800,
    easing: 'ease'
  })
  // Remove styling attribute after flip is completed
  animation.onfinish = () => {
    delete lastEl.dataset.flipping
  }
}

/**
 * Swap slider types on tab clicks
 */
workSliderSelectTabs.forEach(tab => {
  tab.addEventListener('click', function () {
    const groupIndex = this.getAttribute('data-group-index')
    const activeTab = document.querySelector('.c-tab-select__tab[data-active]')
    const activeGroup = document.querySelector('.m-work__group[data-active]')
    const targetGroup = document.querySelector(`.m-work__group[data-group-index='${groupIndex}']`)

    /**
     * Update active tab
     */
    delete activeTab.dataset.active
    this.dataset.active = 'true'
    flipTabs(activeTab.querySelector('[data-decoration]'), this.querySelector('[data-decoration]'))

    /**
      * Update active slider
      */
    delete activeGroup.dataset.active
    activeGroup.setAttribute('aria-hidden', 'true')
    targetGroup.dataset.active = 'true'
    targetGroup.setAttribute('aria-hidden', 'false')
  })
})
