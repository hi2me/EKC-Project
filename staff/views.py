from django.shortcuts import render, redirect
from django.views import View
from django.contrib import messages

from .models import *
from .forms import *


class Staff(View):
    def get( self, request):
        research = PublicationAndResearch.objects.all().count()
        call = CallOfApplication.objects.all().count()
        event = Event.objects.all().count()
        submission = CallOfSubmission.objects.all().count()
        users = MyUser.objects.all().count()
        call = CallOfApplication.objects.all()
        feedback = Feedback.objects.all()


        # sub= CallOfSubmission.objects.all()
        # for su in sub:
        #     print(su.title)

        # dic= {} 

        # for c in call:
        #     for s in sub:
        #         if s.title == c:
        #             key=s.title
        #             value = CallOfSubmission.objects.filter(title=c).count()
        #             # dic.save()
        #             print("@@@@@@@@@@@@@@@@@@@@@@@@@@@@",dic[key:value])
        #         else:
        #             print("%%%%%%%%%%%%%%%%%%%%%%%%")
                    


        # c= CallOfApplication.objects.get(id=1)
        # s=CallOfSubmission.objects.filter(title=c).count()
        # print("########################", s)

        context = {'research':research,'call':call,'event':event,'submission':submission,'users':users,'feedback':feedback}
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
        

class DeleteNews (View):
    def get (self, request, id):
        news = News.objects.get(id=id)
        news.delete()
        messages.success(request, "You have successfully deleted a news")
        return redirect ( 'staff:list_news')




