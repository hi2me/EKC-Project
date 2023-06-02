from django.db import models

from accounts.models import MyUser


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
    title = models.CharField(max_length=50, blank=True, null=True)
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

class News(models.Model):
    title = models.CharField(max_length=50, blank=True, null=True)
    image = models.ImageField(upload_to='News', blank=True, null=True)
    category = models.CharField(max_length=30, choices=(('Health','Health'), ('Research','Research'), ('Information','Information'),('Anouncement','Anouncement')))
    desc = models.TextField( blank=True, null=True)
    created_by = models.ForeignKey(MyUser, on_delete=models.PROTECT)
    created_date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ('-id',)


class Gallery(models.Model):
    title = models.CharField(max_length=50, blank=True, null=True)
    image = models.ImageField(upload_to='Gallery', blank=True, null=True)
    created_by = models.ForeignKey(MyUser, on_delete=models.PROTECT)
    created_date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ('-id',)


class Gallery_Image(models.Model):
    title = models.ForeignKey(Gallery, on_delete=models.PROTECT)
    image = models.ImageField(upload_to='Gallery', blank=True, null=True)
    created_by = models.ForeignKey(MyUser, on_delete=models.PROTECT)
    created_date = models.DateTimeField(auto_now_add=True)

    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ('-id',)


class Feedback(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    content = models.TextField()
    sent_date = models.DateTimeField(auto_now_add=True)

        
    def __str__(self):
        return self.subject
    
    class Meta:
        ordering = ('-id',)