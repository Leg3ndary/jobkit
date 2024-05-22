"""
main.py

Provides a flask API for the project to interact with gpt4free
"""

import flask
from g4f.client import Client
from g4f.Provider import ChatgptAi
from g4f.cookies import set_cookies

app = flask.Flask(__name__)

client = Client(provider=ChatgptAi)


@app.route("/api/generate", methods=["GET"])
def generate():

    # data = flask.request.json
    # prompt = data["prompt"]
    prompt = "What is the meaning of life?"
    messages = ([{"role": "user", "content": prompt}],)
    response = client.chat.completions.create(model="gpt-4", messages=messages)
    print(response.choices[0].message.content)
    return flask.jsonify(response.choices[0].message.content or "")


if __name__ == "__main__":
    app.run(debug=False)
