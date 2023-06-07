from django.shortcuts import render, redirect
from django.views import View
from django.core.paginator import Paginator
from django.contrib import messages
from django.core.mail import send_mail

from staff.models import *
from staff.forms import FeedbackForm

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

        p = Paginator(publication, 2)
        page = self.request.GET.get('page')
        publication_list = p.get_page(page)

        context = {'pub':publication_list}
        return render (request, 'front/publication.html', context)

class Team(View):
    def get( self, request):

        context = {}
        return render (request, 'front/team.html', context)

class News_Gallery(View):
    def get( self, request, type):
        if type == 'news':
            news = News.objects.all()

            p = Paginator(news, 2)
            page = self.request.GET.get('page')
            news_list = p.get_page(page)

            context = {'news':news_list}
            return render (request, 'front/news.html', context)
        else:
            gallery = Gallery.objects.all()
            
            p = Paginator(gallery, 5)
            page = self.request.GET.get('page')
            gallery_list = p.get_page(page)

            context = {'gallery':gallery_list}
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

            p = Paginator(event, 2)
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

            send_mail( f"You have received an email from  {data.name}", data.message, data.email, ['compacct01@gmail.com']
            )
            messages.success(self.request, "You have successfully sent our comment to the EKC.")
            context= { 'form':form }
            return redirect('contact_us')
        else:
            return render(request, 'contact.html', context)

    
    
