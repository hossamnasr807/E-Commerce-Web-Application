from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet
from accounts.views import LoginView  # Import LoginView from accounts or wherever it's defined

router = DefaultRouter()
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', LoginView.as_view(), name='login'),
]



