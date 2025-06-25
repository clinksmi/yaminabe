// app/page.tsx

'use client';

import { useState, useEffect } from 'react';
import CharacterList from '@/components/CharacterList';
import { characters } from '@/data/characters';
// import { Character } from '@/data/types'; // Character型も必要になるかも、念のため。
// ↑もしcharacter.genderがunknownとかなるなら、これもimportしてみてね！

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [selectedGender, setSelectedGender] = useState<'全て' | '男の子' | '女の子' | 'その他' | '不明'>('全て');


  useEffect(() => {
    // まず、検索ワードで絞り込む処理（これはさっき作ったやつだね）
    let currentFiltered = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.personality.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.catchphrase.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // ★ここから性別でさらに絞り込む処理を追加するよ！
    if (selectedGender !== '全て') { // もし「全て」以外の性別が選ばれていたら…
      currentFiltered = currentFiltered.filter(character =>
        character.gender === selectedGender // その性別に合うキャラクターだけにするよ
      );
    }

    setFilteredCharacters(currentFiltered); // 最後に、絞り込んだキャラクターたちを保存するよ。

  }, [searchTerm, selectedGender]); // ★ searchTerm と selectedGender のどちらかが変わるたびに、この中の処理が実行されるようにするよ。


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

      {/* 検索ボックスと絞り込みドロップダウンをまとめるために、新しいdivで囲むよ */}
      <div className="max-w-xl mx-auto mb-8 p-6 bg-white rounded-xl shadow-lg flex flex-col space-y-4"> {/* flex-colとspace-y-4で縦並びにするよ */}
        {/* 検索ボックス */}
        <input
          type="text"
          placeholder="キャラクターの名前やキーワードで探す！"
          className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* ★ここが性別のドロップダウンリストになるよ！★ */}
        <div className="flex items-center space-x-2"> {/* ラベルとセレクトボックスを横並びにするよ */}
          <label htmlFor="gender-select" className="text-lg text-gray-700 font-medium whitespace-nowrap">性別:</label>
          <select
            id="gender-select"
            value={selectedGender} // 今選択されている性別と連動させるよ
            onChange={(e) => setSelectedGender(e.target.value as '全て' | '男の子' | '女の子' | 'その他' | '不明')} // 選択が変わったら selectedGender を更新するよ
            className="flex-grow p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          >
            {/* 選択肢（オプション）を追加していくよ */}
            <option value="全て">全て</option>
            <option value="男の子">男の子</option>
            <option value="女の子">女の子</option>
            <option value="その他">その他</option>
            <option value="不明">不明</option>
          </select>
        </div>
      </div>

      {/* 絞り込まれたキャラクターたちを表示 */}
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