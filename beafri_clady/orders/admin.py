from django.contrib import admin
from .models import Order

class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'total_price', 'created_at',)
    list_filter = ('user', 'created_at',)
    search_fields = ('user__email',)
    readonly_fields = ('id', 'user', 'cart', 'total_price', 'created_at',)

admin.site.register(Order, OrderAdmin)
