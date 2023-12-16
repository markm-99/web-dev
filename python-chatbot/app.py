from flask import Flask, render_template, request
# import flask web framework
# render_template: render html templates
# request: get data from http requests
import openai 
import os
# gives us access to openai API
# load environment variables from .env file, store API key outside of script and bring it in
from dotenv import load_dotenv
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

# print(openai.api_key)

# Set up Flask app --> user question --> run thru OpenAi  --> return answer
# __name__: name of the current Python module (app)
app = Flask(__name__)

# Define home page route
@app.route("/")
def home():
    return render_template("index.html")

# Set up API route --> chatbot route that will use a POST method
@app.route("/chatbot", methods=["POST"])


def chatbot():
    # get message input from use
    # uses the route object and generates OPENAI api to create response
    user_input = request.form["message"]

    # Use openAI to generate response
    prompt = f"User: {user_input}\n Chatbot: "
    chat_history = []
    response = openai.Completion.create(
        engine="text-davinci-002"
        prompt=prompt,
        temperature = 0.5,
        max_tokens = 60,
        top_p=1,
        frequency_penalty=0,
        stop = ["\n", " User:", " Chatbot:"] # stop when it sees a new line, user, or chatbot   
    )

    # EXTRACT RESPONSE FROM OPENAI
    # extract response at index 0 as text (first option)
    bot_response = response.choices[0].text.strip()

    # Add user input and bot reopnse to chat history
    chat_history.append("User: {user_input}\n Chatbot: {bot_response}")

    # Render chatbot template with user input and bot response
    return render_template("chatbot.html", 
        user_input = user_input,
        bot_response = bot_response,
    )


# Start flask app --> run app.py import script as module
if __name__ == "__main__":
    app.run(debug=True)


    # pass
    # get data from request