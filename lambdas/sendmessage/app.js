// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const AWS = require('aws-sdk');
const axios = require('axios');

// const ddb = new AWS.DynamoDB.DocumentClient();

// const { TABLE_NAME } = process.env;

exports.handler = async event => {
  console.log("on send message", event.requestContext, event.body);


  const postData = JSON.parse(event.body).data;

  const url = 'https://api.prod.europe-west1.gc.chatlayer.ai/v1/channels/webhook/6645a1d9fdbc97a1d757d7b0/messages';  // Replace with your actual API endpoint
  // const data = {
  //   name: 'John Doe',
  //   email: 'johndoe@example.com',
  // };

  try {
    console.log('postData: %j', postData)
    // const token = ''

    const config = {
      headers: {
        Authorization: 'Bearer 66446a47a61eb7671e4a5a61:7F081125ccB871D1Dcb3Aa41bf34D053',
        "Content-Type": 'application/json'
      },
    };    
    const response = await axios.post(url, postData, config);
    console.log('Status:', response.status);
    console.log('Data:', response.data);
  } catch (error) {
    console.log(error)
    return { statusCode: 500, body: error.stack };
  }

  // let connectionData;
  
  // try {
  //   connectionData = await ddb.scan({ TableName: TABLE_NAME, ProjectionExpression: 'connectionId' }).promise();
  // } catch (e) {
  //   return { statusCode: 500, body: e.stack };
  // }
  
  // const apigwManagementApi = new AWS.ApiGatewayManagementApi({
  //   apiVersion: '2018-11-29',
  //   endpoint: event.requestContext.domainName + '/' + event.requestContext.stage
  // });
  
  // const postData = JSON.parse(event.body).data;
  
  // const postCalls = connectionData.Items.map(async ({ connectionId }) => {
  //   try {
  //     await apigwManagementApi.postToConnection({ ConnectionId: connectionId, Data: postData }).promise();
  //   } catch (e) {
  //     if (e.statusCode === 410) {
  //       console.log(`Found stale connection, deleting ${connectionId}`);
  //       await ddb.delete({ TableName: TABLE_NAME, Key: { connectionId } }).promise();
  //     } else {
  //       throw e;
  //     }
  //   }
  // });
  
  // try {
  //   await Promise.all(postCalls);
  // } catch (e) {
  //   return { statusCode: 500, body: e.stack };
  // }

  return { statusCode: 200, body: 'Data sent.' };
};
