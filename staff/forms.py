
from django import forms

from .models import News

class NewsForm(forms.ModelForm):
    class Meta:
        model = News 
        fields = ('title', 'image', 'desc', 'category')
        widgets = {
            'title':forms.TextInput(attrs={'class':'form-control', 'placeholder':' Title'}),
            'desc': forms.TextInput(attrs={'class':'field-control', 'placeholder':'Write your content here ...'}),
            'image':forms.FileInput(attrs={'class':'custom-file-input'}),
            'category': forms.Select(attrs={'type':'dropdown', 'class':'custom-select ', })

        }

