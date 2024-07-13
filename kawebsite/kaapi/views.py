from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def home(request):
    return Response({'message': 'home'})

@api_view(['GET'])
def about(request):
    return Response({'message': 'about'})

@api_view(['GET'])
def work(request):
    return Response({'message': 'work'})

@api_view(['GET'])
def contact(request):
    return Response({'message': 'contact'})