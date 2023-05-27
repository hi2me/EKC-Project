from django.shortcuts import render
from django.views import View

from .models import *
from .forms import *

class AddNews(View):
    def get( self, request):
        form = NewsForm

        context = {'form': form}
        return render (request, 'staff/add_news.html', context )
    
    def post ( self, request):
        form = NewsForm(request.POST, request.FILES )
        if form.is_valid():
            news = form.save(commit=False)
            news.created_by = self.request.user
            news.save()

        context = {'form': form, 'submitted':True}
        return render (request, 'staff/add_news.html', context )
