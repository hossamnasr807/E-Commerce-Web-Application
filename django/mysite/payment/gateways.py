from abc import ABC, abstractmethod

# Base class for Payment Gateway
class PaymentGateway(ABC):
    @abstractmethod
    def process_payment(self, amount):
        pass

# Concrete gateway for Fawry
class FawryGateway(PaymentGateway):
    def process_payment(self, amount):
        print(f"Processing Fawry payment of EGP {amount}")

# Concrete gateway for Vodafone Cash
class VodafoneCashGateway(PaymentGateway):
    def process_payment(self, amount):
        print(f"Processing Vodafone Cash payment of EGP {amount}")

# Concrete gateway for Credit Card
class CreditCardGateway(PaymentGateway):
    def process_payment(self, amount):
        print(f"Processing Credit Card payment of EGP {amount}")
