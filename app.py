# source: https://www.digitalocean.com/community/tutorials/how-to-make-a-web-application-using-flask-in-python-3
# source: https://www.geeksforgeeks.org/flask-creating-first-simple-application/
# source: https://github.com/SagarBapodara/Movie-Recommendation-System/blob/main/app.py
# source: https://towardsdatascience.com/build-deploy-a-react-flask-app-47a89a5d17d9

from flask import Flask
from markupsafe import escape
from flask import url_for
from flask import render_template
from flask import request
from flask import redirect
from flask import abort
from flask import make_response
from flask import jsonify
import pickle
import json
from collections import OrderedDict
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

foodData = pickle.load(open('foodData.pkl','rb'))
similarity = pickle.load(open('similarity.pkl','rb'))

def recommendation(title):
    # index of the food name
    idx = foodData[foodData['Title'] == title].index[0] 
    # get index and similarity score
    similarity_scores = list(enumerate(similarity[idx]))  
    # sort by similarity score, in descending order
    sorted_similarity_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)  
    # get top 5 similar items
    top_similar_indices = [score[0] for score in sorted_similarity_scores[0:6]]  
    # get the recommended food data
    recommended_food_data = foodData.iloc[top_similar_indices]  
    # convert DataFrame to a list of dictionaries
    recommended_food_data_json = recommended_food_data.to_dict('records')
    
    return recommended_food_data_json

@app.route('/recommendation')
def get_recommendation():
    # Get the input food title from the query parameters
    title = request.args.get('title')
    # Call the recommendation function and get the recommended dictionary
    recommendedDict = recommendation(title)
    # Return the recommended dictionary as a JSON response
    return jsonify(recommendedDict)

if __name__ == '__main__':
    app.run(debug=True)

#http://localhost:5000/recommendation?title=