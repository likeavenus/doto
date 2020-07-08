const ghpages = require('gh-pages');

ghpages.publish('dist', {
    branch: 'gh-pages',
    repo: 'https://github.com/likeavenus/doto'
}, ()=> {console.log('Deploy is successful')});
