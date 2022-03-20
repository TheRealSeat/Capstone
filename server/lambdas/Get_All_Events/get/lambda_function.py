import json
import boto3
from boto3.dynamodb.connections import Key

client = boto3.client('dynamodb')
def lambda_handler(event, context):
    global client
    response_value = {
        'statusCode': 500,
        'body': json.dumps({"error": "Internal Error"}),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
    try:
        data = client.scan(TableName="Events")
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