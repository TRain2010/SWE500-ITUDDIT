##### Backend Django Setup

# Installation

- Install [pyenv](https://github.com/pyenv/pyenv) and [pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv)

  - `pyenv install 3.7.4`
  - `pyenv virtualenv 3.7.4 ituddit`
  - `pyenv local ituddit`

- Install required packages

  - `pip install pipenv`
  - `pipenv sync --dev`

##### Adding python packages

- Development only: `pipenv install --dev <package_name>`
- Production:
  ### do NOT use PIP INSTALL, ALWAY use PIPENV INSTALL!!!
  - `pipenv install <package_name>`
  - `pipenv lock --requirements > requirements.txt`
  
  
##### Run
- inside backend/ITUddit folder, run ./manage.py migrate
- run ./manage.py runserver
- web browser open localhost:8000


##### Current userful urls
- /accounts/login
- /accounts/register
- /api/user/ 
