from django.shortcuts import render
from .models import Bolo, Doce
from django.http import JsonResponse

def bolo_show(request):
    data = list(Bolo.objects.values())  # wrap in list(), because QuerySet is not JSON serializable
    return JsonResponse(data, safe=False)  # or JsonResponse({'data': data})



'''
def bolo_show(request):
    bolos = Bolo.objects.all()
    context = {'bolos': bolos}
    return render(request, 'bolos.html', context)

def bolo_list(request):
    data = list(Bolo.objects.values())  # wrap in list(), because QuerySet is not JSON serializable
    return JsonResponse(data, safe=False)  # or JsonResponse({'data': data})
'''
