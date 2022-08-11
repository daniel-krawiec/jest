const helloWorld = (msg = '') => {
  if (msg.endsWith('?')) return 'Is it a Hello?';
  if (msg.endsWith('...')) return 'Finish Hello';
  if (msg.endsWith('!')) return "It's a Hello!";
  if (msg === '') return 'Empty';

  return 'Hello World';
};

module.exports = helloWorld;
