from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from users.models import CustomUser
from users.api.serializers import UserDisplaySerializer, CreateUserSerializer
from rest_framework import status


class CurrentUserAPIView(APIView):
    def get(self, request):
        serializer = UserDisplaySerializer(request.user)
        return Response(serializer.data)


class CreateUserAPIView(APIView):
    def post(self, request):
        customUserSerializer = CreateUserSerializer(data=request.data)
        print(customUserSerializer.is_valid())
        if customUserSerializer.is_valid():
            customUserSerializer.save()
            return Response(customUserSerializer.data, status=status.HTTP_201_CREATED)

        else:
            print(customUserSerializer.errors)
            errors = customUserSerializer.errors
            return Response(errors, status=status.HTTP_400_BAD_REQUEST)
