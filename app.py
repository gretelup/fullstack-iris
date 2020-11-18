from flask import Flask, render_template, jsonify
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

# Flask Setup
app = Flask(__name__)

# Database Setup using SQLAlchmy ORM
engine = create_engine("sqlite:///iris.sqlite")
Base = automap_base()
Base.prepare(engine, reflect=True)

# Map table
Iris = Base.classes.Iris

@app.route('/')
def home():

    return render_template("index.html")

@app.route('/sepal-length')
def sepal_length():
    
    # Query for all sepal-lengths
    session = Session(engine)
    results = session.query(Iris.Species, Iris.SepalLengthCm).all()

    # Parse results
    results_dict = {"Iris-virginica": [], "Iris-versicolor": [], "Iris-setosa": []}
    for species, length in results:
        results_dict[species].append(float(length))  
    
    session.close()
    
    return jsonify(results_dict)


if __name__ == "__main__":
    app.run(debug=True)
