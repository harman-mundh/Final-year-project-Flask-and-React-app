#!/bin/bash

# Activate the virtual environment
source venv/Scripts/activate

# Set the Flask app environment variables
export FLASK_APP=app.py

# Run the Flask app with specied host
flask run --host=0.0.0.0