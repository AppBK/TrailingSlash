from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

no_slash_routes = Blueprint('no_slash', __name__)

@no_slash_routes.route('')
def no_slash():
  return jsonify('NO SLASH GET')
