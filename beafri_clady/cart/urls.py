from django.urls import path
from .views import cart_detail, checkout

urlpatterns = [
    path('', cart_detail, name='cart_detail'),
    path('checkout/', checkout, name='checkout'),
]
