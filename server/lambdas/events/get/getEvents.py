import json
import boto3
import os
from boto3.dynamodb.conditions import Key, Attr

dynamodb = boto3.resource('dynamodb')
ENVIRONMENT = os.environ['ENVIRONMENT']


def getEvents(event, context):
    global dynamodb
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
        table = dynamodb.Table('Events_' + ENVIRONMENT)
        if event["queryStringParameters"] is not None:
            if 'EventType' in event["queryStringParameters"]:
                data = table.scan(
                    FilterExpression=Attr("EventType").eq(event["queryStringParameters"]["EventType"]))
        else:
            data = table.scan()

        response_value = {
            'statusCode': 200,
            'body': json.dumps(data['Items']),
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
    except Exception as e:
        print(e)

    return response_value
