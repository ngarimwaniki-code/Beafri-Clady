from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Profile

@login_required
def profile(request):
    user = request.user
    profile = Profile.objects.get_or_create(user=user)[0]
    return render(request, 'accounts/profile.html', {'user': user, 'profile': profile})
