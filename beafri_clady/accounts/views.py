from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import Profile

@login_required
def profile(request):
    user = request.user
    profile = get_object_or_404(Profile, user=user)
    return render(request, 'accounts/profile.html', {'user': user, 'profile': profile})
