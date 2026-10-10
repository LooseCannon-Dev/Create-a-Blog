---
title: Code History Tracker V1.2.9 업데이트
description: 메인 창에 LC-DEV 로고가 생기고, 언어를 바꿔도 일부 글자가 이전 언어로 남던 문제를 고쳤습니다.
date: 2026-10-10T19:56:02
tags: [CodeHistoryTracker, 업데이트]
category: Code History Tracker
---

작동 환경: Windows 10 이상 64비트

## 새 기능
- **메인 창 설정 단추 오른쪽에 LC-DEV 로고를 넣었습니다.** 로고를 누르면 만든 사람의 GitHub 페이지가 열립니다. 설정 창의 제목 옆에도 같은 로고가 보입니다.

## 고친 문제
- 설정에서 언어를 바꾸면 타임라인 칩의 종류(수동 · 최초)와 비교 화면의 리파인더 연동 상태 줄이 앱을 다시 켤 때까지 이전 언어로 남던 문제를 고쳤습니다. 트레이 아이콘의 메뉴도 바로 바뀝니다.
- 코드 자동 정리를 한 번 쓰고 나면 '변경된 파일' 같은 목록 제목이 언어를 바꿔도 이전 언어로 남던 문제를 고쳤습니다.
- 코드 자동 정리(C · C++ · C#)에서 한 줄로 쓴 if ~ else 문의 중괄호가 나뉘지 않던 문제를 고쳤습니다. 이제 조건문 · 반복문의 중괄호는 한 줄에 써 있어도 줄을 나눕니다. 배열 초기화는 전처럼 한 줄로 둡니다.

[V1.2.9 내려받기](https://github.com/LooseCannon-Dev/CodeHistoryTracker-releases/releases/tag/v1.2.9)
