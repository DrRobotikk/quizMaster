export const Quiz = () => {
    const GetQuiz = async () => {
        const res = await fetch("http://127.0.0.1:8000/", {
            "method": "GET",
            "headers": {
              "user-agent": "vscode-restclient",
              "accept": "application/json"
            }
          })
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.error(err);
          });
}
