// components/CharacterCard.tsx

// Reactを使うためのおまじないだよ
// Next.jsのApp Routerでは基本的に不要だけど、あっても害はないから今回はこのままでOK！
import React from 'react';
// dataフォルダにあるキャラクターの「設計図」（Character型）を持ってくるよ
import { Character } from '../data/characters';
// Next.jsで画像を最適に表示するための特別な道具だよ
import Image from 'next/image';
// Next.jsでページを移動するときに使う特別なリンクの道具だよ！
import Link from 'next/link'; // ★ここを追加するよ！

// このCharacterCardというお部屋が、どんな情報を受け取るか、設計図を書いておくよ
// 'character'という名前で、Character型のデータを受け取るよ、って意味だね
interface CharacterCardProps {
  character: Character;
}

// キャラクター一人分の情報を表示するための「お部屋（コンポーネント）」を作るよ！
const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    // Linkで全体を囲むことで、このカードをクリックしたら詳細ページに飛ぶようになるよ！
    // href={/characters/${character.id}} で、どのキャラクターのページに飛ぶかを指定するんだ。
    // passHrefは、Linkの中にある要素にちゃんとリンクの情報を渡すためのおまじないだよ。
    <Link href={`/characters/${character.id}`} passHref>
      {/* このdivが、キャラクターカード全体の枠だよ。Tailwind CSSで見た目を整えるよ */}
      {/* cursor-pointerとhover:scale-105で、クリックできる感じを出すよ */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
        {/* キャラクターの全身立ち絵を表示する場所だよ */}
        {/* ここで大事なのは、character.illustrations?.fullBody のように「?」をつけること。
            もしfullBodyのイラストがないキャラクターがいてもエラーにならないようにするんだ。
            そして、イラストがある場合にだけ <Image> を表示するようにするよ！
        */}
        {character.illustrations?.fullBody && ( // ★ここを修正するよ！イラストがあるか確認するよ
          <Image
            src={character.illustrations.fullBody} // ★ここを修正するよ！ 'images' を 'illustrations' に変えたよ
            alt={character.name}
            width={300} // 仮のサイズ。後で画像のサイズに合わせて調整できるよ
            height={400} // 仮のサイズ。後で画像のサイズに合わせて調整できるよ
            className="w-full h-auto object-cover"
            priority // この画像は大事だから早く読み込んでね！って意味のおまじないだよ
          />
        )}

        {/* カードの文字情報が入る場所だよ */}
        <div className="p-4">
          {/* キャラクターの名前だよ */}
          <h3 className="text-xl font-bold text-gray-800 mb-1">{character.name}</h3>
          {/* キャラクターのキャッチコピーだよ */}
          <p className="text-sm text-gray-600">{character.catchphrase}</p>
        </div>
      </div>
    </Link>
  );
};

// このお部屋を他のファイルで使えるようにするおまじないだよ
export default CharacterCard;