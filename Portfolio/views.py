from django.shortcuts import render
from .models import Bolo, Doce
from django.http import JsonResponse

def listBolo(request):
    data = list(Bolo.objects.values())
    return JsonResponse(data, safe=False)


def bolo_show(request):
    bolos = Bolo.objects.all()
    context = {'bolos': bolos}
    return render(request, 'bolos.html', context)
