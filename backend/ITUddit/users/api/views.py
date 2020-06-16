from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from users.models import CustomUser
from users.api.serializers import UserDisplaySerializer, CreateUserSerializer
from rest_framework import status, generics
from rest_framework.permissions import IsAdminUser


class CurrentUserAPIView(APIView):
    def get(self, request):
        serializer = UserDisplaySerializer(request.user)
        return Response(serializer.data)


class CreateUserAPIView(APIView):
    def post(self, request):
        customUserSerializer = CreateUserSerializer(data=request.data)
        if customUserSerializer.is_valid():
            customUserSerializer.save()
            return Response(customUserSerializer.data, status=status.HTTP_201_CREATED)

        else:
            errors = customUserSerializer.errors
            return Response(errors, status=status.HTTP_400_BAD_REQUEST)


class AllUsersView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserDisplaySerializer
    permission_classes = [IsAdminUser]


class GetCRSF(APIView):
    def get(self, request):
        return Response(data="success!", status=200)
