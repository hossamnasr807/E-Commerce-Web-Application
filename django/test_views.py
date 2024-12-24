from django.urls import reverse
from django.test import TestCase, Client
from rest_framework.test import APITestCase, APIRequestFactory
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .views import ProductViewSet
from .models import Product


class LoginViewTests(APITestCase):
    def setUp(self):
        self.url = reverse('login')
        self.username = 'testuser'
        self.password = 'testpassword'
        self.user = User.objects.create_user(username=self.username, password=self.password)

    def test_login_success(self):
        data = {'username': self.username, 'password': self.password}
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, 200)
        self.assertIn('token', response.data)
        token = Token.objects.get(user=self.user)
        self.assertEqual(response.data['token'], token.key)

    def test_login_failure_invalid_credentials(self):
        data = {'username': self.username, 'password': 'wrongpassword'}
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.data['error'], 'Invalid credentials')

    def test_login_failure_missing_username(self):
        data = {'password': self.password}
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.data['error'], 'Invalid credentials')

    def test_login_failure_missing_password(self):
        data = {'username': self.username}
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.data['error'], 'Invalid credentials')


class ViewsTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_home_view(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "<h1>Welcome to the E-Commerce Site</h1>")

    def test_Home_view(self):
        response = self.client.get(reverse('Home'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Home')

    def test_About_view(self):
        response = self.client.get(reverse('About'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'About')


class ProductViewSetTest(TestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.view = ProductViewSet.as_view({'get': 'list', 'post': 'create'})
        self.uri = '/products/'

    def test_list(self):
        request = self.factory.get(self.uri)
        response = self.view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create(self):
        request = self.factory.post(self.uri, {'name': 'Test Product', 'price': '10.00'}, format='json')
        response = self.view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
