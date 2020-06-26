from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from users.models import CustomUser
from users.api.serializers import UserDisplaySerializer
from rest_framework import status, generics
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated


class CurrentUserAPIView(APIView):
    def get(self, request):
        serializer = UserDisplaySerializer(request.user)
        return Response(serializer.data)


class AllUsersView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserDisplaySerializer
    permission_classes = [IsAdminUser]


class GetCRSF(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):
        print(request.auth)
        print(request.user.is_authenticated)
        return Response(data="success!", status=200)

    def post(self, request):
        print("aaaa")
        return Response(data="success!", status=200)
