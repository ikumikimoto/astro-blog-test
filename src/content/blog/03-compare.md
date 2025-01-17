---
title: 'その3. 速度比較'
description: ''
pubDate: 'Jan 05 2025'
heroImage: '/blog-placeholder-3.jpg'
---

## 速度比較をする
トップページを比較用に書き換え実験
10秒で1万のリクエストを送ってみる

- レンタルサーバ
- Xserver static（無料）
- Github Pages（無料）
- S3 × CloudFront

## レンタルサーバ（Lolipop）

http://astro.hakobura-ssb.com/
エラー率: 0.9%
1秒あたりの処理数: 156.6

## Xserver static

https://st428310.static.jp/
エラー率: 1.62%
1秒あたりの処理数: 155.4

## Github Pages

https://ikumikimoto.github.io/astro-blog-test/
エラー率: 81.99%
1秒あたりの処理数: 328.3（1900リクエスト）

## S3 × CloudFront

https://dx3i5sm6msfpe.cloudfront.net/
エラー率: 0%
1秒あたりの処理数: 172.1
表示速度の中央値がLolipop, Xserver static の4倍ほどの数値
非常に安定している