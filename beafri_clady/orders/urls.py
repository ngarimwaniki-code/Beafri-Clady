from django.urls import path
from .views import order_confirmation

urlpatterns = [
    path('order_confirmation/', order_confirmation, name='order_confirmation'),
]
