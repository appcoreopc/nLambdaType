export const awsSqsConfig = { 
    apiVersion: '2012-11-05' , 
    accessKeyId: process.env.AWS_ACCESS_KEY,      // should be:  process.env.AWS_ACCESS_ID
    secretAccessKey: process.env.AWS_SECRET_KEY,
    correctClockSkew: true  
};



