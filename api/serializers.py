from dataclasses import fields
from rest_framework.serializers import ModelSerializer
from rest_framework.pagination import PageNumberPagination
from .models import Post, Contact

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class ContactSerializer(ModelSerializer):
    class Meta:
        model = Contact
        fields = ['name', 'phone', 'email', 'message']