"""
main.py

Provides a flask API for the project to interact with gpt4free
"""

import flask
import g4f

app = flask.Flask(__name__)

@app.route("/api/generate", methods=["GET"])
def generate():

    # data = flask.request.json
    # prompt = data["prompt"]
    prompt = "What is the meaning of life?"
    messages = ([{"role": "user", "content": prompt}],)
    response = g4f.ChatCompletion.create(
        model=g4f.models.gpt_4o,
        messages=messages,
        provider=g4f.Provider.,
    )
    return flask.jsonify({"response": response})


if __name__ == "__main__":
    app.run(debug=False)
