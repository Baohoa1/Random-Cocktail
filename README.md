# Random Cocktail Generator

単純なランダムカクテルを作成のウェブサイトです。

### 説明

Express/Node.jsプラットフォームとAxios・HTTPクライアントを組み合わせて、無料のAPIからデータを抽出していきます。このウェブサイトでは、cocktaildbAPIからのデータを使用しています。

### Programming Language
* <ins>**Node.js**</ins>: Web サイトのサーバー側を構築するために使用される JavaScript ランタイム環境です。<br/>
* <ins>**Express.js**</ins>: 一時サーバーの作成、HTTPリクエストの処理、ウェブサイトのページルーティング、ミドルウェアの管理に使用するJavaScriptフレームワークです。このフレームワークはコード量を削減し、可読性を向上させます。<br/>
* <ins>**Axios Client package**</ins>:外部 API からのリクエストを処理するための JavaScript ライブラリ。<br/>
* <ins>**CSS**</ins>: ウェブサイトの詳細の部分をスタイリングのツール<br/>


### Website Functionality
このウェブサイトには、一つの機能だけがあります。「ランダムカクテル作成」というの機能です。

<img width="2854" height="1614" alt="Screenshot 2025-10-03 205017" src="https://github.com/user-attachments/assets/fda2a2a3-5c66-413f-bbd5-997a9d2e4f85" />
ランダムカクテルを作成した後、そのカクテルのレシピをこの下に表示されています。

<img width="2873" height="1531" alt="image" src="https://github.com/user-attachments/assets/d2f45302-8402-41a9-a7f3-79e6154ce3f6" />

### インストール方法

このプロジェクトをローカルで実行するには、Node.js の依存関係と Express.js パッケージをダウンロードし、以下の手順に従ってインストールしてください。<br/>
`git clone https://github.com/Baohoa1/Random-Cocktail.git` <br/>
`cd Random-Cocktail` <br/>
`npm install` <br/>
`npm install -g nodemon` <br/>
インストール後に, `nodemon index.js` でコマンドプロンプトを起動して、ブラウザの「localhost:3000/」でプロジェクトを実行することになっております。
