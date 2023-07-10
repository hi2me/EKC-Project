


from django.urls import path, include
from . import views
from .views import Register, Login, Logout

app_name = "accounts"

urlpatterns = [
    path('register/', Register.as_view(), name= 'register'),
    path('login/', Login.as_view(), name='login'),
    path('logout/', Logout.as_view(), name='logout'),
    path('activate/<uidb64>/<token>/<id>', views.activate, name='activate'),

   
]