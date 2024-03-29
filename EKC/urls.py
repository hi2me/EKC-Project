"""EKC URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from accounts.views import Register, Login, Logout
from front.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Home.as_view(), name='home'),
    path('about_us/', About_us.as_view(), name='about_us'),
    path('service/', Service.as_view(), name='service'),
    path('team/', Teams.as_view(), name='team'),
    path('publications/', Publication.as_view(), name='publication'),
    path('report/', Reports.as_view(), name='report'),
    path('call_application/', CallApplication.as_view(), name='call_application'),
    path('call_submission/<int:id>/', CallSubmission.as_view(), name='call_submission'),
    path('blog/<str:type>/', News_Gallery.as_view(), name='blog'),
    path ('news_search/', NewsSearch.as_view(), name='news_search'),
    path ('news_by_category/<int:id>', NewsByCategory.as_view(), name='news_by_category'),
    path('news_detail/<int:id>/', NewsDetail.as_view(), name='news_detail'),
    path('events/<str:type>/', Events.as_view(), name='event'),
    path('contact_us/', Contact_us.as_view(), name='contact_us'),


    #from other apps

    path('accounts/', include('accounts.urls'),),
    path('staff/', include('staff.urls'),)
]


urlpatterns+= static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
urlpatterns+= static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)