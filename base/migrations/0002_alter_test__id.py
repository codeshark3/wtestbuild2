# Generated by Django 3.2.7 on 2022-01-24 16:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='test',
            name='_id',
            field=models.AutoField(editable=False, primary_key=True, serialize=False),
        ),
    ]
