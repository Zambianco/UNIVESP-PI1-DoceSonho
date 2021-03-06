# Generated by Django 3.2.7 on 2021-11-08 22:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Classificacao', '0001_initial'),
        ('Portfolio', '0008_auto_20211031_2058'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doce',
            name='foto',
            field=models.ImageField(blank=True, upload_to='upload/'),
        ),
        migrations.CreateModel(
            name='Quitute',
            fields=[
                ('identificador', models.AutoField(primary_key=True, serialize=False)),
                ('titulo', models.CharField(max_length=200)),
                ('descricao', models.TextField()),
                ('ingredientes', models.TextField()),
                ('foto', models.ImageField(blank=True, upload_to='upload/')),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='Classificacao.categoria')),
            ],
        ),
    ]
