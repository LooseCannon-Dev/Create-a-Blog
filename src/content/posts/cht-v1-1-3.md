---
title: Code History Tracker V1.1.3 업데이트
description: 코드 자동 정리에서 함수 설명 주석 모양이 깨지던 문제를 고쳤습니다.
date: 2026-08-12T13:47:45
tags: [CodeHistoryTracker, 업데이트]
category: Code History Tracker
---

작동 환경: Windows 10 이상 64비트

## 버그 수정
- 코드 자동 정리에서 함수 설명 주석의 끝나는 줄이 윗줄에 붙어 버리던 문제를 바로잡았습니다. `/**`로 시작하는 문서화 주석은 원래 손대지 않기로 되어 있었는데 실제로는 붙고 있었습니다. 이제 아래처럼 그대로 유지됩니다.

```
/**
  * @brief 설명
  * @retval None
  */
```

## 개선
- 코드 자동 정리에서 함수 설명 주석 앞에 빈 줄을 한 줄 넣어 줍니다. 바로 위에 코드나 다른 주석이 붙어 있을 때만 넣으며, 파일 맨 앞이나 블록이 막 시작한 자리에는 넣지 않습니다. C와 C++에 적용됩니다.

[V1.1.3 내려받기](https://github.com/LooseCannon-Dev/CodeHistoryTracker-releases/releases/tag/v1.1.3)
