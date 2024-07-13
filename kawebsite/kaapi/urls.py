from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('aboutme/', views.work, name='about'),
    path('work/', views.work, name='work'),
    path('contact/', views.contact, name='contact'),
]