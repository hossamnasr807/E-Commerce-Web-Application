from django.db import models
from .factory import PaymentGatewayFactory

class Payment(models.Model):
    order = models.OneToOneField('orders.Order', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    method = models.CharField(
        max_length=20,
        choices=[
            ('Fawry', 'Fawry'),
            ('Vodafone', 'Vodafone Cash'),
            ('Credit', 'Credit Card'),
        ],
    )
    transaction_date = models.DateTimeField(auto_now_add=True)

    def process_payment(self):
        # Use the factory to get the appropriate gateway
        gateway = PaymentGatewayFactory.get_payment_gateway(self.method)
        gateway.process_payment(self.amount)
