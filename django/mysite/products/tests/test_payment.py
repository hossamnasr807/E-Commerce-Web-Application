import requests
from django.test import TestCase

class PaymentTestCase(TestCase):
    def test_process_payment(self):
        payment_data = {
            'method': 'fawry',
            'amount': 400.00,
            'order_id': 10
        }

        response = requests.post('http://127.0.0.1:8000/api/process-payment/', json=payment_data)
        self.assertEqual(response.status_code, 200)
        
        # Check that the 'message' key exists and has the correct value
        self.assertIn('message', response.json())
        self.assertEqual(response.json()['message'], 'Payment processed successfully!')

        # Check the structure of the 'payment' key
        self.assertIn('payment', response.json())
        payment_info = response.json()['payment']
        self.assertEqual(payment_info['order'], 10)
        self.assertEqual(payment_info['amount'], '400.00')
        self.assertEqual(payment_info['method'], 'fawry')
