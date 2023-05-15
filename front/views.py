from django.shortcuts import render
from django.views import View
# Create your views here.



class Home(View):
    def get( self, request):
        return render (request, 'index.html', {})
    

class About_us(View):
    def get( self, request):
        return render (request, 'front/about.html', {})
    

class Publication(View):
    def get( self, request):
        return render (request, 'front/publication.html', {})

class Team(View):
    def get( self, request):
        return render (request, 'front/team.html', {})

class News_Gallery(View):
    def get( self, request, type):
        if type == 'news':
            return render (request, 'front/news.html', {})
        else:
            return render (request, 'front/gallery.html', {})
            
    

class Event(View):
    def get( self, request, type):
        if type == 'up_coming':
            return render (request, 'front/event.html', {})
        else:
            return render (request, 'front/event.html', {})
    

class Contact_us(View):
    def get( self, request):
        return render (request, 'front/contact.html', {})
    
