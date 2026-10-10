---
title: ReFinder V1.0.9 업데이트
description: 메모리 규칙 묶음이 Claude뿐 아니라 ChatGPT와 Gemini 메모리도 봅니다.
date: 2026-09-29T14:14:14
tags: [ReFinder, 업데이트]
category: ReFinder
---

Windows 10 이상 64비트에서 씁니다.

- 형식 검사의 규칙 묶음 'Claude 메모리' 를 **'AI Agent 메모리'** 로 바꾸고, 어느 AI 도구의 메모리인지 고를 수 있게 했습니다.
  - Claude: 지금까지의 Claude 메모리 규칙 그대로입니다. 쓰던 보관함은 따로 손대지 않아도 그대로 이어집니다.
  - ChatGPT: ChatGPT 데스크톱 앱과 Codex 가 함께 쓰는 로컬 메모리 폴더의 규칙입니다. 요약 파일의 첫 줄과 크기를 봅니다. 웹 ChatGPT 의 메모리는 파일로 남지 않아 볼 수 없습니다.
  - Gemini: Gemini CLI 의 프로젝트 메모리 폴더입니다. 따로 정한 형식이 없어 머리말이 깨진 문서만 봅니다.
  - 메모리 폴더를 처음 열면 폴더 위치를 보고 알맞은 도구를 저절로 고릅니다.
- 상태 줄의 '바뀜' 옆에 보관함에서 가장 최근에 수정된 날짜와 시간을 보여 줍니다.
- Claude 가 부르는 링크 도구를 ChatGPT(Codex) · Gemini CLI 에도 등록할 수 있다는 것과 쓰는 법을 담은 사용 설명서를 더했습니다.
- 새 회차를 설치하는 도중에 Claude 대화가 링크 도구를 다시 띄우면 '액세스가 거부되었습니다' 로 설치가 멈추던 문제를 고쳤습니다.

[V1.0.9 내려받기](https://github.com/LooseCannon-Dev/ReFinder-releases/releases/tag/v1.0.9)
