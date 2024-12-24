import requests
from django.test import TestCase

class PaymentTestCase(TestCase):
    def test_process_payment(self):
        payment_data = {
            'method': 'fawry',
            'amount': 400.00,
            'order_id': 5
        }

        response = requests.post('http://127.0.0.1:8000/api/process-payment/', json=payment_data)
        self.assertEqual(response.status_code, 200)
        self.assertIn('payment_status', response.json())  # Ensure payment status is returned
