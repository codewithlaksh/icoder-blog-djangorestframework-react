from pyexpat import model
from django.db import models
from django.utils.timezone import now
from .utils import unique_slug_generator
from django.db.models.signals import pre_save

# Create your models here.
class Post(models.Model):
    sno = models.AutoField(primary_key=True)
    title = models.TextField()
    tagline = models.TextField()
    slug = models.TextField(null=True, blank=True)
    description = models.TextField()
    timestamp = models.DateTimeField(default=now)

    def __str__(self) -> str:
        return self.title[0:50] + " ..."

def slug_generator(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(slug_generator, sender=Post)

class Contact(models.Model):
    sno = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=30)
    email = models.CharField(max_length=255)
    message = models.TextField()
    timestamp = models.DateTimeField(default=now)

    def __str__(self) -> str:
        return "New contact message from - " + self.name + " - message - " + self.message[0:50] + " ..."