import { simulateEvent } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(() => {
  const MODAL_BUTTONS = [...document.querySelectorAll('[data-modal-trigger]')];
  MODAL_BUTTONS.forEach((BUTTON) => {
    BUTTON.addEventListener('click', () => {
      const TRIGGER = document.querySelector(`#${BUTTON.getAttribute('data-modal-trigger')}`);
      console.log(TRIGGER);
      simulateEvent(TRIGGER, 'click');
    });
  });
});
