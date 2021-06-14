from django.contrib.auth import models
from rest_framework import fields, serializers
from django.contrib.auth.models import User
from django.shortcuts import redirect
from rest_framework.authtoken.models import Token
from .models import Dictionary

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'password', 'username', 'last_name', 'email', 'first_name']

    def create(self, validated_data):
        user = User.objects.create_user(username = validated_data['username'], first_name=validated_data['first_name'], last_name=validated_data['last_name'], email=validated_data['email'], password = validated_data['password'])
        Token.objects.create(user = user)
        return user

class DictionarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Dictionary
        fields = '__all__'