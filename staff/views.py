from django.shortcuts import render, redirect
from django.views import View
from django.contrib import messages
from django.contrib.auth.mixins import AccessMixin
from django.utils import timezone
from django.contrib.auth.decorators import login_required


from .models import *
from .forms import *
from accounts.forms import StaffUserCreationForm




class LoginRequiredMixin1(AccessMixin):
    """Verify that the current user is authenticated."""
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            messages.warning(self.request, 'Please log in First')
            return self.handle_no_permission()
        if not request.user.status == "Active":
            messages.warning(self.request, 'Your account is not verified by staff yet.')
            return redirect ('home')
        return super().dispatch(request, *args, **kwargs)
    



class StaffView( View):
    
    def get_user(self, request):
        user = request.user
        if user.is_authenticated:
            return True
        else:
            messages.warning(self.request, "Please log in first.")
            return render (request, 'account/login.html')
    

    

class Staff(LoginRequiredMixin1, View):
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


class AddNews(LoginRequiredMixin1, View):
    def get( self, request):
        form = NewsForm
        context = {'form': form}
        return render (request, 'staff/add_news.html', context )
    
    def post ( self, request):
        form = NewsForm(request.POST, request.FILES )
        if form.is_valid():
            news = form.save(commit=False)
            news.created_by = self.request.user
            if news.created_date == None:
                news.created_date = timezone.now()
            news.save()
            messages.success(self.request, "You have successfully added a news.")
            return redirect( 'staff:list_news')
        else:
            context = {'form': form, 'submitted':True}
            messages.warning(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_news.html', context )

class ListNews(LoginRequiredMixin1, View):
    def get(self, request):
        news=News.objects.all()
        return render (request, 'staff/list_news.html', {'news':news})

class EditNews(LoginRequiredMixin1, View):
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

            messages.success(self.request, "You have successfully updated a news.")
            return redirect( 'staff:list_news')
        else:
            context = {'form': form, 'edit':True, }
            
            messages.warning(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_news.html', context )
        

class DeleteNews (LoginRequiredMixin1, View):
    def get (self, request, id):
        news = News.objects.get(id=id)
        news.delete()
        messages.success(request, "You have successfully deleted a news")
        return redirect ( 'staff:list_news')




class AddGalley(LoginRequiredMixin1, View):
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


            messages.success(self.request, "You have successfully added an image to the gallery.")
            return redirect( 'staff:list_gallery')
        else:
            context = {'form': form, 'form2':form2, 'submitted':True}
            
            messages.warning(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_gallery.html', context )

class ListGallery(LoginRequiredMixin1, View):
    def get(self, request):
        gallery=Gallery.objects.all()
        return render (request, 'staff/list_gallery.html', {'gallery':gallery}) 

class EditGallery(LoginRequiredMixin1, View):
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

            messages.success(self.request, "You have successfully updated a gallery Image.")
            return redirect( 'staff:list_gallery')
        else:
            context = {'form': form,'form2':form2, 'edit':True, }
            messages.warning(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_gallery.html', context )


class DeleteGallery (LoginRequiredMixin1, View):
    def get (self, request, id):
        gallery = Gallery.objects.get(id=id)
        gallery.delete()
        messages.success(request, "You have successfully deleted a gallery")
        return redirect ( 'staff:list_gallery')




class AddEvent(LoginRequiredMixin1, View):
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

            messages.success(self.request, "You have successfully added a new event.")
            return redirect( 'staff:list_event')
        else:
            context = {'form': form, 'submitted':True}
            messages.warning(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_event.html', context )
        
class ListEvent(LoginRequiredMixin1, View):
    def get(self, request):
        event=Event.objects.all()
        return render (request, 'staff/list_event.html', {'event':event}) 

class EditEvent(LoginRequiredMixin1, View):
    def get( self, request, id):
        event = Event.objects.get(id=id)
        form = EventForm(instance=event)

        context = {'form': form, 'event':event,'edit':True}
        return render (request, 'staff/add_event.html', context )
    
    def post ( self, request, id):
        event = Event.objects.get(id=id)
        form = EventForm(instance=event, data=self.request.POST, files=self.request.FILES )
        if form.is_valid():
            event.save()
            messages.success(self.request, "You have successfully updated an event.")
            return redirect( 'staff:list_event')
        else:
            context = {'form': form, 'edit':True, }
            messages.warning(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_event.html', context )


class DeleteEvent (LoginRequiredMixin1, View):
    def get (self, request, id):
        event = Event.objects.get(id=id)
        event.delete()
        messages.success(request, "You have successfully deleted an event")
        return redirect ( 'staff:list_event')




class ListResearch(LoginRequiredMixin1, View):
    def get(self, request):
        research=PublicationAndResearch.objects.all()
        return render (request, 'staff/list_research.html', {'research':research}) 
    
    
class AddResearch(LoginRequiredMixin1, View):
    def get( self, request):
        form = ResearchForm

        context = {'form': form}
        return render (request, 'staff/add_research.html', context )
    
    def post ( self, request):
        form = ResearchForm(request.POST, request.FILES )
        if form.is_valid():
            research = form.save(commit=False)
            research.save()

            messages.success(self.request, "You have successfully added a new research.")
            return redirect( 'staff:list_research')
        else:
            context = {'form': form, 'submitted':True}
            messages.warning(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_research.html', context )


class EditResearch(LoginRequiredMixin1, View):
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

            messages.success(self.request, "You have successfully updated a research.")
            return redirect( 'staff:list_research')
        else:
            context = {'form': form, 'edit':True, }
            messages.warning(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_research.html', context )


class DeleteResearch (LoginRequiredMixin1, View):
    def get (self, request, id):
        research = PublicationAndResearch.objects.get(id=id)
        research.delete()
        messages.success(request, "You have successfully deleted a research")
        return redirect ( 'staff:list_research')




class ListCallAppln(LoginRequiredMixin1, View):
    def get(self, request):
        call=CallOfApplication.objects.all()
        return render (request, 'staff/list_application.html', {'call':call}) 
    
    
class AddCallAppln(LoginRequiredMixin1, View):
    def get( self, request):
        form = CallApplicationForm

        context = {'form': form}
        return render (request, 'staff/add_call_app.html', context )
    
    def post ( self, request):
        form = CallApplicationForm(request.POST, request.FILES )
        if form.is_valid():
            call = form.save(commit=False)
            call.save()

            messages.success(self.request, "You have successfully added a new call of application.")
            return redirect( 'staff:list_call_app')
        else:
            context = {'form': form, 'submitted':True}
            messages.warning(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_call_app.html', context )
        

class EditCallAppln(LoginRequiredMixin1, View):
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
            messages.success(self.request, "You have successfully updated the application.")
            return redirect( 'staff:list_call_app')
        else:
            context = {'form': form, 'edit':True, }
            messages.warning(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_call_app.html', context )


class DeleteCallAppln (LoginRequiredMixin1, View):
    def get (self, request, id):
        call = CallOfApplication.objects.get(id=id)
        call.delete()
        messages.success(request, "You have successfully deleted an application")
        return redirect ( 'staff:list_call_app')



class ListCallSubmn(LoginRequiredMixin1, View):
    def get(self, request, id):
        call = CallOfApplication.objects.get(id=id)
        sub=CallOfSubmission.objects.filter(title=call)
        return render (request, 'staff/list_submission.html', {'call':call, 'sub':sub}) 

class DetailCallSubmn(LoginRequiredMixin1, View):
    def get(self, request, id):
        sub = CallOfSubmission.objects.get(id=id)
        return render (request, 'staff/detail_submission.html', { 'sub':sub}) 


class ListReport(LoginRequiredMixin1, View):
    def get(self, request):
        report=Report.objects.all()
        return render (request, 'staff/list_report.html', {'report':report}) 
    
   
class AddReport(LoginRequiredMixin1, View):
    def get( self, request):
        form = ReportForm

        context = {'form': form}
        return render (request, 'staff/add_report.html', context )
    
    def post ( self, request):
        form = ReportForm(request.POST, request.FILES )
        if form.is_valid():
            report = form.save(commit=False)
            report.save()
            messages.success(self.request, "You have successfully added a new Report.")
            return redirect( 'staff:list_report')
        else:
            context = {'form': form, 'submitted':True}
            messages.warning(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_report.html', context )
        

class EditReport(LoginRequiredMixin1, View):
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
            messages.success(self.request, "You have successfully updated the report.")
            return redirect( 'staff:list_report')
        else:
            context = {'form': form, 'edit':True, }

            messages.warning(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_report.html', context ) 
        

class DeleteReport (LoginRequiredMixin1, View):
    def get (self, request, id):
        report = Report.objects.get(id=id)
        report.delete()
        messages.success(request, "You have successfully deleted a report")
        return redirect ( 'staff:list_report')




    
class ListFeedback(LoginRequiredMixin1, View):
    def get(self, request):
        feedback=Feedback.objects.all()
        return render (request, 'staff/list_feedback.html', {'feedback':feedback}) 
    
class DetailFeedback(LoginRequiredMixin1, View):
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
    


    
class ListTeam(LoginRequiredMixin1, View):
    def get(self, request):
        team=Team.objects.all()
        return render (request, 'staff/list_team.html', {'team':team}) 

   
class AddTeam(LoginRequiredMixin1, View):
    def get( self, request):
        form = TeamForm

        context = {'form': form}
        return render (request, 'staff/add_team.html', context )
    
    def post ( self, request):
        form = TeamForm(request.POST, request.FILES )
        if form.is_valid():
            team = form.save(commit=False)
            team.save()

            messages.success(self.request, "You have successfully added a new member.")
            return redirect( 'staff:list_team')
        else:
            context = {'form': form, 'submitted':True}
            messages.warning(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_team.html', context )
        

class EditTeam(LoginRequiredMixin1, View):
    def get( self, request, id):
        team = Team.objects.get(id=id)
        form = TeamForm(instance=team)

        context = {'form': form, 'team':team, 'edit':True}
        return render (request, 'staff/add_team.html', context )
    
    def post ( self, request, id):
        team = Team.objects.get(id=id)
        form = TeamForm(instance=team, data=self.request.POST, files=self.request.FILES, )
        if form.is_valid():
            team.save()

            messages.success(self.request, "You have successfully updated a member's info.")
            return redirect( 'staff:list_team')
        else:
            context = {'form': form, 'edit':True, }
            messages.warning(self.request, "Please check your inputs again.")
            return render (request, 'staff/add_team.html', context ) 
        



class ActivateTeam (LoginRequiredMixin1, View):
    def get (self, request, id):
        team = Team.objects.get(id=id)
        if team.is_active == False:
            team.is_active = True
            messages.success(request, "You have successfully activated a member")
        else:
            team.is_active = False
            messages.success(request, "You have successfully suspended a member")
        team.save()
        return redirect ( 'staff:list_team')



class DeleteTeam (LoginRequiredMixin1, View):
    def get (self, request, id):
        team = Team.objects.get(id=id)
        team.delete()
        messages.success(request, "You have successfully deleted a member")
        return redirect ( 'staff:list_team')




    
    
class ListStaff(LoginRequiredMixin1, View):
    def get(self, request):
        staff=MyUser.objects.all()
        return render (request, 'staff/list_team.html', {'staff':staff}) 
    



class DetailStaff(LoginRequiredMixin1, View):
    def get (self, request, id):
        
        me= MyUser.objects.get(id=id)
        form = StaffUserCreationForm(instance=me)
        return render (request, 'staff/detail_staff.html', {'form':form , 'me':me, 'edit':True})
    
    def post(self, request, id): 
        
        me= MyUser.objects.get(id=id)
        form = StaffUserCreationForm(instance=me, data=self.request.POST, files=self.request.FILES )
       
        if form.is_valid():
            user = form.save(commit=False)
            user.save()
            messages.success (request, "You have successfully updated a profile. ")
            return redirect ('staff:list_staff')
        else:
            messages.warning (request, "please recheck your inputs ")
            return redirect ('staff:list_staff')
        



class ActivateStaff (LoginRequiredMixin1, View):
    def get (self, request, id):
        staff = MyUser.objects.get(id=id)
        staff.status = "Active"
        staff.save()
        messages.success(request, "You have successfully activated a staff member")
        return redirect ( 'staff:list_staff')




class DeleteStaff (LoginRequiredMixin1, View):
    def get (self, request, id):
        staff = MyUser.objects.get(id=id)
        staff.delete()
        messages.success(request, "You have successfully deleted a staff member")
        return redirect ( 'staff:list_staff')



class ListSubscribers (LoginRequiredMixin1, View):
    def get (self, request ):
        subscriber = Visitors.objects.all()
        return render (request, 'staff/list_team.html', {'subscriber':subscriber}) 

