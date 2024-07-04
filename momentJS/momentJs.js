const moment = require('moment');

const now = moment();
console.log('Now:', now.format('YYYY-MM-DD HH:mm:ss'));

const specificDate = moment('2024-07-04T10:20:30');
console.log('Specific Date:', specificDate.format('YYYY-MM-DD HH:mm:ss'));

const nextWeek = now.add(1, 'week');
console.log('Next Week:', nextWeek.format('YYYY-MM-DD'));

const lastMonth = now.subtract(1, 'month');
console.log('Last Month:', lastMonth.format('YYYY-MM-DD'));

console.log('Year:', now.year());
now.year(2025);
console.log('Updated Year:', now.format('YYYY'));

console.log('Month:', now.month()); 
now.month(6); 
console.log('Updated Month:', now.format('MMMM'));


const isBefore = now.isBefore(moment('2025-12-31'));
console.log('Is before 2025-12-31:', isBefore);

const isAfter = now.isAfter(moment('2024-01-01'));
console.log('Is after 2024-01-01:', isAfter);


const fromNow = moment('2024-07-01').fromNow();
console.log('From Now (2024-07-01):', fromNow);

const toNow = moment('2024-07-10').toNow();
console.log('To Now (2024-07-10):', toNow);

const duration = moment.duration(2, 'hours');
console.log('Duration in minutes:', duration.asMinutes());
console.log('Duration in days:', duration.asDays());
