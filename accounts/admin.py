from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import MyUser


class MyUserAdmin(BaseUserAdmin):

    search_fields = ['email'] # search by 
    list_display = ['email', 'full_name', 'is_staff'] # shown fields on users list
    list_filter = ['is_staff'] # filter by
    ordering = ['created_date']

    fieldsets = ( 
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('full_name','profile','phone')}),
        ('User Type', {'fields': ('is_active','is_superuser', 'is_staff','status' )}),
        ('Permissions', {'fields':('user_permissions',)}),
    ) # shown fields and their 'categories' in user detail

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'full_name', 'password1', 'password2',)}
        ),
    )  # shown fields while adding new user 

    # class Meta:
    #     model = MyUser

admin.site.register(MyUser, MyUserAdmin)
