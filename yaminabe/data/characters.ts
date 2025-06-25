// キャラクター一人の「設計図」を作ります
// この設計図に沿って、キャラクターの情報を整理していくよ！
export type Character = {
  id: string; // キャラクターを見分けるための「名札の番号」みたいなもの
  name: string; // 名前
  gender: '男の子' | '女の子' | 'その他' | '不明'; // ← 例えばこんな感じで書いてみようか。「男の子」か「女の子」か「その他」か「不明」のどれかだよ、っていう意味だよ。
  catchphrase: string; // キャッチコピー/一言紹介
  personality: string; // 性格
  birthdate?: string; // 誕生日 (日付形式：例 "2000-01-01") ?が付いているのは、もし情報がない場合は書かなくてもいいよ、という意味
  height?: number; // 身長 (cm)
  weight?: number; // 体重 (kg)
  favoriteThings?: string; // 好きなもの/こと
  苦手なもの?: string; // 苦手なもの/こと
  特技?: string; // 特技/能力
  口癖?: string; // 口癖/決めゼリフ
  origin?: string; // 出身地/生い立ち (※クリックで表示される形式を検討)
  appearance?: string; // 登場作品

  // イラスト情報 (複数枚に対応できるようにするよ！)
  images: {
    fullBody: string; // 全身立ち絵のファイルパス（画像がどこにあるかを示す住所）
    faceExpressions?: string[]; // 顔グラ（表情差分など複数可）のファイルパスのリスト
  };

  // 関連キャラクター (複数いる場合に対応できるようにするよ！)
  relatedCharacters?: string[]; // 関連キャラクターのIDのリスト

  // 豆知識/裏話 (※クリックで表示される形式を検討)
  notes?: string;
};

