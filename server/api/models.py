from django.db import models

# Create your models here.

class Message(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title

class User(models.Model):
    username = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    email = models.CharField(max_length=255, default="no-email")
    name = models.CharField(max_length=255)
    dob = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    license_num = models.CharField(max_length=255)
    ssn = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.username

class Candidate(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    party = models.CharField(max_length=255)
    office = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    twitter_screen_name = models.CharField(max_length=255)
    def __str__(self):
        return self.name

class Ballot(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE)
    created_at = models.DateTimeField('date voted', auto_now_add=True)


class Feed(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    