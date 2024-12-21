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
