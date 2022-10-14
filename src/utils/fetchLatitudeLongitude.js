const IP = require('ip');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


async function fetchLatitudeLongitude() {
    const ipAddress = IP.address();
    const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
    let data = await response.json();
    //capturo el error ya que (al menos en mi local) esto me devuelve un private address, y no es posible obtener infomacion en ip-api.com
    if (data.status == 'fail') {
        const response = await fetch(`http://ip-api.com/json/`);
        data = await response.json();
    }
    return data;
}
    
module.exports = fetchLatitudeLongitude;

