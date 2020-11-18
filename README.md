# Iris Heroku App
This is a simple full-stack flask app created using the a sqlite database of the [Iris dataset](http://archive.ics.uci.edu/ml/datasets/Iris) to help python developers deploy a flask app with basic javascript visualizations to Heroku.

A link to the deployed app can be found here: [https://iris-deploy-gu.herokuapp.com/](https://iris-deploy-gu.herokuapp.com/)

Video instructions on how to deploy app can be found here: [https://tinyurl.com/y3qn8waz](https://tinyurl.com/y3qn8waz)

## Instructions

### Part 1: Prepping your repository

For simplicity's sake, these instructions are for a flask app simply called `app.py`. You may name your app something else and simply update the appropriate areas.

1. Structure your repository to look something like this:
![File Tree](static/images/tree.png)
  * *N.B.* You can have extra files, and the structure does not need to match exactly, but you **must** have `app.py` at the top level.
2. Create new anaconda environment:

	`conda create -n project_env python=3.6`

3. Activate new environment:<br>

	`conda activate project_env`

4. Pip install the following:

	`pip install flask`<br>
	`pip install gunicorn`

5. Install other libraries necessary to run your `app.py`.
6. When you have finished installing libraries, run your `app.py` in your new environment.
	* If you get an error due to a missing library, simply install libraries until `app.py` runs without error.
7. Create your `requirements.txt`.

	`pip freeze > requirements.txt`
	
8. Create `Procfile` (*Note capitalization).

	`touch Procfile`

9. Open Procfile and paste the following:

	`web: gunicorn app:app`
	
10. Commit these changes to the master/main branch of your repository.
	* *GitHub has renamed its "master" branch to "main" recently. Use whatever your production branch is.*

### Part 2: Creating your Heroku App

1. Navigate to [www.heroku.com](www.heroku.com) and create an account if you don't already have one.
2. On main screen, select “Create New App.”
  * Give your app a unique name and leave region to default.
3. In the "Deployment method" section, select GitHub.
![Deployment Method](static/images/GH_deploy.png)
4.  In the "Connect to GiHub" section, click the "Connect to GitHub" button.
![GitHub Connection](static/images/GH_connect.png)
5. Authorize Heroku to access your GitHub and select your repository.
6. Navigate to the "Manual deploy" section and click "Deploy Branch"
![Manual Deploy](static/images/Manual_deploy.png)
  * *N.B. Do not select "Automatic deploys." This can cause headaches if you push changes before you are ready to redeploy your website with updates.*
7. If your app has succesfully been deployed, select "View" to go to your app's webpage.

If your app does not sucessfully deploy, click the "More" button at the top right of the screen, and then select "View logs" and troubleshoot.
![View logs](static/images/Logs.png)
