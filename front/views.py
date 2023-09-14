from django.shortcuts import render, redirect
from django.views import View
from django.core.paginator import Paginator
from django.contrib import messages
from django.core.mail import send_mail
from django.utils.timezone import datetime
import pytz
from django.db.models import Q

from staff.models import *
from staff.forms import *

class Home(View):
    def get( self, request):
        news = News.objects.all()
        feedback = Feedback.objects.filter(show=True)
        context = {'index':True, 'news':news,  'feedback':feedback}
        return render (request, 'index.html', context )
    

class About_us(View):
    def get( self, request):

        context = {}
        return render (request, 'front/about.html', context)
    
class Service(View):
    def get( self, request):

        context = {}
        return render (request, 'front/service.html', context)
    

class Publication(View):
    def get( self, request):
        publication = PublicationAndResearch.objects.filter(approved = True)

        p = Paginator(publication, 5)
        page = self.request.GET.get('page')
        publication_list = p.get_page(page)

        context = {'pub':publication_list}
        return render (request, 'front/publication.html', context)
    

class Reports(View):
    def get( self, request):
        report = Report.objects.filter(approved = True)

        p = Paginator(report, 6)
        page = self.request.GET.get('page')
        report_list = p.get_page(page)

        context = {'report':report_list}
        return render (request, 'front/report.html', context)
    

class CallApplication(View):
    def get( self, request):
        call = CallOfApplication.objects.filter(status = 'Active')

        p = Paginator(call, 5)
        page = self.request.GET.get('page')
        call_list = p.get_page(page)

        context = {'call':call_list}
        return render (request, 'front/call.html', context)
    

class CallSubmission(View):
    def get( self, request, id):
        call = CallOfApplication.objects.get(id=id)
        form = CallSubmissionForm

        context = {'form': form, 'call':call}
        print("get is working")
        return render (request, 'front/call_sub.html', context )
    
    def post ( self, request, id):
        print("post is  working")
        call = CallOfApplication.objects.get(id=id)
        form = CallSubmissionForm(request.POST, request.FILES )
        if form.is_valid():
            sub = form.save(commit=False)
            sub.title= call
            sub.save()

            context = {'form': form, 'submitted':True}
            messages.success(self.request, "You have successfully submitted your credentials to the the application. ")
            return redirect( 'call_submission', id=id)
        else:
            context = {'form': form, 'submitted':False}
            messages.warning(self.request, "Please check your inputs again.")
            return render (request, 'front/call_sub.html', context )
    


class Teams(View):
    def get( self, request):
        team=Team.objects.filter(is_active=True)

        context = {'team':team }
        return render (request, 'front/team.html', context)

class News_Gallery(View):

    def get( self, request, type):
        if type == 'news':
            news = News.objects.all()

            category = NewsCategory.objects.all()
            

            p = Paginator(news, 6)
            page = self.request.GET.get('page')
            news_list = p.get_page(page)

            context = {'news':news_list, 'category':category,  }
            return render (request, 'front/news.html', context)
        else:
            gallery = Gallery.objects.all()
            gallery2 = Gallery_Image.objects.all()
            
            p = Paginator(gallery, 10)
            page = self.request.GET.get('page')
            gallery_list = p.get_page(page)

            context = {'gallery':gallery_list, 'gallery2':gallery2}
            return render (request, 'front/gallery.html', context)
    def post (self,request, type ):
        if type == 'news':
            if 'email' in self.request.POST:
                email = self.request.POST ['email']

                visitor,created= Visitors.objects.get_or_create(email = email)
                if not created:
                    messages.warning(self.request, "This email already exists!")
                else:
                    messages.success(self.request, "You have successfully subscribed to EKCC News.")
            else:
                messages.warning (self.request, "Please enter your email first")
            
            return redirect ('/blog/news/')

class NewsSearch (View):
    def get (self, request ):
        if 'search' in self.request.GET:
            searched_news_term = self.request.GET ['search']
            news= News.objects.filter(Q(title__icontains = searched_news_term) | Q(category__name__icontains=searched_news_term),)
            
            category = NewsCategory.objects.all()

            p = Paginator(news, 6)
            page = self.request.GET.get('page')
            news_list = p.get_page(page)

            context = {'news':news_list, 'category':category, 'term':searched_news_term, 'search':True }
            return render (request, 'front/news.html', context)
        
class NewsByCategory (View):
    def get (self, request, id):
        news_cat = NewsCategory.objects.all()
        news = News.objects.filter(  category=id )

        p = Paginator(news, 6)
        page = self.request.GET.get('page')
        news_list = p.get_page(page)

        context = {'news':news_list, 'category':news_cat,  }
        return render (request, 'front/news.html', context)

class NewsDetail(View):
    def get( self, request, id):
        news = News.objects.get(id = id)
        news_list = News.objects.filter( category = news.category)
        category = NewsCategory.objects.all()

        context = {'news':news, 'news_list':news_list, 'category':category}
        return render (request, 'front/news_detail.html', context)


def subscribersNotificationEmail(request, user, to_email):
    mail_subject = 'We have posted .'
    message = render_to_string('accounts/mail.html', {
        'user': user.full_name,
        'domain': get_current_site(request).domain,
        'uid':urlsafe_base64_encode(force_bytes(user.id)),#encode self.user id
        'token':account_activation_token.make_token(user),
        'id':user.id,
        'protocol':'https' if request.is_secure() else 'http'
        
    })
    to_email = user.email
    email = EmailMultiAlternatives(mail_subject, message, 'compacct01@gmail.com', to=[to_email],)
    email.attach_alternative(message, 'text/html')
    if email.send():
        user.status='Email_Confirmation'
        user.save()
        messages.success(request, f'dear {user}, please go to ur mail {to_email} and click z link to confirm your account')
    else:
        messages.warning(request, f'dear {user}, we cant send mail to {to_email} ')



class Events(View):
    def get( self, request, type):
        if type == 'up_coming':
            event = Event.objects.filter( status = 'upcoming event')
            p = Paginator(event, 6)
            page = self.request.GET.get('page')
            event_list = p.get_page(page)
            context = {'event':event_list, 'type':'Up Coming'}
            return render (request, 'front/event.html', context)
        else:
            
            event = Event.objects.filter( status = 'past event')
            p = Paginator(event, 6)
            page = self.request.GET.get('page')
            event_list = p.get_page(page)

            context = {'event':event_list, 'type':'Past'}
            return render (request, 'front/event.html', context)
    

class Contact_us(View):
    def get( self, request):

        context = {}
        return render (request, 'front/contact.html', context)
    
    def post(self, request):
        form = FeedbackForm(data = request.POST  )
        if form.is_valid():
            data = form.save()

            # send_mail( f"You have received an email from  {data.name}", data.message, data.email, ['compacct01@gmail.com']
            # )
            messages.success(self.request, "You have successfully sent our comment to the EKCC.")
            context= { 'form':form }
            return redirect('contact_us')
        else:
            return render(request, 'contact.html', context)

    
    
