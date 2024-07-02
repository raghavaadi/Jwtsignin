const fs = require('fs');
const jwt = require('jsonwebtoken');
//use the shell script and run cmd.sh shell script to generate new keys (delete initially the .pem  files)
//make sure you copy paste the public key file contents  in freshdesk sso jwt configuration page 
//in the customer /agent login page  click login to get the URL  
//copy the nonce and replace in line number 20
//run this nodejscode  by using npm i && node index.js  
//it will print the generated key 
//now  use  this ormat to create following url 
//`${url}?state=${state provided in login url}&id_token=${id generate from running this script}`
//example https://madmaggie.myfreshworks.com/sp/OIDC/629884134309915544/implicit?state=hgdg43567&id_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.TCYt5XsITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUcX16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtjPAYuNzVBAh4vGHSrQyHUdBBPM
const privateKey = fs.readFileSync('private_key.pem', 'utf8'); //uses the current dummy private key


const payload = {
  sub: '1234567890', 
  name: 'John Doe',
  admin: true,
  "email": "messi@awesomecompany.com",
  "nonce": "itnajvYUCKiFi1Rq"//replace  this nonce with their nonce
};


const signOptions = {
  algorithm: 'RS256', 
  expiresIn: '1h'     
};

const token = jwt.sign(payload, privateKey, signOptions);

console.log('Generated JWT:', token);
