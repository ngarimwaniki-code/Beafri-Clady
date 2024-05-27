from django.contrib import admin
from .models import Review

class ReviewAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'rating', 'created_at',)
    list_filter = ('user', 'product', 'created_at',)
    search_fields = ('user__email', 'product__name',)
    readonly_fields = ('user', 'product', 'rating', 'comment', 'created_at',)

admin.site.register(Review, ReviewAdmin)
