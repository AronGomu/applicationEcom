from django.conf.urls import url 
from api import views 
 
urlpatterns = [
    url(r'^api/login$', views.user_login),
    url(r'^api/user$', views.user_list),
    url(r'^api/user/(?P<pk>[0-9]+)$', views.user_detail),
    url(r'^api/post$', views.post_list),
    url(u'^api/userpost/(?P<username>.*)$', views.userpost_list),
    url(r'^api/post/(?P<pk>[0-9]+)$', views.post_detail),
    #url(r'^api/post/published$', views.post_list_published)
]
