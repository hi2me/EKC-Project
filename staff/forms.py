
from django import forms
from tinymce.widgets import TinyMCE 

from .models import *

class NewsForm(forms.ModelForm):
    class Meta:
        model = News 
        fields = ('title', 'image', 'desc', 'category', 'created_date')
        widgets = {
            'title':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Title'}),
            'desc':  TinyMCE(attrs={'class':'field-control', 'placeholder':'Write your content here ...', 'required':'false'}),
            'image':forms.FileInput(attrs={'class':'form-control'}),
            'created_date': forms.DateTimeInput(attrs={'type':'datetime-local','class':'form-control' }),
            'category': forms.Select(attrs={'type':'dropdown', 'class':'custom-select ', })

        }


class EventForm(forms.ModelForm):
    class Meta:
        model = Event 
        fields = ('title', 'image', 'desc', 'category', 'date','end_date', 'place')
        widgets = {
            'title':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Title'}),
            'desc': TinyMCE(attrs={'class':'field-control', 'placeholder':'Write your content here ...', 'required':'false'}),
            'image':forms.FileInput(attrs={'class':'form-control'}),
            'category': forms.Select(attrs={'type':'dropdown', 'class':'custom-select ', }),
            'date': forms.DateTimeInput(attrs={'type':'datetime-local','class':'form-control' }),
            'end_date': forms.DateTimeInput(attrs={'type':'datetime-local','class':'form-control' }),
            'place':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Place'}),

        }



class GalleryForm(forms.ModelForm):
    class Meta:
        model = Gallery 
        fields = ('title', 'image', 'category')
        widgets = {
            'title':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Title'}),
            'image':forms.FileInput(attrs={'class':'form-control'}),
            'category': forms.Select(attrs={'type':'dropdown', 'class':'custom-select ', }),
        }

class Galley_ImageForm(forms.ModelForm):

    image = forms.FileField( required=False, widget=forms.ClearableFileInput(attrs={ 'multiple': True,  }))
    class Meta:
        model = Gallery_Image      
        fields = ('image', )


class FeedbackForm(forms.ModelForm):
           
    class Meta:
        model = Feedback      
        fields = ('name','email', 'subject', 'message',  )
        widgets = {
            'name':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Name'}),
            'email':forms.EmailInput(attrs={'class':'form-control', 'placeholder':' Email'}),
            'subject':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Subject'}),
            'message': forms.Textarea(attrs={'class':'field-control', 'placeholder':' Write your content here ...', 'required':'false'}),
            }


class CallApplicationForm(forms.ModelForm):
    class Meta:
        model = CallOfApplication       
        fields = ('title', 'phone', 'email', 'desc', 'document', 'image', 'status', 'end_date'  )
        widgets = {
            'title':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Name'}),
            'phone':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Name'}),
            'email':forms.EmailInput(attrs={'class':'form-control', 'placeholder':' Email'}),
            'desc':  TinyMCE(attrs={'class':'field-control', 'placeholder':'Write something about the research ...', 'required':'false'}),
            'image':forms.FileInput(attrs={'class':'form-control'}),            
            'document':forms.FileInput(attrs={'class':'form-control'}),
            'status': forms.Select(attrs={'type':'dropdown', 'class':'custom-select ', }),
            'end_date':forms.DateInput(attrs={'class':'form-control  round','type':'datetime-local',})
            }
        


class CallSubmissionForm(forms.ModelForm):
    class Meta:
        model = CallOfSubmission 
        fields = ('name', 'phone', 'email', 'image', 'desc', 'cv', 'concept_note','supplementary_docs')
        widgets = {
            'name':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Your name'}),
            'phone':forms.TextInput(attrs={'class':'form-control', 'placeholder':' +251.. '}),
            'email':forms.EmailInput(attrs={'class':'form-control', 'placeholder':' ..@gmail.com'}),
            'desc':  TinyMCE(attrs={'class':'field-control', 'placeholder':'Write your content here ...', 'required':'false'}),
            'image':forms.FileInput(attrs={'class':'form-control'}),            
            'cv':forms.FileInput(attrs={'class':'form-control'}),
            'concept_note':forms.FileInput(attrs={'class':'form-control'}),
            'supplementary_docs':forms.FileInput(attrs={'class':'form-control'}),
        }



class ResearchForm(forms.ModelForm):
           
    class Meta:
        model = PublicationAndResearch      
        fields = ('title', 'name', 'email', 'desc', 'document','link', 'image', 'approved'  )
        widgets = {
            'title':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Name'}),
            'name':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Name'}),
            'email':forms.EmailInput(attrs={'class':'form-control', 'placeholder':' Email'}),
            'desc':  TinyMCE(attrs={'class':'field-control', 'placeholder':'Write something about the research ...', 'required':'false'}),
            'image':forms.FileInput(attrs={'class':'form-control'}),            
            'document':forms.FileInput(attrs={'class':'form-control'}),
            'link':forms.TextInput(attrs={'class':'form-control', 'placeholder':'Link'}),
            
            'approved':forms.CheckboxInput(attrs={'class':'switchery','type':'checkbox', }),
            }
        

class ReportForm(forms.ModelForm):
           
    class Meta:
        model = Report      
        fields = ('title', 'sub_title', 'prep_by',  'rep_document', 'approved'  )
        widgets = {
            'title':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Name'}),
            'sub_title':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Name'}),
            'prep_by':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Name'}),           
            'rep_document':forms.FileInput(attrs={'class':'form-control'}),
            'approved':forms.CheckboxInput(attrs={'class':'switchery','type':'checkbox', }),
            }
        

class TeamForm(forms.ModelForm):
           
    class Meta:
        model = Team      
        fields = ('name', 'image', 'role',  'wing', 'phone', 'email', 'is_active' )
        widgets = {
            'name':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Name'}),       
            'image':forms.FileInput(attrs={'class':'form-control'}),
            'role':forms.TextInput(attrs={'class':'form-control', 'placeholder':' role'}),
            'wing': forms.Select(attrs={'type':'dropdown', 'class':'custom-select ', }),
            'phone':forms.TextInput(attrs={'class':'form-control', 'placeholder':' phone'}),  
            'email':forms.EmailInput(attrs={'class':'form-control', 'placeholder':' email'}),   
            'is_active':forms.CheckboxInput(attrs={'class':'switchery','type':'checkbox', }),
            }
        