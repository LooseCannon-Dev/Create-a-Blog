---
title: Code History Tracker V1.2.4 업데이트
description: 실시간 연동 중에 편집기에서 저장이 안 되던 문제를 고쳤습니다.
date: 2026-09-30T09:57:16
tags: [CodeHistoryTracker, 업데이트]
category: Code History Tracker
---

작동 환경: Windows 10 이상 64비트

## 버그 수정
- **실시간 연동 중에 편집기에서 저장이 안 되던 문제를 고쳤습니다.** 코히트가 바뀐 파일을 읽어 기록하는 아주 짧은 순간에, 그 파일을 편집기에서 저장하면 "다른 곳에서 사용 중"이라며 저장에 실패할 수 있었습니다. 이제 코히트가 파일을 읽는 동안에도 다른 프로그램이 그 파일을 저장할 수 있습니다.
- 참고로 실시간 연동을 켜 둔 동안에는 **프로젝트 폴더 자체를 지우거나 이름을 바꾸는 것**은 막힙니다. 실시간 연동을 끄면 됩니다.

[V1.2.4 내려받기](https://github.com/LooseCannon-Dev/CodeHistoryTracker-releases/releases/tag/v1.2.4)
