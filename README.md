# LooseCannon-Dev 블로그

직접 만든 툴과 AI 작업물을 소개하는 블로그입니다.

- 주소: https://loosecannon-dev.github.io/Create-a-Blog/
- `main` 브랜치에 반영되면 자동으로 빌드되어 게시됩니다.

## 글 쓰는 법

`src/content/posts/` 폴더에 마크다운 파일을 추가합니다. 파일 이름이 글 주소가 됩니다.
(예: `file-merger.md` → `/Create-a-Blog/posts/file-merger/`)

```md
---
title: 글 제목
description: 목록에 보일 한 줄 요약
date: 2026-10-09
tags: [툴, AI]
draft: false
---

본문
```

- `draft: true`로 두면 게시되지 않습니다.
- 이미지는 글 파일 옆에 두고 `![설명](./image.png)`로 넣습니다.

## 로컬에서 보기

```sh
npm install
npm run dev
```
