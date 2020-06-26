from django.urls import path
from users.api.views import CurrentUserAPIView, GetCRSF
from posts.api.views import PostAPIView, PostListView, CommentListView

urlpatterns = [
    path("user/", CurrentUserAPIView.as_view(), name="current-user"),
    path("posts/", PostListView.as_view(), name="all-posts"),
    path("comments/", CommentListView.as_view(), name="all-comments"),
    path('get-crfs/', GetCRSF.as_view(), name='get-crfs'),
]
