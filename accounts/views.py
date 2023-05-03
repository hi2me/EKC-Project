from django.shortcuts import render, redirect
from django.views import View

# Create your views here.
from.models import MyUser 
from.forms import StaffUserCreationForm, MyUserRegistrationForm


class Register(View):
    def get (self, request):

        form = StaffUserCreationForm
        print (self.request.user.is_authenticated)
        return render (request, 'reg.html', {'form':form})
    
    def post(self, request): 
        
        form = StaffUserCreationForm(request.POST, request.FILES )
        if form.is_valid():
            register = form.save(commit=False)
            register.save()
            return render ( request, 'reg.html', {'form':form, 'submitted': True})

class Log(View):
    def get (self, request):
        return render (request, 'log.html', {})