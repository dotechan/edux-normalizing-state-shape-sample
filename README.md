# 概要
Redux Style GuideのStateの正規化に従わないとどれくらいパフォーマンスが悪くなるのか確認するためのサンプルプロジェクト

## ブランチ
### bad
- ReduxのStateで正規化せずにArray型を保持している
- コンポーネントのメモ化をしていない

### good
- ReduxのStateで正規化したObject型を保持している
- コンポーネントのメモ化をしている

## 参考
(Normalizing State Shape)[https://redux.js.org/usage/structuring-reducers/normalizing-state-shape]
