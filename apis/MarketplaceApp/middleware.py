import environ
from django.conf import settings
from django.core.exceptions import PermissionDenied

import jwt


class JWTValidateMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request, *args, **kwargs):
        try:
            auth_header = request.headers.get('Authorization')
            if auth_header:
                try:
                    auth_token = auth_header.split(" ")[1]
                except IndexError:
                    raise PermissionDenied()
            else:
                auth_token = ''
            if auth_token != "":
                print("here")
                # Specify the CLIENT_ID of the app that accesses the backend:
                info = jwt.decode(auth_token, key=settings.CLIENT_SECRET, algorithms=['RS256', 'ES256'])
                print(info)
        except ValueError as e:
            # Invalid token
            print(e)
            pass
        return self.get_response(request)
