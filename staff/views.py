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
            return redirect( 'staff:list_news')
        else:
            messages.error(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_news.html', context )

class ListNews(View):
    def get(self, request):
        news=News.objects.all()
        return render (request, 'staff/list_news.html', {'news':news})

class EditNews(View):
    def get( self, request, id):
        news = News.objects.get(id=id)
        form = NewsForm(instance=news)

        context = {'form': form, 'news':news,'edit':True}
        return render (request, 'staff/add_news.html', context )
    
    def post ( self, request, id):
        news = News.objects.get(id=id)
        form = NewsForm(instance=news, data=self.request.POST, files=self.request.FILES)
        if form.is_valid():
            news.save()

            context = {'form': form, 'edit':True, }
            messages.success(self.request, "You have successfully updated a news.")
            return redirect( 'staff:list_news')
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
            return redirect( 'staff:list_gallery')
        else:
            messages.error(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_gallery.html', context )

class ListGallery(View):
    def get(self, request):
        gallery=Gallery.objects.all()
        return render (request, 'staff/list_gallery.html', {'gallery':gallery}) 

class EditGallery(View):
    def get( self, request, id):
        gallery = Gallery.objects.get(id=id)
        form = GalleryForm(instance=gallery)

        context = {'form': form, 'gallery':gallery,'edit':True}
        return render (request, 'staff/add_gallery.html', context )
    
    def post ( self, request, id):
        gallery = Gallery.objects.get(id=id)
        form = GalleryForm(instance=gallery, data=self.request.POST, files=self.request.FILES)
        if form.is_valid():
            gallery.save()

            context = {'form': form, 'edit':True, }
            messages.success(self.request, "You have successfully updated a gallery Image.")
            return redirect( 'staff:list_gallery')
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
        
class ListEvent(View):
    def get(self, request):
        event=Event.objects.all()
        return render (request, 'staff/list_event.html', {'event':event}) 

class EditEvent(View):
    def get( self, request, id):
        event = Event.objects.get(id=id)
        form = EventForm(instance=event)

        context = {'form': form, 'event':event,'edit':True}
        return render (request, 'staff/add_event.html', context )
    
    def post ( self, request, id):
        event = Event.objects.get(id=id)
        form = EventForm(instance=event, data=self.request.POST, files=self.request.FILES, date=self.request.DATE )
        if form.is_valid():
            event.save()

            context = {'form': form, 'edit':True, }
            messages.success(self.request, "You have successfully updated an event.")
            return redirect( 'staff:list_event')
        else:
            messages.error(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_event.html', context )


