from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token
from accounts.models import CustomUser
import logging

logger = logging.getLogger(__name__)

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        if not email or not password:
            logger.debug("Missing email or password")
            return Response({"error": "Email and password are required"}, status=400)

        logger.debug(f"Attempting to authenticate user: {email}")

        # Find user by email
        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            logger.debug("User not found")
            return Response({"error": "Invalid credentials"}, status=400)

        # Authenticate using the username
        user = authenticate(username=user.username, password=password)
        if user:
            logger.debug("Authentication successful")
            # Create or retrieve the token for the authenticated user
            token, _ = Token.objects.get_or_create(user=user)
            return Response({"token": token.key})
        
        # If authentication fails
        logger.debug("Authentication failed")
        return Response({"error": "Invalid credentials"}, status=400)

