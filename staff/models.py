from django.db import models

from tinymce.models import HTMLField

from accounts.models import MyUser

NEWS_CATEGORY = (('Health','Health'), ('Research','Research'), ('Information','Information'),('Anouncement','Anouncement'))
GALLERY_CATEGORY = (('Seminar','Seminar'), ('Training','Training'), ('Report','Report'))


class About_Us(models.Model):
    title = models.CharField(max_length=50, blank=True, null=True)
    image = models.ImageField(upload_to='About_us', blank=True, null=True)
    desc = models.TextField( blank=True, null=True)
    created_by = models.ForeignKey(MyUser, on_delete=models.PROTECT)
    created_date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ('-id',)


class Service(models.Model):
    title = models.CharField(max_length=50, blank=True, null=True)
    image = models.ImageField(upload_to='Service', blank=True, null=True)
    desc = models.TextField( blank=True, null=True)
    created_by = models.ForeignKey(MyUser, on_delete=models.PROTECT)
    created_date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ('-id',)


# class Team(models.Model):
#     name = models.CharField(max_length=50, blank=True, null=True)
#     image = models.ImageField(upload_to='Service', blank=True, null=True)
#     desc = models.TextField( blank=True, null=True)
#     created_by = models.ForeignKey(MyUser, on_delete=models.PROTECT)
#     created_date = models.DateTimeField(auto_now_add=True)


class Event(models.Model):
    title = models.CharField(max_length=1500, blank=True, null=True)
    image = models.ImageField(upload_to='Event', blank=True, null=True)
    category = models.CharField(max_length=30, choices=(('seminar','seminar'), ('expo','expo')))
    date = models.DateTimeField( blank=True, null=True)
    place = models.CharField(max_length=50, blank=True, null=True)
    desc = models.TextField( blank=True, null=True)
    status = models.CharField(max_length=30, choices=(('upcoming event', 'upcoming event'), ('past event', 'past event')), default='upcoming event')
    created_by = models.ForeignKey(MyUser, on_delete=models.PROTECT)
    created_date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ('-id',)


class NewsCategory(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ('-id',)


class News(models.Model):
    title = models.CharField(max_length=1500, blank=True, null=True)
    image = models.ImageField(upload_to='News', blank=True, null=True)
    category = models.ForeignKey(NewsCategory, on_delete=models.CASCADE )
    desc = HTMLField( blank=True, null=True)
    created_by = models.ForeignKey(MyUser, on_delete=models.PROTECT)
    created_date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ('-id',)


class Gallery(models.Model):
    title = models.CharField(max_length=500, blank=True, null=True)
    image = models.ImageField(upload_to='Gallery', blank=True, null=True)
    category = models.CharField(max_length=30, choices=GALLERY_CATEGORY, default='Training', null=True, blank=True)
    created_by = models.ForeignKey(MyUser, on_delete=models.PROTECT)
    created_date = models.DateTimeField(auto_now_add=True)


    
    class Meta:
        ordering = ('-id',)


class Gallery_Image(models.Model):
    title = models.ForeignKey(Gallery, on_delete=models.PROTECT)
    image = models.ImageField(upload_to='Gallery', blank=True, null=True)

    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ('-id',)


class Feedback(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.TextField()
    show = models.BooleanField(default=False)
    sent_date = models.DateTimeField(auto_now_add=True)

        
    def __str__(self):
        return self.subject
    
    class Meta:
        ordering = ('-id',)


class PublicationAndResearch(models.Model):
    title = models.CharField(max_length=1500)
    name = models.CharField(max_length=70, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    image = models.ImageField(upload_to='Publication', blank=True, null=True)
    document = models.FileField(upload_to='document/publication')
    desc = models.TextField()
    approved = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)

        
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ('-id',)


class CallOfApplication(models.Model):
    title = models.CharField(max_length=1500)
    image = models.ImageField(upload_to='Publication', blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=50, blank=True, null=True)
    document = models.FileField(upload_to='document/call/application')
    desc = models.TextField()
    status = models.CharField(max_length=50, choices=(('Active','Active'), ('Closed','Closed')))
    end_date = models.DateTimeField()
    created_date = models.DateTimeField(auto_now_add=True)

        
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ('-id',)


class CallOfSubmission(models.Model):
    title = models.ForeignKey(CallOfApplication, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='Publication', blank=True, null=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=50, blank=True, null=True)
    concept_note = models.FileField(upload_to='document/call/submission')
    cv = models.FileField(upload_to='document/call/submission')
    supplementary_docs = models.FileField(upload_to='document/call/submission', blank=True, null=True )
    desc = models.TextField()
    submitted_date = models.DateTimeField(auto_now_add=True)

        
    
    
    class Meta:
        ordering = ('-id',)


class Report(models.Model):
    title = models.CharField(max_length=500)
    sub_title = models.CharField(max_length=500, blank=True, null= True)
    approved = models.BooleanField(default=False)
    prep_by = models.CharField(max_length=200)
    rep_document = models.FileField(upload_to='document/report')
    prep_date = models.DateTimeField(auto_now_add=True)

        
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ('-id',)