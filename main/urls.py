from django.urls import path
from django.views.generic import TemplateView

app_name = 'slider'

urlpatterns = [
    path('', TemplateView.as_view(template_name='main/index.html')),
        ]
