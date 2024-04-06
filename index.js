import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const blogs = [];

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {

    blogs.push(req.body);

    res.render("index.ejs", {
        Tblogs:blogs,
    });
    
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
