const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log('-------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('-------------------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
    dir: '/Users/kimdongju/Desktop/STUDY/node.js textbook/ch03/3.4',
    name: 'path',
    ext: '.js',
}));
console.log('path.normalize():', path.normalize('/Users/kimdongju/Desktop/STUDY/node.js textbook/ch03/3.4/path.js'));
console.log('--------------------------------');
