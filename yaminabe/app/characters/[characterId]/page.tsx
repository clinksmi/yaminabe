// app/characters/[id]/page.tsx

import { characters } from '@/data/characters'; // 君のキャラクターデータを持ってくるよ！

interface CharacterDetailPageProps {
  params: {
    id: string; // URLの[id]の部分が、文字列としてここに来るよ
  };
}

export default function CharacterDetailPage({ params }: CharacterDetailPageProps) {
  // ここで、URLのidを使って、キャラクターデータの中からぴったりの子を探し出すよ！
  // find() は、「見つかるまで一つずつ探してね」っていう命令だね。
  // character.id が params.id と同じキャラクターを見つけたら、それを 'character' 変数に入れるんだ。
  // ★c.id === parseInt(params.id) だったのを、c.id === params.id に変えたよ！
  //   IDが文字列（string）なので、数字に変換せず、文字列同士でそのまま比べるんだ。
  const character = characters.find(c => c.id === params.id);

  // もしキャラクターが見つからなかったら、ごめんねのメッセージを出すよ。
  if (!character) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold text-red-500 mb-4">エラーだよ！</h1>
        <p className="text-xl text-gray-700">お探しのキャラクターは見つかりませんでした...！</p>
      </div>
    );
  }

  // キャラクターが見つかったら、その子の情報を表示するぞ！
  // Tailwind CSSのクラスを使って、ちょっとおしゃれにしてみよう。
  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 text-center">{character.name}</h1>
      <p className="text-2xl text-gray-800 italic mb-8 text-center">"{character.catchphrase}"</p>

      {/* キャラクターの画像をたくさん表示できるといいね！まずは全身立ち絵から。 */}
      {/* ★illustrations.fullBody に変えたよ！ */}
      {character.illustrations && character.illustrations.fullBody && (
        <img
          src={character.illustrations.fullBody}
          alt={`${character.name}の全身立ち絵`}
          className="w-80 h-auto object-contain rounded-xl shadow-lg mb-8 border-4 border-white"
        />
      )}

      {/* ここから、他の情報もどんどん追加していこう！ */}
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full text-gray-700 leading-relaxed">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-indigo-600 mb-2">✨ 性格</h2>
            <p className="text-lg">{character.personality}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-indigo-600 mb-2">🎂 誕生日</h2>
            <p className="text-lg">{character.birthday}</p> {/* ★birthdayに変えたよ！ */}
          </div>
          <div>
            <h2 className="text-xl font-bold text-indigo-600 mb-2">📏 身長/体重</h2>
            <p className="text-lg">{character.height}/{character.weight}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-indigo-600 mb-2">💖 好きなもの</h2>
            <p className="text-lg">{character.likes}</p> {/* ★likesに変えたよ！ */}
          </div>
          <div>
            <h2 className="text-xl font-bold text-indigo-600 mb-2">💔 苦手なもの</h2>
            <p className="text-lg">{character.dislikes}</p> {/* ★dislikesに変えたよ！ */}
          </div>
          <div>
            <h2 className="text-xl font-bold text-indigo-600 mb-2">💪 特技/能力</h2>
            <p className="text-lg">{character.abilities}</p> {/* ★abilitiesに変えたよ！ */}
          </div>
        </div>

        {/* 口癖は、quirkという名前にしたよ。catchphraseと区別するためだよ！ */}
        {character.quirk && (
          <div className="mb-4 p-3 bg-indigo-50 rounded-md">
            <h2 className="text-xl font-bold text-indigo-600 mb-2">🗣️ 口癖/決めゼリフ</h2>
            <p className="text-lg italic">"{character.quirk}"</p> {/* ★quirkに変えたよ！ */}
          </div>
        )}

        {character.origin && (
          <div className="mb-4">
            <h2 className="text-xl font-bold text-indigo-600 mb-2">🗺️ 出身地/生い立ち</h2>
            <p className="text-lg">{character.origin}</p>
          </div>
        )}

        {/* 豆知識/裏話は、triviaという名前にしたよ！ */}
        {character.trivia && (
          <div className="mb-4">
            <h2 className="text-xl font-bold text-indigo-600 mb-2">💡 豆知識/裏話</h2>
            <p className="text-lg">{character.trivia}</p> {/* ★triviaに変えたよ！ */}
          </div>
        )}

        {character.relatedCharacters && character.relatedCharacters.length > 0 && (
          <div className="mb-4">
            <h2 className="text-xl font-bold text-indigo-600 mb-2">🤝 関連キャラクター</h2>
            <p className="text-lg">{character.relatedCharacters.join(', ')}</p>
          </div>
        )}
      </div>

      {/* ホームに戻るボタンもつけとこうね */}
      <a href="/" className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md">
        キャラクター一覧に戻る
      </a>
    </div>
  );
}