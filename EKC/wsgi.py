"""
WSGI config for EKC project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/wsgi/
"""

import os
import sys
from pathlib import Path
from django.core.wsgi import get_wsgi_application
from django.conf import settings

# def printer(txt ="", fname = 'custom_log.log',  ):
#     try:
#         if txt:
#             f = open(settings.BASE_DIR.joinpath("logs/"+fname), 'a') 
#             print(txt,end="\n", file =f) 
#             f.close()
#         return True
#     except Exception as e:
#         return False 

# main_path = sys.path


# if 'C:\\Blacklion' in main_path:
#     main_path.remove('C:\\Blacklion')

# sys.path.append('C:/EKCC')
# printer(txt=str(sys.path))

# Add project directory to the sys.path
path_home = str(Path(__file__).parents[1]) #'C:/EKCC'
if path_home not in sys.path:
    sys.path.append(path_home)
os.environ["DJANGO_SETTINGS_MODULE"] = "EKC.settings"

application = get_wsgi_application()
