import json
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from django.contrib.auth import get_user_model  # Use this to fetch the custom user model

CustomUser = get_user_model()  # Get the custom user model dynamically

class LoginTestCase(TestCase):
    def setUp(self):
        # Create a test user
        self.user = CustomUser.objects.create_user(
            username='testuser@example.com',  # Use email as username if that's how your model is set up
            email='testuser@example.com',
            password='testpassword'
        )
        self.login_url = reverse('login')  # Adjust the URL name for your login endpoint

    def test_successful_login(self):
        data = {'email': 'testuser@example.com', 'password': 'testpassword'}
        response = self.client.post(self.login_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('token', response.data)  # Check if token is returned

    def test_login_with_invalid_credentials(self):
        data = {'email': 'testuser@example.com', 'password': 'wrongpassword'}
        response = self.client.post(self.login_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data['error'], 'Invalid credentials')

    def test_login_without_email(self):
        data = {'password': 'testpassword'}
        response = self.client.post(self.login_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data['error'], 'Email and password are required')

    def test_login_without_password(self):
        data = {'email': 'testuser@example.com'}
        response = self.client.post(self.login_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data['error'], 'Email and password are required')
