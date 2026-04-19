# @hilosiva/biome-config

> Biome shared config for @hilosiva projects

Biome v2 向けの共有設定です。`recommended` をベースに、Web 制作でよく使うカスタム CSS 関数・at-rule に対応したルールを調整しています。

```bash
npm install -D @hilosiva/biome-config @biomejs/biome
# or
pnpm add -D @hilosiva/biome-config @biomejs/biome
```

## Requirements

- **Biome**: 2.0.0 以上

---

## Usage

`biome.jsonc` で extends するだけで使えます。

```jsonc
{
  "$schema": "https://biomejs.dev/schemas/2.4.12/schema.json",
  "extends": ["@hilosiva/biome-config"]
}
```

### Astro プロジェクトの場合

フロントマターとテンプレート間の変数追跡が Biome の既知制限のため、`.astro` ファイルで `noUnusedImports` / `noUnusedVariables` の誤検知が発生します。`overrides` で対応してください。

```jsonc
{
  "extends": ["@hilosiva/biome-config"],
  "javascript": {
    "globals": ["Astro"]
  },
  "overrides": [
    {
      "includes": ["**/*.astro"],
      "linter": {
        "rules": {
          "correctness": {
            "noUnusedImports": "off",
            "noUnusedVariables": "off"
          }
        }
      }
    }
  ]
}
```

---

## 設定内容

### Formatter

| 項目 | 設定値 |
|------|--------|
| インデント | スペース |
| 行幅 | 120 |
| クォート（JS/TS） | ダブルクォート |

### その他

- `organizeImports` — import の自動整列を有効
- `vcs.useIgnoreFile` — `.gitignore` を自動参照
- `files.ignoreUnknown` — 未知の拡張子（`.astro` 等）は無視

---

## OFF にしているルール

| ルール | 理由 |
|--------|------|
| `correctness/noUnknownMediaFeatureName` | `@custom-media --md` など、カスタムメディアクエリを使うため |
| `correctness/noUnknownFunction` | `fluid()` など、ビルド時に変換されるカスタム CSS 関数を使うため |
| `suspicious/noUnknownAtRules` | `@custom-media` など CSS 仕様準拠のカスタム at-rule を使うため |
| `complexity/noForEach` | `forEach` の可読性を優先するため |

---

## 追加で有効化しているルール

### correctness

| ルール | 説明 |
|--------|------|
| `noMissingVarFunction` | CSS カスタムプロパティを `var()` なしで使用するとエラー |
| `noUnknownPseudoClass` | 存在しない疑似クラス（例: `:hoveer`）をエラー |
| `noUnknownPseudoElement` | 存在しない疑似要素（例: `::beefore`）をエラー |
| `noUnknownTypeSelector` | 存在しない要素セレクター（例: `div2`）をエラー |

### suspicious

| ルール | 説明 |
|--------|------|
| `noDuplicateProperties` | 同じ CSS プロパティの重複定義をエラー |
| `noIrregularWhitespace` | 不可視の不正な空白文字をエラー |

### style

| ルール | 説明 |
|--------|------|
| `noDescendingSpecificity` | 詳細度が下がるセレクターの上書きをエラー。詳細度は低い順（上→下）に書く |

### complexity

| ルール | 説明 |
|--------|------|
| `noUselessUndefinedInitialization` | `let x = undefined;` のような無意味な初期化を警告 |

---

## License

MIT © Shibata Hironori
