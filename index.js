const fs = require('fs')

const philippinesPrettyJson = JSON.parse(fs.readFileSync('philippines-pretty.json', {encoding: 'utf8' }));

fs.writeFileSync('philippines.json', JSON.stringify(philippinesPrettyJson))