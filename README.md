### Ruil - REAH UI Library

Reactアプリで利用できるUIライブラリです。

[Panda CSS](https://panda-css.com/) によってデザインシステムを定義し、これらの基本的なコンポーネントと ヘッドレスUIライブラリである [Radix UI](https://www.radix-ui.com/) を用いた汎用UIを利用できます。

### ディレクトリ構成

- **.ladle** UIコンポーネントのカタログライブラリ[Ladle](https://ladle.dev/)のディレクトリ。
- **src** コンポーネントの実装が行われているディレクトリ。
  - **lib** 汎用的な機能を持つUIコンポーネント。Radix UI を用いて実装されている。
  - **layouts** 要素の配置に用いる基本的なコンポーネント。 `Box` や `Stack` など、Panda CSS の組み込みコンポーネントを利用する。
  - **primitive** プリミティブなHTMLのタグを styled component として扱えるようにしたもの。
  - **index.css** UIのスタイルをクライアントに適用させるためのCSSモジュール。
- **styled-system** - Panda CSS によって生成されたCSSファイルや styled component が配置される。 `panda codegen` 実行時に自動生成される。
- **panda.config.ts** - Panda CSS の設定ファイル、デザインテーマやグローバルスタイルを定義する。
- **postcss.config.ts** - PostCSSの設定ファイル。 Panda CSS のプラグインを指定することでスタイルを利用できる。

### プレビューの起動

```bash
$ pnpm dev
```

→ http://localhost:61000

### 使い方

Panda CSSの依存パッケージに加え、アプリに追加したいRadix UIのパッケージをインストールします

```bash
$ pnpm add -D @pandacss/dev @pandacss/preset-panda postcss
$ pnpm add @radix-ui/{必要なパッケージを指定}
```

`panda.config.ts` と `postcss.config.cjs` を自分のアプリに複製し、 src/下のコンポーネントのソースコードから必要なものをコピーして、アプリのデザインに合わせてカスタマイズしながらご利用ください。 （これらのコンポーネントの元のスタイルは[shadcn/ui](https://ui.shadcn.com/)を参考にしています。）
