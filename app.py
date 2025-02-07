from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Sample Blog Posts (Will be fetched dynamically)
blog_posts = [
    {"id": 1, "title": "The Future of AI", "content": "AI is evolving rapidly...", "author": "John Doe", "date": "2025-02-07"},
    {"id": 2, "title": "Quantum Computing Explained", "content": "Quantum computing is based on qubits...", "author": "Jane Smith", "date": "2025-02-06"}
]

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/api/posts')
def get_posts():
    return jsonify(blog_posts)

if __name__ == "__main__":
    app.run(debug=True)