class AddGalley(View):
    def get( self, request):
        form = GalleryForm
        form2=Galley_ImageForm

        context = {'form': form, 'form2':form2}
        return render (request, 'staff/add_gallery.html', context )
    
    def post ( self, request):
        form = GalleryForm(request.POST, request.FILES )
        form2 = Galley_ImageForm( files= self.request.FILES,  )
        if form.is_valid():
            gallery = form.save(commit=False)
            
            gallery.created_by = self.request.user
            gallery.save()
            
            images = self.request.FILES.getlist ('image')
            for img in images:
                img=Gallery_Image.objects.create( image=img, title=gallery )
                img.save() 


            context = {'form': form, 'form2':form2, 'submitted':True}
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
        form2=Galley_ImageForm

        context = {'form': form, 'form2':form2, 'gallery':gallery,'edit':True}
        return render (request, 'staff/add_gallery.html', context )
    
    def post ( self, request, id):
        gallery = Gallery.objects.get(id=id)
        form = GalleryForm(instance=gallery, data=self.request.POST, files=self.request.FILES)
        form2=Galley_ImageForm(instance=gallery, data=self.request.POST, files=self.request.FILES)
        if form.is_valid():
            gallery.save()

            context = {'form': form,'form2':form2, 'edit':True, }
            messages.success(self.request, "You have successfully updated a gallery Image.")
            return redirect( 'staff:list_gallery')
        else:
            messages.error(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_gallery.html', context )


class DeleteGallery (View):
    def get (self, request, id):
        gallery = Gallery.objects.get(id=id)
        gallery.delete()
        messages.success(request, "You have successfully deleted a gallery")
        return redirect ( 'staff:list_gallery')




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


class DeleteEvent (View):
    def get (self, request, id):
        event = Event.objects.get(id=id)
        event.delete()
        messages.success(request, "You have successfully deleted an event")
        return redirect ( 'staff:list_event')




class ListResearch(View):
    def get(self, request):
        research=PublicationAndResearch.objects.all()
        return render (request, 'staff/list_research.html', {'research':research}) 
    
    
class AddResearch(View):
    def get( self, request):
        form = ResearchForm

        context = {'form': form}
        return render (request, 'staff/add_research.html', context )
    
    def post ( self, request):
        form = ResearchForm(request.POST, request.FILES )
        if form.is_valid():
            research = form.save(commit=False)
            research.save()

            context = {'form': form, 'submitted':True}
            messages.success(self.request, "You have successfully added a new research.")
            return redirect( 'staff:list_research')
        else:
            messages.error(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_research.html', context )


class EditResearch(View):
    def get( self, request, id):
        research = PublicationAndResearch.objects.get(id=id)
        form = ResearchForm(instance=research)

        context = {'form': form, 'research':research,'edit':True}
        return render (request, 'staff/add_research.html', context )
    
    def post ( self, request, id):
        research = PublicationAndResearch.objects.get(id=id)
        form = ResearchForm(instance=research, data=self.request.POST, files=self.request.FILES, )
        if form.is_valid():
            research.save()

            context = {'form': form, 'edit':True, }
            messages.success(self.request, "You have successfully updated a research.")
            return redirect( 'staff:list_research')
        else:
            messages.error(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_research.html', context )


class DeleteResearch (View):
    def get (self, request, id):
        research = PublicationAndResearch.objects.get(id=id)
        research.delete()
        messages.success(request, "You have successfully deleted a research")
        return redirect ( 'staff:list_research')




class ListCallAppln(View):
    def get(self, request):
        call=CallOfApplication.objects.all()
        return render (request, 'staff/list_application.html', {'call':call}) 
    
    
class AddCallAppln(View):
    def get( self, request):
        form = CallApplicationForm

        context = {'form': form}
        return render (request, 'staff/add_call_app.html', context )
    
    def post ( self, request):
        form = CallApplicationForm(request.POST, request.FILES )
        if form.is_valid():
            call = form.save(commit=False)
            call.save()

            context = {'form': form, 'submitted':True}
            messages.success(self.request, "You have successfully added a new call of application.")
            return redirect( 'staff:list_call_app')
        else:
            messages.error(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_call_app.html', context )
        

class EditCallAppln(View):
    def get( self, request, id):
        call = CallOfApplication.objects.get(id=id)
        form = CallApplicationForm(instance=call)

        context = {'form': form, 'call':call,'edit':True}
        return render (request, 'staff/add_call_app.html', context )
    
    def post ( self, request, id):
        call = CallOfApplication.objects.get(id=id)
        form = CallApplicationForm(instance=call, data=self.request.POST, files=self.request.FILES, )
        if form.is_valid():
            call.save()

            context = {'form': form, 'edit':True, }
            messages.success(self.request, "You have successfully updated the application.")
            return redirect( 'staff:list_call_app')
        else:
            messages.error(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_call_app.html', context )


class DeleteCallAppln (View):
    def get (self, request, id):
        call = CallOfApplication.objects.get(id=id)
        call.delete()
        messages.success(request, "You have successfully deleted an application")
        return redirect ( 'staff:list_call_app')



class ListReport(View):
    def get(self, request):
        report=Report.objects.all()
        return render (request, 'staff/list_report.html', {'report':report}) 
    
   
class AddReport(View):
    def get( self, request):
        form = ReportForm

        context = {'form': form}
        return render (request, 'staff/add_report.html', context )
    
    def post ( self, request):
        form = ReportForm(request.POST, request.FILES )
        if form.is_valid():
            report = form.save(commit=False)
            report.save()

            context = {'form': form, 'submitted':True}
            messages.success(self.request, "You have successfully added a new Report.")
            return redirect( 'staff:list_report')
        else:
            messages.error(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_report.html', context )
        

class EditReport(View):
    def get( self, request, id):
        report = Report.objects.get(id=id)
        form = ReportForm(instance=report)

        context = {'form': form, 'report':report,'edit':True}
        return render (request, 'staff/add_report.html', context )
    
    def post ( self, request, id):
        report = Report.objects.get(id=id)
        form = ReportForm(instance=report, data=self.request.POST, files=self.request.FILES, )
        if form.is_valid():
            report.save()

            context = {'form': form, 'edit':True, }
            messages.success(self.request, "You have successfully updated the report.")
            return redirect( 'staff:list_report')
        else:
            messages.error(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_report.html', context ) 
        

class DeleteReport (View):
    def get (self, request, id):
        report = Report.objects.get(id=id)
        report.delete()
        messages.success(request, "You have successfully deleted a report")
        return redirect ( 'staff:list_report')




    
class ListFeedback(View):
    def get(self, request):
        feedback=Feedback.objects.all()
        return render (request, 'staff/list_feedback.html', {'feedback':feedback}) 
    
class DetailFeedback(View):
    def get (self, request, id):
        feedback = Feedback.objects.get(id=id)
        return render (request, 'staff/detail_feedback.html', {'feedback':feedback}) 
    def post(self, request, id):
        feedback = Feedback.objects.get(id=id)
        if feedback.show == False:
            feedback.show = True
            messages.success(self.request, "Feedback will be visible on website")
        else:
            feedback.show = False
            messages.success(self.request, "Feedback hidden from website")

        feedback.save()
        return redirect( 'staff:list_feedback')

