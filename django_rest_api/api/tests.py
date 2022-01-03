from django.test import TestCase, Client
from api.models import User
from api.models import Post
from api.views import user_login

# Create your tests here.

class UserTestCase(TestCase):
    def setUp(self):
        User.objects.create(username="test01", password="aaa")


    def test_user_get_username_by_username_and_password(self):
        """Animals that can speak are correctly identified"""
        test01 = User.objects.get(username='test01', password='aaa')
        self.assertEqual(test01.username, 'test01')
        self.assertEqual(test01.password, 'aaa')

    def test_login_get(self):
        c = Client()
        r = c.get('/api/login')
        self.assertEqual(r.status_code, 405)

    def test_login_post_no_data(self):
        c = Client()
        r = c.post('/api/login')
        self.assertEqual(r.status_code, 400)

    def test_login_post_with_valid_data(self):
        c = Client()
        r = c.post('/api/login', {"username": "test01", "password": "aaa"}, content_type="application/json")
        self.assertEqual(r.status_code, 200)

    def test_sign_up_new_user(self):
        c = Client()
        r = c.post('/api/user', {"username": "test02", "password": "456"}, content_type="application/json")
        self.assertEqual(r.status_code, 201)
        r = c.post('/api/login', {"username": "test02", "password": "456"}, content_type="application/json")
        self.assertEqual(r.status_code, 200)

    def test_sign_up_same_user(self):
        c = Client()
        r = c.post('/api/user', {"username": "test01", "password": "456"}, content_type="application/json")
        self.assertEqual(r.status_code, 404)


class PostTestCase(TestCase):
    def setUp(self):
        Post.objects.create(title="the title", author="test author", imagelink="https://images3.alphacoders.com/152/thumb-1920-152779.jpg")

    def test_get_posts(self):
        c = Client()
        r = c.get('/api/post')
        self.assertEqual(r.status_code, 200)