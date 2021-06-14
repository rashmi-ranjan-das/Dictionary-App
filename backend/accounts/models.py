from django.db import models

# Create your models here.

class Dictionary(models.Model):
    word = models.CharField(max_length=5000)
    meaning = models.CharField(max_length = 5000)
    
