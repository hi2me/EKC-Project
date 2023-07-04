from django.shortcuts import render, redirect
from django.views import View
from django.core.paginator import Paginator
from django.contrib import messages
from django.core.mail import send_mail

from staff.models import *
from staff.forms import *

class Home(View):
    def get( self, request):
        news = News.objects.all()
        # team = Team.objects.filter(staff = True)
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
            messages.error(self.request, "Please check your inputs again.")
            return render (request, 'front/call_sub.html', context )
    


class Team(View):
    def get( self, request):

        context = {}
        return render (request, 'front/team.html', context)

class News_Gallery(View):
    def get( self, request, type):
        if type == 'news':
            news = News.objects.all()

            category = NewsCategory.objects.all()

            c= News.objects.filter(category = 2 ).count()
            
            
            

            p = Paginator(news, 6)
            page = self.request.GET.get('page')
            news_list = p.get_page(page)

            context = {'news':news_list, 'category':category, 'c':c}
            return render (request, 'front/news.html', context)
        else:
            gallery = Gallery.objects.all()
            gallery2 = Gallery_Image.objects.all()
            
            p = Paginator(gallery, 10)
            page = self.request.GET.get('page')
            gallery_list = p.get_page(page)

            context = {'gallery':gallery_list, 'gallery2':gallery2}
            return render (request, 'front/gallery.html', context)
            


class NewsDetail(View):
    def get( self, request, id):
        news = News.objects.get(id = id)
        news_list = News.objects.all()

        context = {'news':news, 'news_list':news_list}
        return render (request, 'front/news_detail.html', context)

class Events(View):
    def get( self, request, type):
        if type == 'up_coming':
            event = Event.objects.all()

            p = Paginator(event, 6)
            page = self.request.GET.get('page')
            event_list = p.get_page(page)

            context = {'event':event_list}
            return render (request, 'front/event.html', context)
        else:

            context = {}
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
            messages.success(self.request, "You have successfully sent our comment to the EKC.")
            context= { 'form':form }
            return redirect('contact_us')
        else:
            return render(request, 'contact.html', context)

    
    
