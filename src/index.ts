import { verification } from './auth';
import { utils } from './utils';

window.Webflow ||= [];
window.Webflow.push(() => {
  /**
   * sanitize the forms across the site
   */
  const forms = [...document.querySelectorAll('form')];
  forms.forEach((form) => {
    form.dataset.name = form.dataset.form;

    const inputs = [...form.querySelectorAll('input')];
    inputs.forEach((input) => {
      const name = input.dataset.form;
      input.dataset.name = name;
    });
  });

  /**
   * get the url parameters and run the verification if necessary
   */
  const URLParams = new URLSearchParams(window.location.search);
  const userID = URLParams.get('id');

  if (userID) {
    verification(userID);
  }

  utils();

  // const accordionHeader = document.querySelector('.faqs_group-header');
  // simulateEvent(accordionHeader, 'click');
});