// ここに実際のキャラクターの情報を書き込んでいく場所を作るよ！
export const characters: Character[] = [
  {
    id: "001", // このキャラクターを区別する名前（半角英数字で、他の子と被らないように）
    name: "雛瀬 才李",
    gender: '男の子' ,
    catchphrase: "自分は自分であり、それは変えようのない事実である。",
    personality: "明るくて元気いっぱいだけど、少しドジなところもある優しい妖精。",
    birthdate: "2003-11-30", // 例: 誕生日の日付
    height: 173, // 例: 155 (cm)
    weight: 60, // 例: 45 (kg)
    favoriteThings: "同居人と過ごすこと",
    苦手なもの: "雪、一人になること。",
    特技: "勉強",
    口癖: "特になし",
    origin: "後ほど",
    appearance: "「果てにて」", // 登場作品

    images: {
      fullBody: "/images/lily_fullbody.png", // 後で使う画像のファイル名（今は適当でOK）
      faceExpressions: [
        "/images/lily_smile.png", // 笑顔
        "/images/lily_angry.png", // 怒った顔
        "/images/lily_sad.png", // 悲しい顔
      ],
    },
    relatedCharacters: ["002"], // 関連キャラクターのID（もしいたら）
    notes: "実は、甘いものが大好きで、こっそり夜中に冷蔵庫を漁っていることがある。", // 豆知識
  },
   {
    id: "002", // このキャラクターを区別する名前（半角英数字で、他の子と被らないように）
    name: "aaaaaa",
    gender: '女の子' ,
    catchphrase: "自分は自分であり、それは変えようのない事実である。",
    personality: "明るくて元気いっぱいだけど、少しドジなところもある優しい妖精。",
    birthdate: "2003-11-30", // 例: 誕生日の日付
    height: 173, // 例: 155 (cm)
    weight: 60, // 例: 45 (kg)
    favoriteThings: "同居人と過ごすこと",
    苦手なもの: "雪、一人になること。",
    特技: "勉強",
    口癖: "特になし",
    origin: "後ほど",
    appearance: "「果てにて」", // 登場作品

    images: {
      fullBody: "/images/lily_fullbody.png", // 後で使う画像のファイル名（今は適当でOK）
      faceExpressions: [
        "/images/lily_smile.png", // 笑顔
        "/images/lily_angry.png", // 怒った顔
        "/images/lily_sad.png", // 悲しい顔
      ],
    },
    relatedCharacters: [""], // 関連キャラクターのID（もしいたら）
    notes: "実は、甘いものが大好きで、こっそり夜中に冷蔵庫を漁っていることがある。", // 豆知識
  },

   {
    id: "003", // このキャラクターを区別する名前（半角英数字で、他の子と被らないように）
    name: "dddddd",
    gender: 'その他' ,
    catchphrase: "自分は自分であり、それは変えようのない事実である。",
    personality: "明るくて元気いっぱいだけど、少しドジなところもある優しい妖精。",
    birthdate: "2003-11-30", // 例: 誕生日の日付
    height: 173, // 例: 155 (cm)
    weight: 60, // 例: 45 (kg)
    favoriteThings: "同居人と過ごすこと",
    苦手なもの: "雪、一人になること。",
    特技: "勉強",
    口癖: "特になし",
    origin: "後ほど",
    appearance: "「果てにて」", // 登場作品

    images: {
      fullBody: "/images/lily_fullbody.png", // 後で使う画像のファイル名（今は適当でOK）
      faceExpressions: [
        "/images/lily_smile.png", // 笑顔
        "/images/lily_angry.png", // 怒った顔
        "/images/lily_sad.png", // 悲しい顔
      ],
    },
    relatedCharacters: [""], // 関連キャラクターのID（もしいたら）
    notes: "実は、甘いものが大好きで、こっそり夜中に冷蔵庫を漁っていることがある。", // 豆知識
  },

   {
    id: "004", // このキャラクターを区別する名前（半角英数字で、他の子と被らないように）
    name: "母hは",
    gender: '男の子' ,
    catchphrase: "自分は自分であり、それは変えようのない事実である。",
    personality: "明るくて元気いっぱいだけど、少しドジなところもある優しい妖精。",
    birthdate: "2003-11-30", // 例: 誕生日の日付
    height: 173, // 例: 155 (cm)
    weight: 60, // 例: 45 (kg)
    favoriteThings: "同居人と過ごすこと",
    苦手なもの: "雪、一人になること。",
    特技: "勉強",
    口癖: "特になし",
    origin: "後ほど",
    appearance: "「果てにて」", // 登場作品

    images: {
      fullBody: "/images/lily_fullbody.png", // 後で使う画像のファイル名（今は適当でOK）
      faceExpressions: [
        "/images/lily_smile.png", // 笑顔
        "/images/lily_angry.png", // 怒った顔
        "/images/lily_sad.png", // 悲しい顔
      ],
    },
    relatedCharacters: [""], // 関連キャラクターのID（もしいたら）
    notes: "実は、甘いものが大好きで、こっそり夜中に冷蔵庫を漁っていることがある。", // 豆知識
  },

   {
    id: "005", // このキャラクターを区別する名前（半角英数字で、他の子と被らないように）
    name: "四宮",
    gender: '男の子' ,
    catchphrase: "自分は自分であり、それは変えようのない事実である。",
    personality: "明るくて元気いっぱいだけど、少しドジなところもある優しい妖精。",
    birthdate: "2003-11-30", // 例: 誕生日の日付
    height: 173, // 例: 155 (cm)
    weight: 60, // 例: 45 (kg)
    favoriteThings: "同居人と過ごすこと",
    苦手なもの: "雪、一人になること。",
    特技: "勉強",
    口癖: "特になし",
    origin: "後ほど",
    appearance: "「果てにて」", // 登場作品

    images: {
      fullBody: "/images/lily_fullbody.png", // 後で使う画像のファイル名（今は適当でOK）
      faceExpressions: [
        "/images/lily_smile.png", // 笑顔
        "/images/lily_angry.png", // 怒った顔
        "/images/lily_sad.png", // 悲しい顔
      ],
    },
    relatedCharacters: [""], // 関連キャラクターのID（もしいたら）
    notes: "実は、甘いものが大好きで、こっそり夜中に冷蔵庫を漁っていることがある。", // 豆知識
  }
  
];
