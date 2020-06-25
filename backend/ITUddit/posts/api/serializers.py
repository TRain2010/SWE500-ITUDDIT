from rest_framework import serializers
from posts.models import Activity, Post, Comment, Category


class RecursiveField(serializers.Serializer):
    def to_representation(self, value):
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data


class CommentSerializer(serializers.ModelSerializer):
    upvote_number = serializers.ReadOnlyField()
    children = RecursiveField(many=True)

    class Meta:
        model = Comment
        fields = ('post', 'user', 'content', 'parent',
                  'children', 'upvote_number')


class PostSerializer(serializers.ModelSerializer):

    upvote_number = serializers.ReadOnlyField()
    comments = CommentSerializer(many=True)

    class Meta:
        model = Post
        fields = ('topic', 'content', 'category',
                  'user', 'upvote_number', 'comments')


class CategorySerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=True)

    class Meta:
        model = Category
        fields = ('name')
