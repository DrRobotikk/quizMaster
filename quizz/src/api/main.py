from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"question1": "What is the capital of France ?",
            "question2": "What is the capital of Spain ?",
            "question3": "What is the capital of Italy ?",
            "question4": "What is the capital of Germany ?",
            "question5": "What is the capital of Portugal ?",
            "question6": "What is the capital of Greece ?",
            "answere1": "Paris",
            "answere2": "Madrid",
            "answere3": "Rome",
            "answere4": "Berlin",
            "answere5": "Lisbon",
            "answere6": "Athens"}
