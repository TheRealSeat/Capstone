import json
import boto3
import os
import time
from boto3.dynamodb.conditions import Key, Attr

dynamodb = boto3.resource('dynamodb')
ENVIRONMENT = os.environ['ENVIRONMENT']


def postTransactions(event, context):
    global dynamodb
    data = json.loads(event['body'])
    response_value = {
        'statusCode': 500,
        'body': json.dumps({"error": "Internal Error"}),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
    try:
        print(event["queryStringParameters"])
        print(data)
        table = dynamodb.Table('User_Transactions_' + ENVIRONMENT)

        itemToPut = {
            'TransactionID': data['TransactionID'],
            'TotalPrice': data['TotalPrice'],
            'CreatedOn': str(time.time())
        }

        table.put_item(Item=itemToPut)
        response_value = {
            'statusCode': 200,
            'body': json.dumps(itemToPut),
        }
    except Exception as e:
        print(e)

    return response_value
