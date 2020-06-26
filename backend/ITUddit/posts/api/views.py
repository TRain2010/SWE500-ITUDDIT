from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework import status, generics
from rest_framework.permissions import IsAdminUser

from posts.models import Post, Comment, Activity
from posts.api.serializers import PostSerializer, CommentSerializer


class PostListView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    search_fields = ['category', 'user']


class PostAPIView(APIView):
    def get(self, request):
        serializer = PostSerializer(request.post)


class CommentListView(generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class CommentAPIView(APIView):
    serializer = CommentSerializer()
