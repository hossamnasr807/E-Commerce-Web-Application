from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from .models import Product

class ProductManagementTestCase(TestCase):
    def setUp(self):
        self.product_data = {'name': 'Test Product', 'price': 100.0}
        self.product_url = reverse('product-list')  # Adjust to your URL name

    def test_list_products(self):
        Product.objects.create(name='Test Product', price=100.0)
        response = self.client.get(self.product_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreater(len(response.data), 0)  # Ensure products are returned

    def test_create_product(self):
        response = self.client.post(self.product_url, self.product_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['name'], self.product_data['name'])
        self.assertEqual(response.data['price'], self.product_data['price'])
