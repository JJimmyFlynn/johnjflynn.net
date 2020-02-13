/**
 * JS that controls the ticker of descriptive terms in the site header
 */

import { setInterval } from "timers";

  const descriptorListItems = document.querySelectorAll('[data-descriptor-list-item]');
  const descriptorListLength = descriptorListItems.length;
  let descriptorIndex = 1; // Start at the 2nd array index

  /**
   * Swap the displayed term every 4 seconds
   */
  setInterval(() => {

    const currentDescriptorItem = document.querySelectorAll('.c-descriptor-list__item.is-visible');

    currentDescriptorItem[0].classList.remove('is-visible', 'fade-in-left');
    currentDescriptorItem[0].classList.add('fade-out-right');

    descriptorListItems[descriptorIndex].classList.remove('fade-out-right');
    descriptorListItems[descriptorIndex].classList.add('is-visible', 'fade-in-left');

    // Reset if we are at the end of the descriptor items
    if (descriptorIndex >= descriptorListLength - 1) {
      descriptorIndex = 0;
    } else {
      descriptorIndex++;
    }

  }, 4000);
