from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('getPosts', views.getPosts, name='posts'),
    path('getPost/<str:post_slug>', views.getPost, name='post'),
    path('searchPosts', views.search, name='search'),
    path('contact', views.contact, name='contact')
]
