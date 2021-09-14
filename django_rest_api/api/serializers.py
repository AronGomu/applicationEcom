from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
	class Meta:
		model = Post
		fields = ['id', 'title', 'author', 'imagelink']
		
		"""
	def create(self, validated_data):
		print(validated_data)
		return Post.objects.create(post=validated_data)
		"""


	"""
	title = serializers.CharField(max_length=100)
	author = serializers.CharField(max_length=100)
	imagelink = serializers.URLField()
	date = serializers.DateField()

	def create(self, validated_data):
		return Post.objects.create(validated_data)

	def update(self, instance, validated_data):
		instance.title = validated_data.get('title', instance.title)
		instance.author = validated_data.get('author', instance.title)
		instance.imageLink = validated_data.get('imageLink', instance.title)
		instance.date = validated_data.get('date', instance.title)
		instance.save()
		return instance
	"""
	