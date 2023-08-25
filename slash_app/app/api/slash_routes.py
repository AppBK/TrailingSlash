from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

slash_routes = Blueprint('slash', __name__)


@slash_routes.route('/')
def haz_slash():
  return jsonify('HAZ SLASH GET')
