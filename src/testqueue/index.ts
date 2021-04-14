import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";

import { awsSqsConfig } from './const/app';
import * as AWS from 'aws-sdk';

AWS.config.update({ region: 'ap-southeast-2' });


var messsage = {
    QueueUrl: 'https://sqs.ap-southeast-2.amazonaws.com/961702414963/tradequeue',
    MessageBody: 'Text data' + new Date().getDate()
};

var sqsClient = new AWS.SQS(awsSqsConfig);

console.log('sendng message to sqs');

let sendSqsMessage = sqsClient.sendMessage(messsage).promise();

sendSqsMessage.then((data) => {
    console.log(`OrdersSvc | SUCCESS: ${data.MessageId}`);
    //res.send("Thank you for your order. Check you inbox for the confirmation email.");
}).catch((err) => {
    console.log(`OrdersSvc | ERROR: ${err}`);

    // Send email to emails API
    //res.send("We ran into an error. Please try again.");
});


