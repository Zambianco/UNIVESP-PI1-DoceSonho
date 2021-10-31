from django.conf import settings
from django.db import models

class Bolo(models.Model):
    identificador = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=200)
    descricao = models.TextField()
    ingredientes = models.TextField()
    foto = models.FileField(blank=True, upload_to=settings.UPLOAD_PATH)

    def publish(self):
        self.save()

    def __str__(self):
        return self.titulo


class Doce(models.Model):
    identificador = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=200)
    descricao = models.TextField()
    ingredientes = models.TextField()
    foto = models.FileField(blank=True, upload_to=settings.UPLOAD_PATH)

    def publish(self):
        self.save()

    def __str__(self):
        return self.titulo
