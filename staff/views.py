from django.shortcuts import render, redirect
from django.views import View
from django.contrib import messages

from .models import *
from .forms import *


class Staff(View):
    def get( self, request):

        context = {}
        return render (request, 'staff/index.html', context )
    

class AddNews(View):
    def get( self, request):
        form = NewsForm

        context = {'form': form}
        print("get is working")
        return render (request, 'staff/add_news.html', context )
    
    def post ( self, request):
        print("post is  working")
        form = NewsForm(request.POST, request.FILES )
        if form.is_valid():
            news = form.save(commit=False)
            news.created_by = self.request.user
            news.save()

            context = {'form': form, 'submitted':True}
            messages.success(self.request, "You have successfully added a news.")
            return redirect( 'blog', type='news')
        else:
            messages.error(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_news.html', context )


class AddGalley(View):
    def get( self, request):
        form = GalleryForm

        context = {'form': form}
        return render (request, 'staff/add_gallery.html', context )
    
    def post ( self, request):
        form = GalleryForm(request.POST, request.FILES )
        if form.is_valid():
            gallery = form.save(commit=False)
            gallery.created_by = self.request.user
            gallery.save()

            context = {'form': form, 'submitted':True}
            messages.success(self.request, "You have successfully added an image to the gallery.")
            return redirect( 'blog', type='gallery')
        else:
            messages.error(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_gallery.html', context )
    

class AddEvent(View):
    def get( self, request):
        form = EventForm

        context = {'form': form}
        return render (request, 'staff/add_event.html', context )
    
    def post ( self, request):
        form = EventForm(request.POST, request.FILES )
        if form.is_valid():
            event = form.save(commit=False)
            event.created_by = self.request.user
            event.save()

            context = {'form': form, 'submitted':True}
            messages.success(self.request, "You have successfully added a new event.")
            return redirect( 'event', type='up_coming')
        else:
            messages.error(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_event.html', context )