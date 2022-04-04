import json
import boto3
import os

dynamodb = boto3.resource('dynamodb')
ENVIRONMENT = os.environ['ENVIRONMENT']


def postEvents(event, context):
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
        table = dynamodb.Table('Events_' + ENVIRONMENT)

        itemToPut = {
            'EventID': data['EventID'],
            'EventLocation': data['EventLocation'],
            'EventPrice': data['EventPrice'],
            'EventTitle': data['EventTitle'],
            'EventType': data['EventType'],
            'EventImg': data['EventImg']
        }

        table.put_item(Item=itemToPut)
        response_value = {
            'statusCode': 200,
            'body': json.dumps(itemToPut),
        }
    except Exception as e:
        print(e)

    return response_value
