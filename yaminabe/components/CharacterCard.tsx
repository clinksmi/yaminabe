// components/CharacterCard.tsx

// Reactを使うためのおまじないだよ
import React from 'react'; 
// dataフォルダにあるキャラクターの「設計図」（Character型）を持ってくるよ
import { Character } from '../data/characters'; 
// Next.jsで画像を最適に表示するための特別な道具だよ
import Image from 'next/image';

// このCharacterCardというお部屋が、どんな情報を受け取るか、設計図を書いておくよ
// 'character'という名前で、Character型のデータを受け取るよ、って意味だね
interface CharacterCardProps {
  character: Character;
}

// キャラクター一人分の情報を表示するための「お部屋（コンポーネント）」を作るよ！
const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    // このdivが、キャラクターカード全体の枠だよ。Tailwind CSSで見た目を整えるよ
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      {/* キャラクターの全身立ち絵を表示する場所だよ */}
      {/* character.images.fullBodyには、画像ファイルの場所（パス）が入ってるんだ */}
      {/* widthとheightは、とりあえず仮の数字を入れてるけど、後で画像のサイズに合わせて調整できるよ */}
      {/* altは、もし画像が見えなかった時に表示される文字だよ */}
      {/* priorityは、この画像は大事だから早く読み込んでね！って意味のおまじない */}
      <Image 
        src={character.images.fullBody} 
        alt={character.name} 
        width={300} 
        height={400} 
        className="w-full h-auto object-cover"
        priority
      />
      
      {/* カードの文字情報が入る場所だよ */}
      <div className="p-4">
        {/* キャラクターの名前だよ */}
        <h3 className="text-xl font-bold text-gray-800 mb-1">{character.name}</h3>
        {/* キャラクターのキャッチコピーだよ */}
        <p className="text-sm text-gray-600">{character.catchphrase}</p>
      </div>
    </div>
  );
};

// このお部屋を他のファイルで使えるようにするおまじないだよ
export default CharacterCard;
