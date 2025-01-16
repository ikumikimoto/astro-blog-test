---
title: 'その2. 爆速環境をデプロイする'
description: ''
pubDate: 'Jan 04 2025'
heroImage: '/blog-placeholder-1.jpg'
---

## デプロイ環境（AWSで）

- 高速配信といえばもちろん（多分）S3 × CloudFront
    - SSL対応可能
    - キャッシュ化による高速配信
    - 格安で使える（アクセスがすくない）

## 手順

### Amazon S3 にバケットを作成

ほとんどデフォルト設定ですが、一旦パブリックアクセスにします。

画像

### 作成したバケットに出力されたプロジェクトをアップロード

画像

### Amazon CloudFrontインスタンスの作成

新規ディストリビューションを作成します。
オリジンでは先ほど作成したS3を使用

画像

WFの設定も可能です。

画像

後ほどBasic認証も設定してみます。
（Web業界では何らかの認証は必須）

### S3バケットにCloudFrontインスタンスからのアクセス設定

バケットポリシーにCroudFrontのアクセス許可を設定
[ポリシージェネレータ](https://awspolicygen.s3.amazonaws.com/policygen.html) でではうまく設定が作成されなかったので調べて設定

### CloudFrontでオリジンの設定

オリジン設定の際に、S3バケットポリシーの自動更新もYesにすることでS3バケットの自動更新が行われます。

最終的なバケットポリシーはこちら
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowCloudFrontServicePrincipalReadOnly",
            "Effect": "Allow",
            "Principal": {
                "Service": "cloudfront.amazonaws.com"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::astro-blog-250118/*",
            "Condition": {
                "StringEquals": {
                    "AWS:SourceArn": ""
                }
            }
        },
        {
            "Sid": "2",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E2JY5V97AZNNXA"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::astro-blog-250118/*"
        }
    ]
}
```

### 一旦デプロイ完了

https://dx3i5sm6msfpe.cloudfront.net/index.html

### index.html がなくてもみられるようにリダイレクト

CloudFront Functions に JavaScriptの関数を作成

画像

紐付けを行うとindex.htmlがなくてもみられるようになります。
https://dx3i5sm6msfpe.cloudfront.net/

### Basic認証もかける

こちらもCloudFront Functions で先ほど作ったビューワーリクエスト用の関数に追記

```
function handler(event) {
    var request = event.request;
    var uri = request.uri;
    var headers = request.headers;
    var authString = "Basic dGVzdDp0ZXN0";
    
    if (
        typeof headers.authorization === "undefined" ||
        headers.authorization.value !== authString
    ) {
        return {
            statusCode: 401,
            statusDescription: "Unauthorized",
            headers: { "www-authenticate": { value: "Basic" } }
        };
    }
    

    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    }

    else if (!uri.includes('.')) {
        request.uri += '/index.html';
    }
    
    return request;
  }
```

test:test
でBasic認証も動作しました。