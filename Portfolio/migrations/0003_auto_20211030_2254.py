# Generated by Django 3.2.7 on 2021-10-31 01:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Portfolio', '0002_auto_20211030_2157'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bolo',
            name='foto',
            field=models.FileField(blank=True, upload_to='documents/'),
        ),
        migrations.AlterField(
            model_name='doce',
            name='foto',
            field=models.FileField(blank=True, upload_to='documents/'),
        ),
    ]
