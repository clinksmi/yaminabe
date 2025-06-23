// components/CharacterList.tsx

import React from 'react';
// dataフォルダにある全キャラクターのリスト（データ）を持ってくるよ
import { characters } from '../data/characters'; 
// さっき作ったCharacterCardのお部屋（コンポーネント）を持ってくるよ
import CharacterCard from './CharacterCard'; 

// CharacterListという「大きな棚」のお部屋を作るよ！
const CharacterList = () => {
  return (
    // このdivが、キャラクターカードを並べる全体の枠だよ。Flexboxという並べ方の魔法を使うよ
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {/*
        characters.map() は、魔法の呪文だよ！
        「characters（全キャラクターのリスト）のそれぞれのキャラクターについて、
        CharacterCardのお部屋を作って、そこにそのキャラクターの情報を渡してね」
        っていう意味なんだ。
      */}
      {characters.map((character) => (
        // mapを使うときは、keyっていう特別な情報を書いてあげるのがお約束だよ。
        // Reactが「これはどのキャラクターカードのお部屋か」を見分けるためだよ
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

// このお部屋を他のファイルで使えるようにするおまじないだよ
export default CharacterList;