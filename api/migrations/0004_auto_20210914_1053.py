# Generated by Django 3.2.7 on 2021-09-14 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_post_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='author',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='post',
            name='imagelink',
            field=models.URLField(),
        ),
    ]
