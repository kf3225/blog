// 1. `astro:content` からユーティリティをインポート。
import { defineCollection } from "astro:content";
import { postSchema } from "../schemas/PostSchema";

// 2. 検証したいコレクションごとにスキーマを定義する。
const postsCollection = defineCollection({ schema: postSchema });

// 3. コレクションを登録するために `collections` オブジェクトをエクスポート。
// `key` が 1. で作った `<コレクション名>` に対応している。
export const collections = {
  posts: postsCollection,
};
