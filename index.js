import express from "express";
import axios from "axios";


// アプリセットアップ
const app = express();
app.set("view engine", "ejs"); //EJSで「view」フォルダーのファイル経路。
const port = 3000; // ウェブをホストするのポート。
const API_URL = "http://www.thecocktaildb.com/api/json/v1/1/random.php"; // APIのURLの定数を作る。
app.use(express.urlencoded({ extended: true })); // 受信リクエストからURLエンコードされたのデータを解析する


// const apiKey = "1";


app.use(express.static("public")); //「public」フォルダのすべてのファイルをHTTPリクエストの経由でクライアントのブラウザでアクセスできるようにします。

// GETエンドポイントは：「index.js」がブラウザにレンダリングされる。
app.get("/", (req, res) => {    
    res.render("index.ejs");
})


// POSTエンドポイントは：APIのデータを取得される。
app.post("/", async (req, res) => {
    try{
        const result = await axios.get(API_URL); // クライアントのブラウザ側から応答を受け取るの際、APIのURLをアクセスする。
        const drink = result.data.drinks[0]; // 「drink」配列の最初の要素にアクセスする。

        

        // 「材料」配列をループして、ユーザーのブラウザにデータを表示する。
        const ingredients = [];
        for(let i = 1; i<15; i++){
            const ingredient = drink[`strIngredient${i}`];
            if (ingredient){
                ingredients.push(ingredient);
            }
        }

        // 「測定」配列をループして、ユーザーのブラウザにデータを表示する。
        const measures = [];
        for(let j = 1; j<15; j++){
            const measure = drink[`strMeasure${j}`];
            if (measure){
                measures.push(measure);
            }
        }

        // 取得された三つのデータを「index.ejs」にレンダリングする。
        res.render("index.ejs", { drink, ingredients, measures });

    } catch (error) {
        console.log("Failed to make request:", error.message); // エラーが出たら、ターミナルの画面をエラーメッセージを表示します。
        res.status(500).send("Failed to fetch data. Please try again."); // ユーザーのブラウザにこのエラーメッセージを表示します。
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})