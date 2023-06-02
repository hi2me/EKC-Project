from django import forms
from .models import MyUser, MyUserManager, STATUS, GENDER

# viewers registration
class MyUserRegistrationForm(forms.ModelForm):
    password = forms.CharField(label='Password', 
            widget = forms.PasswordInput(attrs={'class': "form-control",'placeholder':'Password', 'autocomplete': "new-password",'placeholder': 'Password','minlength': 8,}))
    password2 = forms.CharField(label='Password confirmation',
            widget = forms.PasswordInput(attrs={'class':"form-control",'autocomplete':"new-password", 'placeholder':'Confirm password', 'minlength': 8,}))
    
    class Meta:
        model = MyUser 
        fields = ['email','phone', 'full_name','profile', 'password', 'password2',  ]
        widgets = {
            'email':forms.EmailInput(attrs={'class':'form-control','placeholder':'Email',}),
            'full_name':forms.TextInput(attrs={'class':'form-control','placeholder':'Full Name',}),
            'phone':forms.NumberInput(attrs={'class':'form-control', 'placeholder':'Phone Number', 'type':'number'}),
            'profile':forms.FileInput(attrs ={'class':'form-control', 'placeholder':'Profile Image','accept':'image/*'}),
        }
    def clean_password2(self):
        password = self.cleaned_data.get('password')
        password2 = self.cleaned_data.get("password2")
        if password and password2 and password != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2
    
    def save(self, commit=True):
        # Save the provided password in hashed format
        myuser = super(MyUserRegistrationForm, self).save(commit=False)
        myuser.set_password(self.cleaned_data["password"])    
        if commit:
            myuser.save()
        return myuser
    

# staff registration

# used by MyProfile and staffs EditUser (current user willnot be used when staffs EditUser)
class ChangePasswordForm(forms.Form):
    current_password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control','placeholder': 'Current password','minlength': "8",}))
    new_password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control','placeholder': 'New password','minlength': "8",}))
    retype_new_password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control','placeholder': 'Repeat new password','minlength': "8",}))

    class Meta:
        fields = ['current_password', 'new_password', 'retype_new_password']



class StaffUserCreationForm(forms.ModelForm):
    """A form for creating staff users. """
    password = forms.CharField(label='Password',
            widget = forms.PasswordInput(attrs={'class': "form-control",'autocomplete': "new-password",'placeholder': 'Password','minlength': 8,}))
    password2 = forms.CharField(label='Password confirmation',
            widget = forms.PasswordInput(attrs={'class':"form-control",'autocomplete':"new-password", 'placeholder':'Confirm password', 'minlength': 8,}))
     
    class Meta:
        model = MyUser
        fields  = ('email','profile','phone', 'full_name')
        widgets = {
            'email': forms.EmailInput(attrs={'class':'form-control', 'placeholder':'Email', }),
            'full_name': forms.TextInput(attrs={'class':'form-control', 'placeholder':'Full Name', 'autocapitalize':'word'}),
            'phone':forms.TextInput(attrs={'class':'form-control', 'placeholder':'Phone Number','autocorrect':"off", 'value':''}),
            'profile':forms.FileInput(attrs ={'class':'form-control', 'placeholder':'Profile Image','accept':'image/*'}),
        }
    
    def clean_password2(self):
        password = self.cleaned_data.get('password')
        password2 = self.cleaned_data.get("password2")
        if password and password2 and password != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2
    
    def save(self, commit=True):
        # Save the provided password in hashed format
        myuser = super(StaffUserCreationForm, self).save(commit=False)
        myuser.set_password(self.cleaned_data["password"])
        myuser.is_staff = True
        if commit:
            myuser.save()
        return myuser

