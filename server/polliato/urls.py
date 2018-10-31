"""polliato URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/dev/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from tastypie.api import Api
#from django.urls import path
from api.resources import UserResource, CandidateResource, BallotResource, FeedResource, MessageResource

v1_api = Api(api_name='v1')
v1_api.register(UserResource())
v1_api.register(CandidateResource())
v1_api.register(BallotResource())
v1_api.register(FeedResource())
v1_api.register(MessageResource())

urlpatterns = [
    url('admin/', admin.site.urls),
    url('api/', include(v1_api.urls))
]


