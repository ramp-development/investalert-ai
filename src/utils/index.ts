export const utils = () => {
  const siteLang = 'american';
  const toLang = navigator.language === 'en-GB' ? 'english' : 'american';
  const library = [
    {
      american: 'democratize',
      english: 'democratise',
    },
    {
      american: 'maximize',
      english: 'maximise',
    },
    {
      american: 'minimize',
      english: 'minimise',
    },
    {
      american: 'Optimized',
      english: 'Optimised',
    },
    {
      american: 'minimization',
      english: 'minimisation',
    },
  ];

  /**
   * democratise democratize
   * maximise maximize
   * minimise minimize
   * Optimised Optimized
   * minimisation minimization
   */

  const textNodes = textNodesUnder(document.body);
  textNodes.forEach((node) => {
    library.forEach((item) => {
      const regExp = new RegExp(item[siteLang], 'g');
      node.textContent = node.textContent.replace(regExp, item[toLang]);
    });
  });

  function textNodesUnder(element) {
    let n,
      a = [],
      walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
    while ((n = walk.nextNode())) a.push(n);
    return a;
  }
};
