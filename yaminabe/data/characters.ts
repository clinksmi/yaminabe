// data/characters.ts

// キャラクター一人の「設計図」を作ります
// この設計図に沿って、キャラクターの情報を整理していくよ！
export type Character = {
  id: string; // キャラクターを見分けるための「名札の番号」みたいなもの
  name: string; // 名前
  catchphrase: string; // キャッチコピー/一言紹介
  personality: string; // 性格
  birthday?: string; // 誕生日 (日付形式：例 "2000-01-01") ?が付いているのは、もし情報がない場合は書かなくてもいいよ、という意味 ← ★birthdateからbirthdayに統一したよ！
  height?: number; // 身長 (cm)
  weight?: number; // 体重 (kg)
  likes?: string; // 好きなもの/こと ← ★favoriteThingsからlikesに統一したよ！
  dislikes?: string; // 苦手なもの/こと ← ★日本語から英語のdislikesにしたよ！
  abilities?: string; // 特技/能力 ← ★日本語から英語のabilitiesにしたよ！
  quirk?: string; // 口癖/決めゼリフ ← ★日本語から英語のquirkにしたよ！
  origin?: string; // 出身地/生い立ち (※クリックで表示される形式を検討)
  appearance?: string; // 登場作品

  // イラスト情報 (複数枚に対応できるようにするよ！) ← ★imagesからillustrationsに統一したよ！
  illustrations: {
    fullBody: string; // 全身立ち絵のファイルパス（画像がどこにあるかを示す住所）
    face?: string; // 顔グラ（キャラクターカードで使う代表の顔）← ★これを追加したよ！
    faceExpressions?: string[]; // 顔グラ（表情差分など複数可）のファイルパスのリスト
  };

  // 関連キャラクター (複数いる場合に対応できるようにするよ！)
  relatedCharacters?: string[]; // 関連キャラクターのIDのリスト

  // 豆知識/裏話 (※クリックで表示される形式を検討)
  trivia?: string; // ← ★notesからtriviaに統一したよ！
};

// ここに実際のキャラクターの情報を書き込んでいく場所を作るよ！
export const characters: Character[] = [
  {
    id: "001", // このキャラクターを区別する名前（半角英数字で、他の子と被らないように）
    name: "雛瀬 才李",
    catchphrase: "自分は自分であり、それは変えようのない事実である。",
    personality: "明るくて元気いっぱいだけど、少しドジなところもある優しい妖精。",
    birthday: "2003-11-30", // 例: 誕生日の日付 ← ★birthdateからbirthdayに統一したよ！
    height: 173, // 例: 155 (cm)
    weight: 60, // 例: 45 (kg)
    likes: "同居人と過ごすこと", // ← ★favoriteThingsからlikesに統一したよ！
    dislikes: "雪、一人になること。", // ← ★日本語から英語のdislikesにしたよ！
    abilities: "勉強", // ← ★日本語から英語のabilitiesにしたよ！
    quirk: "特になし", // ← ★日本語から英語のquirkにしたよ！
    origin: "後ほど",
    appearance: "「果てにて」", // 登場作品

    illustrations: { // ← ★imagesからillustrationsに統一したよ！
      fullBody: "/images/lily_fullbody.png", // 後で使う画像のファイル名（今は適当でOK）
      face: "/images/lily_face.png", // ← ★これを追加！カードに表示する代表の顔の画像だよ。もしないならfaceExpressionsの最初の画像とかでもいいよ。
      faceExpressions: [
        "/images/lily_smile.png", // 笑顔
        "/images/lily_angry.png", // 怒った顔
        "/images/lily_sad.png", // 悲しい顔
      ],
    },
    relatedCharacters: ["kaito-002"], // 関連キャラクターのID（もしいたら）
    trivia: "実は、甘いものが大好きで、こっそり夜中に冷蔵庫を漁っていることがある。", // 豆知識 ← ★notesからtriviaに統一したよ！
  }
];