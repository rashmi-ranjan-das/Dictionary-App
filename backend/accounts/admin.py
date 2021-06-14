from django.contrib import admin
from .models import Dictionary
# Register your models here.

@admin.register(Dictionary)
class DictionaryAdmin(admin.ModelAdmin):
    list_display = ['id', 'word', 'meaning']
