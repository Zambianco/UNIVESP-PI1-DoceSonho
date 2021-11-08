from django.shortcuts import render
from .models import Bolo, Doce, Quitute
from django.http import JsonResponse

def listQuitute(request):
    data = list(Quitute.objects.values())
    return JsonResponse(data, safe=False)

def listBolo(request):
    data = list(Bolo.objects.values())
    return JsonResponse(data, safe=False)

def listDoce(request):
    data = list(Doce.objects.values())
    return JsonResponse(data, safe=False)

def bolo_show(request):
    bolos = Bolo.objects.all()
    context = {'bolos': bolos}
    return render(request, 'bolos.html', context)
