import django

import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','EKC.settings')
django.setup()

from accounts.models import MyUser
from staff.models import Visitors, News, Event
from django.utils import timezone

print(News.objects.get(id=8))

# def send_news_emails():
#     for u in MyUser.objects.all():
#         pass 

# def update_events():
#     event = Event.objects.all()
#     for event in event:
#         if event.date < timezone.now():
#             event.status = "past event"
#             event.save()


# if __name__ == "__main__":
#     update_events()