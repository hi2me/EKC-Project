

from django.urls import path
from .views import *

app_name = "staff"

urlpatterns = [
    path('', Staff.as_view(), name= 'index'),
    path('add_news/', AddNews.as_view(), name= 'add_news'),
    path('add_gallery/', AddGalley.as_view(), name= 'add_gallery'),
    path('add_event/', AddEvent.as_view(), name= 'add_event'),
]