## Part I: website is hosted on Heroku or other cloud
npm provides all packages for redirecting http requests to https

1. https-localhost (make https the default protocool for localhost)   
https://www.npmjs.com/package/https-localhost

2. for express projects   
https://www.npmjs.com/package/@gfilho/base-server

3. for next.js projects   
i. generate a certificate (can be used to express projects too)   
https://www.npmjs.com/package/get-ssl-certificate-next   
ii. ssl  
https://www.npmjs.com/package/next-ssl-redirect-middleware


## Part II: website on AWS (Amazon Web Services)
1. how to set up a Free SSL certificate NodeJS App in AWS EC2   
https://dev.to/arifintahu/how-to-set-up-free-ssl-for-nodejs-app-in-aws-ec2-30fj

2. Generate or import a private key and SSL/TLS certificate   
https://docs.aws.amazon.com/cloudhsm/latest/userguide/ssl-offload-import-or-generate-private-key-and-certificate.html
