// components/CharacterCard.tsx

// Reactを使うためのおまじないだよ
import React from 'react'; 
// dataフォルダにあるキャラクターの「設計図」（Character型）を持ってくるよ
// ★ここが大事！ Character型は characters.ts ではなく、types.ts から持ってくるようにしよう！
// import { Character } from '../data/characters'; // ←これは削除かコメントアウト
import { Character } from '../data/characters'; // ★これに修正するよ！

// Next.jsで画像を最適に表示するための特別な道具だよ
import Image from 'next/image';
// ★他のページへジャンプするためのLinkコンポーネントも追加するよ！
import Link from 'next/link'; // ★これ追加！


// このCharacterCardというお部屋が、どんな情報を受け取るか、設計図を書いておくよ
// 'character'という名前で、Character型のデータを受け取るよ、って意味だね
interface CharacterCardProps {
  character: Character;
}

// キャラクター一人分の情報を表示するための「お部屋（コンポーネント）」を作るよ！
const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    // ★ここを Link で囲んで、カード全体がクリックできるようにするよ！
    <Link href={`/characters/${character.id}`} passHref>
      {/* このdivが、キャラクターカード全体の枠だよ。Tailwind CSSで見た目を整えるよ */}
      {/* ★カード全体の幅を調整するクラスを追加するよ。例: max-w-sm (small) とか max-w-md (medium) */}
      {/* ★bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 これはそのままでOK */}
      {/* ★今回はカードの「幅」を明示的に指定してあげると調整しやすいよ。例えば w-64 とか w-72 とか */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105
                  w-64 mx-auto"> {/* ★ w-64 は幅が256px、mx-auto は中央寄せにするよ */}
        {/* キャラクターの全身立ち絵を表示する場所だよ */}
        {/* character.images.fullBodyには、画像ファイルの場所（パス）が入ってるんだ */}
        {/* widthとheightは、とりあえず仮の数字を入れてるけど、後で画像のサイズに合わせて調整できるよ */}
        {/* altは、もし画像が見えなかった時に表示される文字だよ */}
        {/* priorityは、この画像は大事だから早く読み込んでね！って意味のおまじない */}
        {/* ★heightの固定値を小さくするか、h-autoをやめて h-80 などの固定値にするか、調整してみよう */}
        <div className="relative w-full h-80 overflow-hidden"> {/* ★ h-auto を h-80 (height: 320px) に固定してみるよ */}
          <Image 
            src={character.images.fullBody} 
            alt={character.name} 
            // ★widthとheightの固定値は、親の div でサイズを制御するなら不要になるか、layout="fill" を使うなら削除してOK
            // width={300} // ←一旦コメントアウトか削除
            // height={400} // ←一旦コメントアウトか削除
            // ★ここを layout="fill" と objectFit="cover" に変更すると、親のdivのサイズに合わせて画像が自動で縮尺されるよ！
            layout="fill" // 親要素のサイズに合わせて画像を埋める
            objectFit="cover" // 画像が親要素に収まるようにトリミング
            className="w-full h-auto object-cover" // ★layout="fill" を使うなら、この `w-full h-auto` は不要になることが多いよ
            priority
          />
        </div>
        
        {/* カードの文字情報が入る場所だよ */}
        {/* ★p-4 (padding) はそのままでOK。名前やキャッチコピーの文字サイズを小さくしてみよう */}
        <div className="p-4">
          {/* キャラクターの名前だよ */}
          {/* ★text-xl (文字サイズ) を text-lg や text-base に変更してみよう */}
          <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">{character.name}</h3> {/* text-xl -> text-lg, truncate を追加で名前が長いとき省略 */}
          {/* キャラクターのキャッチコピーだよ */}
          {/* ★text-sm (文字サイズ) はそのままでOKだけど、line-clamp-2 を追加して2行までにするのもありかも */}
          <p className="text-sm text-gray-600 line-clamp-2">{character.catchphrase}</p> {/* line-clamp-2 を追加 */}
        </div>
      </div>
    </Link> 
  );
};

// このお部屋を他のファイルで使えるようにするおまじないだよ
export default CharacterCard;