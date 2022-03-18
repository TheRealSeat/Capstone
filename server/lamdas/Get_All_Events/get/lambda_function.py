import json
import boto3
from boto3.dynamodb.connections import Key

def lambda_handler(event, context):
    response_value = {
        'statusCode': 500,
        'body': json.dumps({"error": "Internal Error"}),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
    client = boto3.client('dynamodb')
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