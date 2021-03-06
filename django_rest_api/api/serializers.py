from rest_framework import serializers
from .models import User
from .models import Post

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ['id', 'username', 'password']
		
class PostSerializer(serializers.ModelSerializer):
	class Meta:
		model = Post
		fields = ['id', 'title', 'author', 'imagelink']
	