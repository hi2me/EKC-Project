from django.db import models

from django.contrib.auth.models import User, AbstractBaseUser, PermissionsMixin, BaseUserManager

GENDER = (('Male','Male'), ('Female','Female'))
STATUS = (('Pending','Pending'), ('Confirmation', 'Confirmation'), ('Active', 'Active'))


class MyUserManager(BaseUserManager):
    def create_myuser (self, email, password, full_name): # things listed in REQUIRED_FIELDS
        if not email:
            raise ValueError("must have an email")
        myuser = self.model(email=self.normalize_email(email), full_name = full_name)
        myuser.set_password(password)
        myuser.save(using=self.db)
        return myuser


    def create_superuser(self, email, password, full_name):
        myuser = self.create_myuser(email, password, full_name)
        myuser.is_staff = True
        myuser.is_active = True
        myuser.is_superuser = True
        myuser.status = "Active"
        myuser.save(using = self.db)
        return myuser


class MyUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=200)
    gender = models.CharField(max_length=50, choices=GENDER, default='Male')
    profile = models.ImageField(upload_to='Profile', blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    status = models.CharField(max_length=100, choices=STATUS, default='Pending')
    created_date = models.DateTimeField(auto_now_add=True, editable=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name'] # will appear at py manage.py createsuperuser thingy

    objects = MyUserManager()

    def __str__(self):
        return self.full_name
    
    class Meta:
        ordering = ('-id',)

    @property
    def get_full_name (self):
        return self.full_name # get name fast 
    def get_staff (self):
        return self.myuser_set.filter(is_staff = True) # get staff list fast 
    def get_viewer (self):
        return self.myuser_set.filter(is_staff = False) # get viewers list fast 
