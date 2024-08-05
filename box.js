const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
const splitStr = str.split('');

splitStr.forEach((char, I) => {
  setTimeout(() => {
    const span = document.createElement('span');
          span.textContent = char;
    document.querySelector('#q1').appendChild(span);
  } , 100 * I);
})
