import { setInterval } from "timers";

document.addEventListener('DOMContentLoaded', () => {
  const descriptorListItems = document.querySelectorAll('[data-descriptor-list-item]');
  const descriptorListLength = descriptorListItems.length;
  let descriptorIndex = 0;

  setInterval(() => {
    const currentDescriptorItem = document.querySelectorAll('.c-descriptor-list__item.is-visible');
    currentDescriptorItem[0].classList.remove('is-visible');
    descriptorListItems[descriptorIndex].classList.add('is-visible');

    // Reset if we are at the end of the descriptor items
    if (descriptorIndex >= descriptorListLength - 1) {
      descriptorIndex = 0;
    } else {
      descriptorIndex++;
    }

  }, 3000);
} );
