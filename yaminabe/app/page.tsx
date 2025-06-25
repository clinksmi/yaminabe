// app/page.tsx

// 'use client' は、このファイルがユーザーのブラウザ側で動くコンポーネントだよ、っていうおまじない。
// 検索ボックスみたいに「ユーザーが何か入力したり、ボタンを押したりする」動きがあるコンポーネントには、このおまじないが必要なんだ。
'use client';

import { useState, useEffect } from 'react'; // ★これらを追加するよ！
import CharacterList from '../components/CharacterList'; // キャラクター一覧を表示するコンポーネント
import { characters } from '@/data/characters'; // 君のキャラクターデータ

export default function Home() {
  // 検索ボックスに入力された文字を保存する場所（state）を作るよ。
  // 最初は何も入力されてないから、空っぽの文字列（''）を入れておくね。
  const [searchTerm, setSearchTerm] = useState('');

  // 検索結果のキャラクターたちを保存する場所（state）を作るよ。
  // 最初は全部のキャラクターが入ってる状態にしておくね。
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  // useEffect は、「何か変化があったら、この中の処理をしてね」っていうおまじないだよ。
  // ここでは、searchTerm（検索ボックスの入力内容）が変わるたびに、キャラクターを絞り込む処理をするように設定するよ。
  useEffect(() => {
    // 検索ボックスに何も入力されていなかったら、全部のキャラクターを表示するよ。
    if (searchTerm === '') {
      setFilteredCharacters(characters);
    } else {
      // 検索ボックスに文字が入力されていたら、その文字を含むキャラクターだけを探し出すよ！
      // filter() は、「条件に合うものだけを選んでね」っていう命令だね。
      // toLowerCase() は、大文字小文字を区別しないように、全部小文字に変換してるよ。
      const results = characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase()) || // 名前に検索ワードが含まれているか
        character.personality.toLowerCase().includes(searchTerm.toLowerCase()) || // 性格に検索ワードが含まれているか
        character.catchphrase.toLowerCase().includes(searchTerm.toLowerCase()) // キャッチコピーに検索ワードが含まれているか
        // 必要なら、ここに他の項目も追加できるよ！
      );
      setFilteredCharacters(results); // 絞り込んだキャラクターたちを保存するよ。
    }
  }, [searchTerm]); // searchTerm が変わるたびに、この中の処理が実行されるよ。

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <header className="text-center mb-12">
        <h1 className="text-6xl font-extrabold text-indigo-800 drop-shadow-lg mb-4">
          ぼくのキャラクターデータベース
        </h1>
        <p className="text-xl text-gray-700">
          ぼくが作った個性豊かなキャラクターたちを紹介するよ！
        </p>
      </header>

      {/* 検索ボックスを追加するよ！ */}
      <div className="max-w-xl mx-auto mb-8 p-4 bg-white rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="キャラクターの名前やキーワードで探す！"
          className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerm} // 入力ボックスの中身は searchTerm と連動させるよ。
          onChange={(e) => setSearchTerm(e.target.value)} // 文字が入力されたら、searchTerm を更新するよ。
        />
      </div>

      {/* 絞り込まれたキャラクターたちを CharacterList コンポーネントに渡して表示するよ */}
      {filteredCharacters.length === 0 ? (
        <p className="text-center text-2xl text-gray-600 mt-10">
          ごめんね、お探しのキャラクターは見つからなかったよ...！
        </p>
      ) : (
        <CharacterList characters={filteredCharacters} />
      )}
    </div>
  );
}