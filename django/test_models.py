from django.test import TestCase
from django.utils import timezone
from unittest.mock import patch, MagicMock
from decimal import Decimal
from accounts.models import CustomUser
from products.models import Product
from ..models import Payment, Order, Cart, CartItem

# Test Product Model
class ProductModelTest(TestCase):
    def setUp(self):
        self.product = Product.objects.create(
            name="Test Product",
            description="This is a test product.",
            price=9.99,
            stock=100,
            image="product_images/test_image.jpg"
        )

    def test_create_product(self):
        self.assertEqual(self.product.name, "Test Product")
        self.assertEqual(self.product.description, "This is a test product.")
        self.assertEqual(self.product.price, 9.99)
        self.assertEqual(self.product.stock, 100)
        self.assertEqual(self.product.image, "product_images/test_image.jpg")

    def test_product_str(self):
        self.assertEqual(str(self.product), "Test Product")

    def test_product_default_timestamps(self):
        self.assertIsNotNone(self.product.created_at)
        self.assertIsNotNone(self.product.updated_at)
        self.assertTrue(self.product.created_at <= timezone.now())
        self.assertTrue(self.product.updated_at <= timezone.now())

# Test Payment Model
class PaymentModelTest(TestCase):
    def setUp(self):
        self.payment = Payment.objects.create(
            order_id=1,
            amount=100.00,
            method='Credit'
        )

    @patch('..models.PaymentGatewayFactory.get_payment_gateway')
    def test_process_payment(self, mock_get_payment_gateway):
        mock_gateway = MagicMock()
        mock_get_payment_gateway.return_value = mock_gateway
        self.payment.process_payment()
        mock_get_payment_gateway.assert_called_once_with('Credit')
        mock_gateway.process_payment.assert_called_once_with(100.00)

# Test Order Model
class OrderModelTest(TestCase):
    def setUp(self):
        self.user = CustomUser.objects.create_user(username='testuser', password='12345')
        self.product = Product.objects.create(name='Test Product', price=10.00)
        self.order = Order.objects.create(
            user=self.user,
            product=self.product,
            quantity=2,
            total_price=20.00,
            status='Pending',
            ordered_at=timezone.now()
        )

    def test_order_creation(self):
        self.assertTrue(isinstance(self.order, Order))
        self.assertEqual(str(self.order), self.product.name)

    def test_order_fields(self):
        self.assertEqual(self.order.user.username, 'testuser')
        self.assertEqual(self.order.product.name, 'Test Product')
        self.assertEqual(self.order.quantity, 2)
        self.assertEqual(self.order.total_price, 20.00)
        self.assertEqual(self.order.status, 'Pending')
        self.assertIsNotNone(self.order.ordered_at)

# Test Cart and CartItem Models
class CartItemTestCase(TestCase):
    def setUp(self):
        self.user = CustomUser.objects.create(username='testuser', password='password')
        self.cart = Cart.objects.create(user=self.user, total_price=0.0, items_count=0)
        self.product = Product.objects.create(name='Test Product', price=Decimal('10.00'))
        self.cart_item = CartItem.objects.create(cart=self.cart, product=self.product, quantity=2)

    def test_calculate_item_total(self):
        expected_total = self.product.price * self.cart_item.quantity
        self.assertEqual(self.cart_item.calculate_item_total(), expected_total)

# Test CustomUser Model
class CustomUserModelTests(TestCase):
    def test_create_custom_user(self):
        user = CustomUser.objects.create_user(username='testuser', email='test@example.com', password='password123')
        self.assertEqual(user.username, 'testuser')
        self.assertEqual(user.email, 'test@example.com')
        self.assertFalse(user.is_seller)

    def test_email_uniqueness(self):
        CustomUser.objects.create_user(username='testuser1', email='test@example.com', password='password123')
        with self.assertRaises(Exception):
            CustomUser.objects.create_user(username='testuser2', email='test@example.com', password='password123')

    def test_default_is_seller(self):
        user = CustomUser.objects.create_user(username='testuser', email='test@example.com', password='password123')
        self.assertFalse(user.is_seller)
