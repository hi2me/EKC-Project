

from django.urls import path
from .views import *

app_name = "staff"

urlpatterns = [
    path('', Staff.as_view(), name= 'index'),

    path('add_news/', AddNews.as_view(), name= 'add_news'),
    path('list_news/', ListNews.as_view(), name= 'list_news'),
    path('edit_news/<int:id>', EditNews.as_view(), name= 'edit_news'),

    path('add_gallery/', AddGalley.as_view(), name= 'add_gallery'),
    path('list_gallery/', ListGallery.as_view(), name= 'list_gallery'),
    path('edit_gallery/<int:id>', EditGallery.as_view(), name= 'edit_gallery'),

    path('add_event/', AddEvent.as_view(), name= 'add_event'),
    path('list_event/', ListEvent.as_view(), name= 'list_event'),
    path('edit_event/<int:id>', EditEvent.as_view(), name= 'edit_event'),

    path('add_research/', AddEvent.as_view(), name= 'add_research'),
    path('list_research/', ListNews.as_view(), name= 'list_research'),
    path('edit_research/<int:id>', EditNews.as_view(), name= 'edit_research'),


]