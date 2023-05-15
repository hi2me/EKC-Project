from django.shortcuts import render, redirect
from django.contrib.auth import authenticate,  login, logout, get_user
from django.views import View
from django.contrib.auth.forms import AuthenticationForm

# Create your views here.
from.models import MyUser 
from.forms import StaffUserCreationForm, MyUserRegistrationForm


class Register(View):
    def get (self, request):

        form = StaffUserCreationForm
        print (self.request.user.is_authenticated)
        return render (request, 'accounts/reg.html', {'form':form})
    
    def post(self, request): 
        
        form = StaffUserCreationForm(request.POST, request.FILES )
        if form.is_valid():
            register = form.save(commit=False)
            register.save()
            return render ( request, 'accounts/reg.html', {'form':form, 'submitted': True})

class Login(View):
    def get (self, request):
        print(self.request.user.is_authenticated)
        return render (request, 'accounts/login.html', {})
    
    def post (self, request):
        user = self.request.user
        email = request.POST.get('email')
        password = request.POST.get('password')
        form = AuthenticationForm(request)
        user = authenticate(request, username = email, password = password)
        
        if user is not None:
            login(request, user)
            # printer("login_log.txt", f"{user} Logged in @ {timezone.now()}")
    
        # else:
        #     # messages.warning(request, 'Email or password is wrong!',)
        #     # return render(request, 'front/registration/login.html', {'form':form})


        return render ( request, 'accounts/login.html', {'form':AuthenticationForm, 'loggedin': True})
        # return render(request, 'front/registration/login.html', {'form':AuthenticationForm})

    

class Logout(View):
    def get(self, request):
        logout(self.request)
        return render ( request, 'accounts/login.html', {'loggedout': True})

# def login_redirects(request):
#     user = request.user
#     if user.status == 'Active': 
#         if user.is_staff : return redirect ('staff:index')
#         else : 
#             if user.role == "Seller": return redirect("seller:index") 
#             return redirect('accounts:my_account')
    
#     elif user.status == 'Email Confirmation' : return redirect ('accounts:confirm_email', email=user.email)
    
#     elif user.status == 'Company Info' : return redirect('accounts:company_info')
    
#     elif user.status == 'User Info' : return redirect('accounts:user_info')   
    
#     elif user.status == 'Payment' : return redirect('accounts:complete_payment')

#     elif user.status == 'Pending' : 
#         messages.success(request, "Your account is at Pending status since your request is being verified. Stay tuned, we will get back to you.")
#         return redirect('/')
    
#     elif user.status in  [ 'Suspended' ]: # need account activation (for staff accounts only)
#         logout(request)
#         messages.warning(request, f'Please complete your registration, you are in {user.status} status')
#         return render(request, "front/registration/message_page.html")




# def Login(request):
#         user = request.user
        
#         if request.method == 'POST':
#             email = request.POST.get('email')
#             password = request.POST.get('password')
#             form = AuthenticationForm(request)
#             user = authenticate(request, username = email, password = password)
            
#             if user is not None:
#                 login(request, user)
#                 printer("login_log.txt", f"{user} Logged in @ {timezone.now()}")
#                 path:str = request.get_full_path()
#                 #for logging and adding service
#                 if 'add_service' in path:
#                     return add_packages(request)
#                 elif 'next=' in path:
#                     path = path.split("next=")[1]
#                     return redirect(path)
#                 return login_redirects(request)
        
#             else:
#                 messages.warning(request, 'Email or password is wrong!',)
#                 return render(request, 'front/registration/login.html', {'form':form})


#         return render(request, 'front/registration/login.html', {'form':AuthenticationForm})