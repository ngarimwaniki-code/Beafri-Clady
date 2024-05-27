from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Cart

@login_required
def cart_detail(request):
    cart = Cart.objects.get_or_create(user=request.user)[0]
    return render(request, 'cart/cart_detail.html', {'cart': cart})

@login_required
def checkout(request):
    cart = Cart.objects.get_or_create(user=request.user)[0]
    
    if request.method == 'POST':    
        cart_items = cart.cartitem_set.all()
        total_price = sum(item.product.price * item.quantity for item in cart_items)
        cart_items.delete()       
        return render(request, 'cart/order_confirmation.html', {'total_price': total_price})

    return render(request, 'cart/checkout.html', {'cart': cart})