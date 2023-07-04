from django.shortcuts import render, redirect
from django.contrib.auth import authenticate,  login, logout, get_user_model
from django.contrib import messages
from django.views import View
from django.contrib.auth.forms import AuthenticationForm
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.http import urlsafe_base64_encode
from django.core.mail import EmailMultiAlternatives, EmailMessage

# from django_email_verification import  send_email
# import six 

# Create your views here.
from .models import MyUser 
from.forms import StaffUserCreationForm, MyUserRegistrationForm



#  Email Activation 

class AccountActivationTokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return six.text_type(user.id) + six.text_type(timestamp) + six.text_type(user.is_active)

account_activation_token = AccountActivationTokenGenerator()



def activate(request, uidb64, token):
        messages.success(request, 'ur email is verified')
        return redirect ('home')



def activateEmail(request, user, to_email):
    mail_subject = 'activate ur acct.'
    message = render_to_string('mail.html', {
        'user': user.full_name,
        'domain': get_current_site(request).domain,
        'uid':urlsafe_base64_encode(force_bytes(user.id)),#encode self.user id
        'token':account_activation_token.make_token(user),
        'protocol':'https' if request.is_secure() else 'http'
        
    })
    to_email = user.email
    email = EmailMessage(mail_subject, message, 'compacct01@gmail.com', to=[to_email],)
    if email.send():
        messages.success(request, f'dear {user}, go to ur mail {to_email} and click z link to confirm your account')
    else:
        messages.error(request, f'dear {user}, we cant send mail to {to_email} ')



# class ConfirmEmail(View):
#     def get(self, request, uidb64, token):
#         form = MyUserRegistrationForm(request.POST, request.FILES )
#         email = form.email
#         user = MyUser.objects.get(email = email)
#         user.is_active = True
#         user.save
#         messages.success(request, 'ur email is verified')
#         return redirect ('home')

class Register(View):
    def get (self, request):

        form = StaffUserCreationForm
        print (self.request.user.is_authenticated)
        return render (request, 'accounts/reg.html', {'form':form})
    
    def post(self, request): 
        
        form = StaffUserCreationForm(request.POST, request.FILES )
        if form.is_valid():
            user = form.save(commit=False)
            user.save()
            activateEmail(request, user, form.cleaned_data.get('email'))
            return render ( request, 'accounts/reg.html', {'form':form, 'submitted': True})

class Login(View):
    def get (self, request):
        user = self.request.user
        if  user.is_authenticated:
            return redirect("/")
        return render (request, 'accounts/login.html', {})
    
    def post (self, request):
        user = self.request.user
        email = request.POST.get('email')
        password = request.POST.get('password')
        form = AuthenticationForm(request)
        user = authenticate(request, username = email, password = password)
        
        if user is not None:
            login(request, user)        
            messages.success(request, f'welcome back to EKC')
            return redirect("/")
    
        else:
            messages.warning(request, 'Email or password is wrong!',)
            return render(request, 'accounts/login.html', {'form':form})


        # return render(request, 'front/registration/login.html', {'form':AuthenticationForm})

    

class Logout(View):
    def get(self, request):
        logout(self.request)
        messages.success(request, 'you have successfully loggedout.')
        return render ( request, 'accounts/login.html', {'loggedout': True})
    







# def sendEmail(request):
#     password = request.POST.get('password')
#     email = request.POST.get('email')
#     user = MyUser.objects.create( email = email, password = password)
#     send_email(user)
#     return render(request, 'confirm.html')



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