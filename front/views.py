from django.shortcuts import render
from django.views import View

from staff.models import *

class Home(View):
    def get( self, request):
        news = News.objects.all()

        context = {'index':True, 'news':news}
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

        context = {}
        return render (request, 'front/publication.html', context)

class Team(View):
    def get( self, request):

        context = {}
        return render (request, 'front/team.html', context)

class News_Gallery(View):
    def get( self, request, type):
        if type == 'news':
            news = News.objects.all()
            context = {'news':news}
            return render (request, 'front/news.html', context)
        else:

            context = {}
            return render (request, 'front/gallery.html', context)
            


class NewsDetail(View):
    def get( self, request, id):
        news = News.objects.get(id = id)
        news_list = News.objects.all()

        context = {'news':news, 'news_list':news_list}
        return render (request, 'front/news_detail.html', context)

class Event(View):
    def get( self, request, type):
        if type == 'up_coming':

            context = {}
            return render (request, 'front/event.html', context)
        else:

            context = {}
            return render (request, 'front/event.html', context)
    

class Contact_us(View):
    def get( self, request):

        context = {}
        return render (request, 'front/contact.html', context)
    
