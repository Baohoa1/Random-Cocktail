# Random Cocktail Generator

外部APIを利用し、ランダムにカクテルを表示するシンプルなWebアプリケーション。<br/>
ユーザーが直感的に新しい一杯と出会える体験を目的として制作した。

### Preview
* <ins> ランダムカクテル表示機能）<br/>
* <ins> 外部API連携 <br/>
* <ins> 多言語レシピ表示 <br/>
* <ins> シンプルなワンページUI<br/>
* <ins> Axiosによる非同期通信<br/>

### 制作背景
外部APIを利用したデータ取得から表示までの流れを学習する目的で制作。<br/>
Axiosを利用したAPI通信を実装し、フロントエンドとバックエンドの連携を意識した構成としている。

### コンセプト
多くのレシピサイトでは選択肢が多く、ユーザーが「何を選ぶか」で迷ってしまうことがある。<br/>
本アプリでは、あえて検索機能や詳細なフィルタリングを設けず、ランダム表示に特化することで、偶発的な出会いを楽しめる体験を目指した。<br/>
ボタンを押すだけで次のカクテルを表示できるシンプルな構成とし、誰でも直感的に操作できるUI/UXを重視している。

### 制作期間
約3ヶ月（業務後や週末の時間を活用して制作）

### 担当領域
* <ins>企画・設計<br/>
- 情報設計<br/>
- UI/UX設計<br/>

* <ins>デザイン<br/>
- 視認性を意識した画面設計<br/>
- レイアウト設計<br/>
- ビジュアルデザイン<br/>

* <ins>実装<br/>
- APIデータ取得処理<br/>
- 非同期通信実装<br/>
- フロントエンド／バックエンド実装<br/>

* <ins>使用技術<br/>
Frontend - HTML / CSS / Bootstrap<br/>
Backend - Node.js / Express.js<br/>
API Communication - Axios<br/>
Design - Figma<br/>


### 工夫したポイント

#### UX
- ページ遷移を最小限に抑え、ワンボタン操作で完結する導線設計
- 「Click to Generate!」という体験に集中できるシンプルな構成

#### UI
- カクテル画像・名前・レシピ情報の優先度を整理
- ワンページ表示を前提とした視線誘導を設計
- 多言語レシピ表示による情報理解をサポート

### 成果
外部APIを利用したWebアプリケーション開発を通じて、データ取得から表示までのフローを理解した。<br/>

また、非同期通信による動的なコンテンツ更新を実装することで、ユーザー体験を損なわない画面設計の重要性を学んだ。<br/>

### Screenshot
 "Click to Generate!" 
<img width="2854" height="1614" alt="Screenshot 2025-10-03 205017" src="https://github.com/user-attachments/assets/fda2a2a3-5c66-413f-bbd5-997a9d2e4f85" />


<img width="2873" height="1531" alt="image" src="https://github.com/user-attachments/assets/d2f45302-8402-41a9-a7f3-79e6154ce3f6" />

### インストール方法
まず、Gitをインストールするのは必要になります。
このプロジェクトをローカルで実行するには、Node.js の依存関係と Express.js パッケージをダウンロードし、以下の手順に従ってインストールしてください。<br/>
#### Step 1: `git clone https://github.com/Baohoa1/Random-Cocktail.git` <br/>
#### Step 2: `cd Random-Cocktail` <br/>
#### Step 3: `npm install` <br/>
#### Step 4: `npm install -g nodemon` <br/>

インストール後に, `nodemon index.js` でコマンドプロンプトを起動して、ブラウザの「localhost:3000/」でプロジェクトを実行することになっております。
このようなのエラーにあったら：
![npm-command-disable_02](https://github.com/user-attachments/assets/7571caa8-f717-43e0-b69a-d55828a2007c)

こんなように解決できます：
https://a-m-t.co.jp/blog/npm-command-disable/
