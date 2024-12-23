from django.contrib.auth.models import BaseUserManager
from rest_framework import serializers
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token
from accounts.models import CustomUser
import logging

logger = logging.getLogger(__name__)

'''
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
        return Response({"error": "Invalid credentials"}, status=400) '''
    
class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        if not email or not password:
            logger.debug("Missing email or password")
            return Response({"error": "Email and password are required"}, status=400)

        logger.debug(f"Attempting to authenticate user: {email}")

        # Authenticate directly using email (email is now the unique identifier)
        user = authenticate(username=email, password=password)  # Email is used as username now

        if user:
            logger.debug("Authentication successful")
            # Create or retrieve the token for the authenticated user
            token, _ = Token.objects.get_or_create(user=user)
            return Response({"token": token.key})
        
        # If authentication fails
        logger.debug("Authentication failed")
        return Response({"error": "Invalid credentials"}, status=400)




'''class SignUpSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ('email', 'password') ## , is seller

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
           ## is_seller=validated_data.get('is_seller', False)
        )
        return user
'''


class SignUpSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)  # To handle confirm password

    class Meta:
        model = CustomUser
        fields = ('first_name', 'last_name', 'phone_number', 'country', 'email', 'password', 'confirm_password', 'is_seller')

    def validate(self, data):
        # Ensure passwords match
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({"password": "Passwords must match."})
        return data

    def create(self, validated_data):
        # Remove confirm_password as it's not needed for creating the user
        validated_data.pop('confirm_password')

        # Create user with the provided data
        user = CustomUser.objects.create_user(
            username=validated_data['email'],  # Use email as username
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            password=validated_data['password'],
            is_seller=validated_data.get('is_seller', False),
            phone_number=validated_data.get('phone_number'),
            country=validated_data.get('country')
        )
        return user



class SignUpView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = SignUpSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "User created successfully!"}, status=201)
        return Response(serializer.errors, status=400)



