import os, json
from flask import Flask, request, session, g, redirect, url_for, abort, render_template, flash

app = Flask(__name__)

# Redirects to the main page automatically
@app.route("/")
def default():
    return redirect(url_for("talkToFrontend"))

# makes sure the react end is running and is able to send data to the flask end
@app.route("/movieapp")
def talkToFrontend():
    return 'Done', 201

if __name__=="__main__":
    app.run(debug=True)