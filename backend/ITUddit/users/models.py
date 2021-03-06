from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    student_id = models.IntegerField(null=True, blank=True)
    updated_date = models.DateField(auto_now=True)
