from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from users.models import CustomUser
from users.api.serializers import UserDisplaySerializer
from rest_framework import status, generics
from rest_framework.permissions import IsAdminUser


class CurrentUserAPIView(APIView):
    def get(self, request):
        serializer = UserDisplaySerializer(request.user)
        return Response(serializer.data)


class AllUsersView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserDisplaySerializer
    permission_classes = [IsAdminUser]
