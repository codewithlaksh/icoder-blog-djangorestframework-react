from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ContactSerializer, PostSerializer
from .models import Post

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/getPosts',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of posts'
        },
        {
            'Endpoint': '/getPost/slug',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single post object'
        },
        {
            'Endpoint': '/searchPosts',
            'method': 'GET',
            'body': None,
            'description': 'Returns the search results based on the search query value'
        },
        {
            'Endpoint': '/contact',
            'method': 'POST',
            'body': None,
            'description': 'Receives the data and saves it if valid'
        }
    ]
    return Response(routes)

@api_view(['GET'])
def getPosts(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response({'posts': serializer.data})

@api_view(['GET'])
def getPost(request, post_slug):
    post = Post.objects.filter(slug=post_slug).first()
    serializer = PostSerializer(post, many=False)
    return Response({'post': serializer.data})

@api_view(['GET'])
def search(request):
    query = request.GET['q']
    posts = Post.objects.filter(title__icontains=query).all()
    serializer = PostSerializer(posts, many=True)
    return Response({'posts': serializer.data})

@api_view(['POST'])
def contact(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response({"message": "Your contact message has been saved successfully!", "msg_category": "success"})