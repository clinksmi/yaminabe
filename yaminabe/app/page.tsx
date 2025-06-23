// app/page.tsx
import { characters } from '../data/characters'; // これは追加済みだね！

export default function Home() {
  // まず、読み込んだキャラクターデータの一番最初のキャラクターを取り出すよ
  // キャラクターのリストは、配列（アレイ）っていう箱に入ってるんだけど
  // その一番最初の子を取り出すには、[0]って書くんだ。
  const firstCharacter = characters[0];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-extrabold text-purple-700 mb-8"> {/* 少し大きく、色も変えてみたよ！ */}
        君のキャラクターデータベースサイトへようこそ！
      </h1>

      {/* ここに、最初のキャラクターの名前を表示する部分を追加するよ！ */}
      {firstCharacter && ( // もしfirstCharacterが存在すれば、という意味のおまじない
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center"> {/* Tailwind CSSでちょっとおしゃれに！ */}
          <h2 className="text-2xl font-semibold text-gray-800">
            君の最初のキャラクター：
            <br /> {/* 改行タグだよ */}
            <span className="text-blue-500">{firstCharacter.name}</span> {/* キャラクターの名前だよ！ */}
          </h2>
          <p className="text-gray-600 mt-2">{firstCharacter.catchphrase}</p> {/* キャッチコピーも表示してみよう！ */}
        </div>
      )}

      

    </main>
  );
}