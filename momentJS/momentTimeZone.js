const moment = require('moment');
const momentTimezone = require('moment-timezone');

const nowInLondon = momentTimezone.tz('Europe/London');
console.log('Current time in London:', nowInLondon.format('YYYY-MM-DD HH:mm:ss'));

const specificDateInSydney = momentTimezone.tz('2024-07-04 10:20:30', 'Australia/Sydney');
console.log('Specific date in Sydney:', specificDateInSydney.format('YYYY-MM-DD HH:mm:ss'));


const parisTime = momentTimezone.tz('2024-07-04 10:20:30', 'Europe/Paris');
const sydneyTime = parisTime.clone().tz('Australia/Sydney');
console.log('Paris time:', parisTime.format('YYYY-MM-DD HH:mm:ss'));
console.log('Converted to Sydney time:', sydneyTime.format('YYYY-MM-DD HH:mm:ss'));

const localTime = moment();
const utcTime = localTime.clone().utc();
const localFromUtc = utcTime.clone().local();
console.log('Local time:', localTime.format('YYYY-MM-DD HH:mm:ss'));
console.log('UTC time:', utcTime.format('YYYY-MM-DD HH:mm:ss'));
console.log('Local time from UTC:', localFromUtc.format('YYYY-MM-DD HH:mm:ss'));


const utcToNewYork = utcTime.clone().tz('America/New_York');
console.log('UTC converted to New York time:', utcToNewYork.format('YYYY-MM-DD HH:mm:ss'));
