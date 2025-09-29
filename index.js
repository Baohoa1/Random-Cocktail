import express from "express";
import axios from "axios";


// Set up application 
const app = express();
app.set("view engine", "ejs"); // Use EJS to process template files under the 'views' folder
const port = 3000; // Create a port for hosting the website
const API_URL = "http://www.thecocktaildb.com/api/json/v1/1/random.php"; // Create a constant with the API URL
app.use(express.urlencoded({ extended: true })); // Parse URL encoded data from incoming requests


// const apiKey = "1";


app.use(express.static("public")); // Make all the file from the 'public' folder accessible to the client's browser via HTTP requests

// GET endpoint to render the 'index.ejs' file to user's browser
app.get("/", (req, res) => {    
    res.render("index.ejs");
})


// POST endpoint to acquire data from the API
app.post("/", async (req, res) => {
    try{
        const result = await axios.get(API_URL); // Fetches data from API URL when get the response from the client's side
        const drink = result.data.drinks[0]; // Access the first element of the 'drinks' array

        

        // Loop through the "ingredients" array and display them to user's browser
        const ingredients = [];
        for(let i = 1; i<15; i++){
            const ingredient = drink[`strIngredient${i}`];
            if (ingredient){
                ingredients.push(ingredient);
            }
        }

        // Same process as "ingredients" component, but for "measures" component
        const measures = [];
        for(let j = 1; j<15; j++){
            const measure = drink[`strMeasure${j}`];
            if (measure){
                measures.push(measure);
            }
        }

        // Render acquired data to index.ejs
        res.render("index.ejs", { drink, ingredients, measures });

    } catch (error) {
        console.log("Failed to make request:", error.message); // If there is any error, display to the terminal
        res.status(500).send("Failed to fetch data. Please try again."); // This is the message send to the browser for user
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})