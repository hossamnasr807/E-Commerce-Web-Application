from .gateways import FawryGateway, VodafoneCashGateway, CreditCardGateway

class PaymentGatewayFactory:
    @staticmethod
    def get_payment_gateway(payment_type):
        if payment_type.lower() == "fawry":
            return FawryGateway()
        elif payment_type.lower() == "vodafone":
            return VodafoneCashGateway()
        elif payment_type.lower() == "credit":
            return CreditCardGateway()
        else:
            raise ValueError(f"Unsupported payment gateway: {payment_type}")
