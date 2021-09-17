from django.db import models

# Create your models here.
class User(models.Model):
	username = models.CharField(max_length=100)
	password = models.CharField(max_length=100)

	def __str__(self):
			return self.username

# Create your models here.
class Post(models.Model):
	title = models.CharField(max_length=100)
	author = models.CharField(max_length=100)
	imagelink = models.URLField()
	date = models.DateTimeField(auto_now=True)

	def __str__(self):
			return self.title