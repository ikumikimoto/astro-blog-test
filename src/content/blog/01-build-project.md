---
title: 'その1. bolt.new でAstroで構築した爆速なブログをAIに作ってもらいたかった'
description: ''
pubDate: 'Jan 03 2025'
heroImage: '/blog-placeholder-1.jpg'
---

手間の大幅削減のために構築にはAIを使いたいなあ

## bolt.new とは

[bolt.new](https://bolt.new/) は、AIによって様々な言語のプロジェクトごと生成するサービスです。

## 使ってみる

サイトにアクセスすると早速AIを使用することができます。

![bolt.new](/astro-1.png)

今回の目的に合致していた `Start a blog with Astro` のボタンをクリックするだけでこのブログが生成されました。

![bolt.new](/astro-2.png)

中を覗いてみると、ただの初期テンプレートでした👀
ここからカスタマイズも考えたが今回はやめておく

bolt.newでは、構築されたプロジェクトに対して要望を伝えるだけで修正もしてくれるので、フロントエンドよくわからないって方もぜひ一度使ってみてください。

生成されたプロジェクトはGithub連携でログインすることでエクスポートができるので、とりあえずエクスポートしました。

## Astroとは

Astroは、ブログやマーケティング、eコマースなど、コンテンツ駆動のウェブサイトを作成するためのウェブフレームワークです。Astroは、新しいフロントエンドアーキテクチャを開拓し、他のフレームワークと比較してJavaScriptのオーバーヘッドと複雑さを低減することで知られています。高速でSEOに優れたウェブサイトが必要なら、Astroが最適です。

公式サイトより引用

## Astroは最適化された MPA のアプリケーションを SSG できる

MPA: Multi Page Application
SSG: Static Site Generation

2023年には公式が他フレームワークとの比較を行なっており、パフォーマンスやSEOに関わるさまざまな項目でのレポートが確認できます。
以下はCWVをクリアしたサイトと、JavaScriptの読み込みKBの表です。

Astroは JavaScriptの読み込み量が少なく、CWV をクリアしている割合が高いことがわかる

![astro](/astro-3.png)


[もっと見たい方はこちらから](https://astro.build/blog/2023-web-framework-performance-report/)