---
title: 'その3. 速度比較'
description: ''
pubDate: 'Jan 05 2025'
heroImage: '/blog-placeholder-3.jpg'
---

<style>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 13px;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f5f5f5;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f5f5f5;
}
</style>


## 速度比較をする
トップページを比較用に書き換え実験
10秒間で1万のリクエストを送ってみる

- レンタルサーバ
- Xserver static（無料）
- Github Pages（無料）
- S3 × CloudFront

## レンタルサーバ（Lolipop）

http://astro.hakobura-ssb.com/

エラー率: 2.5%  
1秒あたりの処理数: 258.6  
中央値: 1060ms  
多くの数を処理しているがレスポンスは遅め  

## Xserver static

https://st428310.static.jp/

エラー率: 0%  
1秒あたりの処理数: 89.9  
中央値: 865ms  
エラーなし  

## Github Pages

https://ikumikimoto.github.io/astro-blog-test/

エラー率: 81.99%  
1秒あたりの処理数: 328.3（1900リクエスト）  
流石に無理だった  

## S3 × CloudFront

https://dx3i5sm6msfpe.cloudfront.net/

エラー率: 0%  
1秒あたりの処理数: 172.1  
中央値: 257ms  
表示速度の中央値がLolipop, Xserver static の4〜5倍ほどの数値  
エラーなく、非常に安定している  

## 表で

| サーバー名             | URL                                                   | エラー率     | 1秒あたりの処理数  | 中央値    | コメント                                       |
|------------------------|-------------------------------------------------------|--------------|--------------------|-----------|-----------------------------------------------|
| レンタルサーバ（Lolipop） | [astro.hakobura-ssb.com](http://astro.hakobura-ssb.com/) | 2.5%         | 258.6              | 1060ms    | 多くの数を処理しているがレスポンスは遅め         |
| Xserver static         | [st428310.static.jp](https://st428310.static.jp/)     | 0%           | 89.9               | 865ms     | エラーなし                                     |
| Github Pages           | [astro-blog-test](https://ikumikimoto.github.io/astro-blog-test/) | 81.99%       | 328.3（1900リクエスト）| -         | 流石に無理だった                               |
| S3 × CloudFront        | [CloudFront](https://dx3i5sm6msfpe.cloudfront.net/)   | 0%           | 172.1              | 257ms     | 表示速度がLolipop, Xserver staticの4〜5倍の速さ。エラーなく安定。 |