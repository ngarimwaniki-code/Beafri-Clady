from django import forms
from .models import Profile
from django.contrib.auth.models import User

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['bio', 'location', 'birth_date', 'profile_picture', 'website', 'phone_number']

    def __init__(self, *args, **kwargs):
        super(ProfileForm, self).__init__(*args, **kwargs)
        self.fields['bio'].widget = forms.Textarea(attrs={'rows': 3, 'cols': 20})
        self.fields['birth_date'].widget.attrs.update({'class': 'datepicker'})

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'email']
