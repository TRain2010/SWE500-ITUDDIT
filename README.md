##### Backend Django Setup

# Installation
 - Install [pyenv](http://fgimian.github.io/blog/2014/04/20/better-python-version-and-environment-management-with-pyenv/) and [pyenv-virtualenv] (https://github.com/pyenv/pyenv-virtualenv)

    - `pyenv install 3.7.4`
    - `pyenv virtualenv 3.7.4 ITUddit`

 - Install required packages

   - `pip install pipenv`
   - `pipenv sync --dev`
   
##### Adding python packages
- Development only: `pipenv install --dev <package_name>`
- Production:
  - `pipenv install <package_name>`
  - `pipenv lock --requirements > requirements.txt`

