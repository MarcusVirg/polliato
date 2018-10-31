from tastypie import fields
from tastypie.resources import ModelResource
from api.models import Message, Candidate, Ballot, Feed, User
from tastypie.authorization import Authorization

class UserResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'user'
        authorization = Authorization()

class CandidateResource(ModelResource):
    class Meta:
        queryset = Candidate.objects.all()
        resource_name = 'candidate'
        authorization = Authorization()

class BallotResource(ModelResource):
    user = fields.ForeignKey(UserResource, 'user')
    candidate = fields.ForeignKey(CandidateResource, 'candidate')
    class Meta:
        queryset = Ballot.objects.all()
        resource_name = 'ballot'
        authorization = Authorization()

class FeedResource(ModelResource):
    user = fields.ForeignKey(UserResource, 'user')
    candidate = fields.ForeignKey(CandidateResource, 'candidate')
    class Meta:
        queryset = Feed.objects.all()
        resource_name = 'feed'
        authorization = Authorization()

class MessageResource(ModelResource):
    class Meta:
        queryset = Message.objects.all()
        resource_name = 'message'
        authorization = Authorization()
    
