from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"quiz": "capital quiz",
            "description": "This is a capital quiz",
            "question1": "What is the capital of France?",
            "answer1": "Paris",
            "question2": "What is the capital of Spain?",
            "answer2": "Madrid",
            "question3": "What is the capital of Italy?",
            "answer3": "Rome",
            "question4": "What is the capital of Germany?",
            "answer4": "Berlin",
            "question5": "What is the capital of Portugal?",
            "answer5": "Lisbon",
            "question6": "What is the capital of Greece?",
            "answer6": "Athens",
            "question7": "What is the capital of Poland?",
            "answer7": "Warsaw",
            "question8": "What is the capital of Sweden?",
            "answer8": "Stockholm",
            "question9": "What is the capital of Norway?",
            "answer9": "Oslo",
            "question10": "What is the capital of Denmark?",
            "answer10": "Copenhagen",
            "question11": "What is the capital of Finland?",
            "answer11": "Helsinki", }
