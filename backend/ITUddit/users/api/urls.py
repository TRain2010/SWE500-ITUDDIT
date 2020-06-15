from django.urls import path
from users.api.views import CurrentUserAPIView, CreateUserAPIView

urlpatterns = [
    path("user/", CurrentUserAPIView.as_view(), name="current-user"),
    path("user_register/", CreateUserAPIView.as_view(), name="create-user"),
]
