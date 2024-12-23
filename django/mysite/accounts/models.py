'''
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    is_seller = models.BooleanField(default=False)

    groups = models.ManyToManyField(
        Group,
        related_name="customuser_groups",  # Add unique related_name
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="customuser_user_permissions",  # Add unique related_name
        blank=True,
    )
'''


from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    is_seller = models.BooleanField(default=False)
    phone_number = models.CharField(max_length=15, blank=True, null=True)  # Add phone_number field
    country = models.CharField(max_length=100, blank=True, null=True)  # Add country field

    # Specify that 'email' is used for authentication
    USERNAME_FIELD = 'email'

    # You can remove 'username' from REQUIRED_FIELDS if you don't want it required during user creation
    REQUIRED_FIELDS = ['username']  # You can still keep 'username' for backward compatibility

    groups = models.ManyToManyField(
        Group,
        related_name="customuser_groups",  # Add unique related_name
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="customuser_user_permissions",  # Add unique related_name
        blank=True,
    )
