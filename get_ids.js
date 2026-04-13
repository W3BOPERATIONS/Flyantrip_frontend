const https = require('https');
function getPhotoId(query) {
  return new Promise(resolve => {
    https.get('https://unsplash.com/ngetty/v3/search/images?query=' + query, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
         resolve(query + ': ' + data.substring(0, 50));
      });
    }).on('error', () => resolve(query + ': err'));
  });
}
Promise.all(['oman', 'thailand', 'singapore', 'heritage-walk-india', 'dubai-desert', 'thailand-island', 'singapore-skyline'])
  .then(queries => Promise.all(queries.map(getPhotoId)))
  .then(res => console.log(res.join('\n')));
