# Production Run の変更
## kekcc
### 個別ラン用解析ディレクトリ
root/Run78/readAna/  -> root/Run78/readAna_20121211/
root/Run78/readBeam/ -> root/Run78/readBeam_20121211/
root/Run78/readChk/  -> root/Run78/readChk_20121211/

ファイルはプロダクションランのファイルのみ,459個

## Ag
移動前, ~/のサイズが 18G/30G

### マージファイル
raedAna.root -> readAna_20191213.root
readAna.rootは新ファイルへ

#### 統計数チェック
d(K-, n pi+ pi-)"X"           96590   98490
d(K-, n pi+ pi-)"n"           29519   29727
d(K-, n pi+ pi-)"n" w/o K0 Sf 10946   10953

### ローカルのpicファイル
pic -> pic_20191213 へ移行、picはエラー対策のため残す
Ag上では削除して新ファイルのみのファイルにする