# iCoder Blog

This blog is made using react and djangorestframework

- [ReactJS Documentation](https://reactjs.org/)
- [Django Rest Framework Documentation](https://www.django-rest-framework.org/)


Django Cors Headers has been used inside the settings.py file of the project. Please do not remove the following lines
- 'corsheaders' from INSTALLED_APPS
- 'corsheaders.middleware.CorsMiddleware' from MIDDLEWARE
- CORS_ALLOW_ALL_ORIGINS = True from the bottom of the file

Removing these lines will prevent the react server to get access to django server


- Features :
- Facebook Comments Plugin
- Full featured search functionality
- Automatic slug generation on saving a post


- Endpoints of django server :
  - /api/getPosts - Returns all posts
  - /api/getPost/&lt;str:post_slug&gt; - Returns a single post based on the post's slug
  - /api/searchPosts - Returns the search results based on the search query value


- Default admin panel configurations
  - Username : admin
  - Password : 12345678

- Run the django server first
```batch
python manage.py runserver
```

- Go into the frontend folder
```batch
cd frontend
```

- Now run the react server
```batch
npm run start
```