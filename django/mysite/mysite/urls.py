"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from E_Commerce_Backend.views import home
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView  # Add the JWT views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),  # Add this line for the root path
    path('api/', include('products.urls')),  # This includes the API routes defined in `products/urls.py`
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Token obtain route
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Token refresh route
]

from django.conf import settings
from django.conf.urls.static import static

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)









