from django.shortcuts import render
from django.http import *
# Create your views here.
def Home(request):
    return HttpResponse('Home')

def About(request):
    return HttpResponse('About')


def home(request):
    return HttpResponse("<h1>Welcome to the E-Commerce Site</h1>")

