// app/page.tsx

import CharacterList from '../components/CharacterList'; // <-- この行を追加！

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-extrabold text-purple-700 mb-8 text-center"> {/* 中央寄せにしてみたよ */}
        君のキャラクターデータベースサイトへようこそ！
      </h1>

      <CharacterList /> {/* <-- この行を追加！ */}

    </main>
  );
}