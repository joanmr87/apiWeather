const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

const location = (ip) => {
   
    const url = `http://ip-api.com/json/${ip}`;
    fetch(url)
	.then(res => res.json())
	.then(json => {
        const data = json;
        console.log("esto es data", data);
        return data;
    })
	.catch(err => console.error('error:' + err));
}

module.exports = location;