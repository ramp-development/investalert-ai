import { simulateEvent } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(() => {
  const accordionHeader = document.querySelector('.faqs_group-header');
  simulateEvent(accordionHeader, 'click');
});
