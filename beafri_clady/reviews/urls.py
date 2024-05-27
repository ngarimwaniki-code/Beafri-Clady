from django.urls import path
from . import views

urlpatterns = [
    path('', views.review_list, name='review_list'),
    path('review/<int:pk>/', views.review_detail, name='review_detail'),
    path('product/<int:product_id>/add_review/', views.add_review, name='add_review'),
]
