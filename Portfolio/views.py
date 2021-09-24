from django.shortcuts import render
from .models import Bolo, Doce

def bolo_show(request):
    bolos = Bolo.objects.all()
    context = {'bolos': bolos}
    return render(request, 'bolos.html', context)
