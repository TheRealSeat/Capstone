import json
import boto3
import os
import time
import stripe
from boto3.dynamodb.conditions import Key, Attr

dynamodb = boto3.resource('dynamodb')
ENVIRONMENT = os.environ['ENVIRONMENT']
stripe.api_key = "sk_test_51KiQWrG3YVsmrIIr47VAdHjPbfAg2mrCOzKwr1c7hnIWHgso878OYMpnU50ffyOY976uduuPdgECR6DgR62OP2q500ybLiTRyU"



def postTransactions(event, context):
    global dynamodb
    eventBody = json.loads(event['body'])
    data = json.loads(stripe.issuing.PaymentIntent.retrieve( eventBody['TransactionID'] ))
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
            'TransactionID': data['id'],
            'TotalPrice': data['amount'],
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
