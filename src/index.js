import app from "./app"

app.listen(app.get('port'))
console.log(`Server is running on server`, app.get('port'))