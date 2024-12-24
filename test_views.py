from django.test import TestCase
from django.urls import reverse
from rest_framework import status

class HomeViewTestCase(TestCase):
    def test_home_page(self):
        response = self.client.get(reverse('home'))  # Adjust to your URL name
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, '<h1>Welcome to the E-Commerce Site</h1>')

    def test_home_view(self):
        response = self.client.get(reverse('home'))  # Adjust to your URL name
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, 'Home')

    def test_about_page(self):
        response = self.client.get(reverse('about'))  # Adjust to your URL name
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, 'About')
