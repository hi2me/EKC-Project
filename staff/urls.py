

from django.urls import path
from .views import *

app_name = "staff"

urlpatterns = [
    path('', Staff.as_view(), name= 'index'),

    path('add_news/', AddNews.as_view(), name= 'add_news'),
    path('list_news/', ListNews.as_view(), name= 'list_news'),
    path('edit_news/<int:id>', EditNews.as_view(), name= 'edit_news'),
    path('delete_news/<int:id>', DeleteNews.as_view(), name= 'delete_news'),

    path('add_gallery/', AddGalley.as_view(), name= 'add_gallery'),
    path('list_gallery/', ListGallery.as_view(), name= 'list_gallery'),
    path('edit_gallery/<int:id>', EditGallery.as_view(), name= 'edit_gallery'),
    path('delete_gallery/<int:id>', DeleteGallery.as_view(), name= 'delete_gallery'),

    path('add_event/', AddEvent.as_view(), name= 'add_event'),
    path('list_event/', ListEvent.as_view(), name= 'list_event'),
    path('edit_event/<int:id>', EditEvent.as_view(), name= 'edit_event'),
    path('delete_event/<int:id>', DeleteEvent.as_view(), name= 'delete_event'),

    path('add_research/', AddResearch.as_view(), name= 'add_research'),
    path('list_research/', ListResearch.as_view(), name= 'list_research'),
    path('edit_research/<int:id>', EditResearch.as_view(), name= 'edit_research'),
    path('delete_research/<int:id>', DeleteResearch.as_view(), name= 'delete_research'),

    path('list_call_app/', ListCallAppln.as_view(), name= 'list_call_app'),
    path('add_call_app/', AddCallAppln.as_view(), name= 'add_call_app'),
    path('edit_call_app/<int:id>', EditCallAppln.as_view(), name= 'edit_call_app'),
    path('delete_call_app/<int:id>', DeleteCallAppln.as_view(), name= 'delete_call_app'),
    
    path('list_call_sub/<int:id>', ListCallSubmn.as_view(), name= 'list_call_sub'),
    path('detail_call_sub/<int:id>', DetailCallSubmn.as_view(), name= 'detail_call_sub'),
    
    path('list_report/', ListReport.as_view(), name= 'list_report'),
    path('add_report/', AddReport.as_view(), name= 'add_report'),
    path('edit_report/<int:id>', EditReport.as_view(), name= 'edit_report'),
    path('delete_report/<int:id>', DeleteReport.as_view(), name= 'delete_report'),
    
    path('list_feedback/', ListFeedback.as_view(), name= 'list_feedback'),
    path('detail_feedback/<int:id>', DetailFeedback.as_view(), name= 'detail_feedback'),
    
    path('list_team/', ListTeam.as_view(), name= 'list_team'),
    path('add_team/', AddTeam.as_view(), name= 'add_team'),
    path('edit_team/<int:id>', EditTeam.as_view(), name= 'edit_team'),
    path('activate_team/<int:id>', ActivateTeam.as_view(), name= 'activate_team'),
    path('delete_team/<int:id>', DeleteTeam.as_view(), name= 'delete_team'),
    
    path('list_staff/', ListStaff.as_view(), name= 'list_staff'),
    path('detail_staff/<int:id>', DetailStaff.as_view(), name= 'detail_staff'),
    path('activate_staff/<int:id>', ActivateStaff.as_view(), name= 'activate_staff'),
    path('delete_staff/<int:id>', DeleteStaff.as_view(), name= 'delete_staff'),
    
    path('list_subscriber/', ListSubscribers.as_view(), name= 'list_subscriber'),


]