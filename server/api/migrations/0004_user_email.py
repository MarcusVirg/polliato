# Generated by Django 2.2.dev20181016201044 on 2018-10-29 04:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20181027_1845'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='email',
            field=models.CharField(default='no-email', max_length=255),
        ),
    ]
