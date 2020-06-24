from django.db import models
from users.models import CustomUser
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
# Create your models here.


class Category(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=120, unique=True)


class Activity(models.Model):
    UPVOTE = 'upvote'
    DOWNVOTE = 'downvote'
    LIKE = 'like'
    ACTIVITY_TYPES = (
        (UPVOTE, 'Upvote'),
        (DOWNVOTE, 'Downvote'),
        (LIKE, 'Like'),
    )
    user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name='activities')
    activity_type = models.CharField(max_length=10, choices=ACTIVITY_TYPES)
    submit_time = models.DateTimeField(auto_now_add=True)

    # Fields for generic relation
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey()


class Post(models.Model):
    topic = models.CharField(max_length=120)
    content = models.TextField(blank=True, null=True)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="posts")

    user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name='posts')
    activities = GenericRelation(Activity)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def upvotes(self):
        return self.activities.filter(activity_type=Activity.UPVOTE)

    @property
    def downvotes(self):
        return self.activities.filter(activity_type=Activity.DOWNVOTE)

    @property
    def upvote_number(self):
        return self.upvotes.count() - self.downvotes.count()


class Comment(models.Model):
    user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name='comments')

    post = models.ForeignKey(
        Post, related_name='comments', on_delete=models.CASCADE)
    content = models.TextField(blank=True, null=True)
    parent = models.ForeignKey(
        'self', on_delete=models.CASCADE, related_name='children', null=True, blank=True)
    activities = GenericRelation(Activity)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def upvotes(self):
        return self.activities.filter(activity_type=Activity.UPVOTE)

    @property
    def downvotes(self):
        return self.activities.filter(activity_type=Activity.DOWNVOTE)

    @property
    def upvote_number(self):
        return self.upvotes.count() - self.downvotes.count()
