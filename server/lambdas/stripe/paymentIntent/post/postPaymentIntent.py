import json
import stripe

stripe.api_key = "sk_test_51KiQWrG3YVsmrIIr47VAdHjPbfAg2mrCOzKwr1c7hnIWHgso878OYMpnU50ffyOY976uduuPdgECR6DgR62OP2q500ybLiTRyU"


def postPaymentIntent(event, context):
    data = json.loads(event['body'])

    response_value = {
        'statusCode': 500,
        'body': json.dumps({"message": "Payment Failed",
                            "success": False}),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
    try:
        stripe.PaymentIntent.create(
            amount=data['amount'],
            currency=data['currency'],
            description=data['description'],
            payment_method=data['payment_method'],
            confirm=True,
        )
        response_value = {
            'statusCode': 200,
            'body': json.dumps({"message": "Payment Successful",
                                "success": True}),
        }
    except Exception as e:
        print(e)

    return response_value
