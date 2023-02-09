import { simulateEvent } from '@finsweet/ts-utils';

export const verification = (userID) => {
  const form = document.querySelector('form[data-form="verification"]');
  const id = form.querySelector('input[data-form="id"]');

  id.value = userID;
  form.requestSubmit();

  const modal3 = document.querySelector('[fs-modal-element="open-3"]');
  setTimeout(() => {
    simulateEvent(modal3, 'click');

    const url = new URL(window.location);
    url.searchParams.delete('id');
    window.history.pushState({}, '', url);
  }, 500);
};
