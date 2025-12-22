const moment = require('moment');
moment.locale('es');

console.log('Nací ' + moment("20020111", "YYYYMMDD").fromNow());
