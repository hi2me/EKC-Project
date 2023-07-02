
from django import forms
from tinymce.widgets import TinyMCE 

from .models import *

class NewsForm(forms.ModelForm):
    class Meta:
        model = News 
        fields = ('title', 'image', 'desc', 'category')
        widgets = {
            'title':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Title'}),
            'desc':  TinyMCE(attrs={'class':'field-control', 'placeholder':'Write your content here ...', 'required':'false'}),
            'image':forms.FileInput(attrs={'class':'form-control'}),
            'category': forms.Select(attrs={'type':'dropdown', 'class':'custom-select ', })
        }


class EventForm(forms.ModelForm):
    class Meta:
        model = Event 
        fields = ('title', 'image', 'desc', 'category', 'date', 'place')
        widgets = {
            'title':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Title'}),
            'desc': TinyMCE(attrs={'class':'field-control', 'placeholder':'Write your content here ...', 'required':'false'}),
            'image':forms.FileInput(attrs={'class':'form-control'}),
            'category': forms.Select(attrs={'type':'dropdown', 'class':'custom-select ', }),
            'date': forms.DateInput(attrs={'type':'datetime-local','class':'form-control' }),
            'place':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Place'}),

        }



class GalleryForm(forms.ModelForm):
    class Meta:
        model = Gallery 
        fields = ('title', 'image')
        widgets = {
            'title':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Title'}),
            'image':forms.FileInput(attrs={'class':'form-control'}),
        }

class Galley_ImageForm(forms.ModelForm):

    image = forms.FileField( required=False, widget=forms.ClearableFileInput(attrs={ 'multiple': True,  }))
    class Meta:
        model = Gallery_Image      
        fields = ('image','title' )


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