from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='my-home'),
    path('about/', views.about, name='my-about'),
]