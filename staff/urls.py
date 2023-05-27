

from django.urls import path
from .views import *

app_name = "staff"

urlpatterns = [
    path('add_news/', AddNews.as_view(), name= 'add_news'),
]