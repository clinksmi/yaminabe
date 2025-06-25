// components/CharacterList.tsx

// まず、CharacterCard も Character型も使うからインポートしておくよ
import CharacterCard from './CharacterCard';
import { Character } from '@/data/characters'; // Character型も必要だよ！

// ここがとっても大事！
// CharacterListコンポーネントが「characters」という名前で
// Character型のリスト（配列）を受け取りますよ、という約束（型定義）をしているんだ。
interface CharacterListProps {
  characters: Character[]; // ここで「charactersっていう名前で、Characterのリストを受け取るよ」と宣言してる
}

// そして、実際にその約束通りに「characters」を受け取って使うよ、と書くんだ。
export default function CharacterList({ characters }: CharacterListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {characters.map(character => (
        // キャラクターカードを並べるために、CharacterCardコンポーネントに
        // key（リストの中でそれぞれを区別するためのID）と、キャラクター情報を渡すよ。
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}