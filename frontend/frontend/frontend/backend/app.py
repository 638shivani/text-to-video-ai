from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/generate', methods=['POST'])

def generate():

    data = request.json

    prompt = data['prompt']

    print(prompt)

    # Add your AI model code here

    video_url = "sample.mp4"

    return jsonify({
        "video_url": video_url
    })

if __name__ == '__main__':
    app.run(debug=True)
