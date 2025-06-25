// app/page.tsx

'use client'; // このページもユーザーの動きに合わせて表示が変わるから必要だよ

import { useState, useEffect } from 'react';
import Link from 'next/link'; // 他のページへジャンプするためのLinkコンポーネント
import { characters, Character } from '@/data/characters'; // 君のキャラクターデータとCharacter型をインポートするよ
import CharacterCard from '@/components/CharacterCard'; // キャラクターカードのコンポーネントも使うよ

export default function Home() {
  // ランダムに選ばれたキャラクターたちを保存する場所
  const [randomCharacters, setRandomCharacters] = useState<Character[]>([]);

  // ページが表示されたときに、ランダムなキャラクターを選ぶ処理をするよ
  useEffect(() => {
    // キャラクターの数が足りない場合は、持っているキャラクターを全て表示する
    const numToDisplay = Math.min(3, characters.length); // 3人表示したいけど、もし3人未満ならその数だけ

    const shuffled = [...characters].sort(() => 0.5 - Math.random()); // キャラクターデータをランダムにシャッフルする魔法！
    // sort(() => 0.5 - Math.random()) は、配列の要素をランダムな順番にするテクニックだよ。
    // [...characters] は、元のデータを壊さないようにコピーを作っているんだ。

    setRandomCharacters(shuffled.slice(0, numToDisplay)); // シャッフルされた中から、最初のnumToDisplay人を選ぶよ
  }, []); // [] は「このページが最初に表示されたときだけ実行してね」っていう意味だよ。

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex flex-col items-center justify-center">
      <header className="text-center mb-12">
        <h1 className="text-6xl font-extrabold text-indigo-800 drop-shadow-lg mb-4">
          ようこそ！ぼくのキャラクターの世界へ！
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          不思議な出会いが、君を待っているよ。
        </p>
      </header>

      {/* ランダムなキャラクターカードを並べる場所 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {randomCharacters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {/* 「もっと見る！」ボタン */}
      <Link href="/characters" passHref>
        <button className="px-10 py-5 bg-indigo-600 text-white text-2xl font-bold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
          全てのキャラクターを見る！
        </button>
      </Link>
    </div>
  );
}