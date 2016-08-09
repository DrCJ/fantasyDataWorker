const request = require('request');
const db = require('./db_config.js');
const { fantasydata } = require('./getFantasyDataStats');

const url = 'https://api.fantasydata.net/v3/nfl/projections/JSON/PlayerGameProjectionStatsByTeam/2016/1/ATL';
request({
  headers: {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': fantasydata
  },
  uri: url,
  method: 'GET',
}, (err, response, body) => {
  if (err) {
    console.log('error:', err);
  } else {
    if(response.statusCode === 200) {
      console.log(body);      
    } else {
      console.log('err:', response);
    }
  }
});