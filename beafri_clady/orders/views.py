from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Order
from cart.models import Cart

@login_required
def order_confirmation(request):
    cart = Cart.objects.get(user=request.user)
    total_price = cart.total_price
    order = Order.objects.create(user=request.user, cart=cart, total_price=total_price)
    cart.delete()
    return render(request, 'orders/order_confirmation.html', {'order': order})
