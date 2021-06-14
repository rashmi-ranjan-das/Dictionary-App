import re
from django.db.models.fields import json
from django.shortcuts import render
from .serializers import UserSerializer, DictionarySerializer
from django.contrib.auth.models import User
from rest_framework import serializers, viewsets
from .models import Dictionary
import json
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
# Create your views here.


class UserAccount(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class DictionaryViewset(viewsets.ModelViewSet):
    serializer_class = DictionarySerializer
    authentication_classes = [TokenAuthentication, ]
    permission_classes = [IsAuthenticated, ]

    def get_queryset(self):
        meaning = Dictionary.objects.filter(word = self.request.GET.get('word'))
        return meaning

