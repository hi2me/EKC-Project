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
from accounts.views import Register, Login, Logout
from front.views import Home,About_us,Service,Publication,Team,News_Gallery,Event,Contact_us

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Home.as_view(), name='home'),
    path('about_us/', About_us.as_view(), name='about_us'),
    path('service/', Service.as_view(), name='service'),
    path('publications', Publication.as_view(), name='publication'),
    path('team', Team.as_view(), name='team'),
    path('blog/<str:type>/', News_Gallery.as_view(), name='blog'),
    path('events/<str:type>/', Event.as_view(), name='event'),
    path('contact_us/', Contact_us.as_view(), name='contact_us'),

    #from other apps

    path('accounts/', include('accounts.urls'),),
    path('staff/', include('staff.urls'),)
]
