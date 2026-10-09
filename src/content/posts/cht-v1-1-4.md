---
title: Code History Tracker V1.1.4 업데이트
description: 공백만 바뀐 줄 때문에 비교 줄이 밀리던 문제와 코드 자동 정리 문제를 고쳤습니다.
date: 2026-08-12T14:11:52
tags: [CodeHistoryTracker, 업데이트]
category: Code History Tracker
---

작동 환경: Windows 10 이상 64비트

## 버그 수정
- 비교 화면에서 같은 내용인데 다른 줄로 표시되던 문제를 바로잡았습니다. 들여쓰기나 공백만 바뀐 줄이 짝을 찾지 못하면 그 뒤 줄들이 한 칸씩 밀려, 코드 줄이 빈 줄과 나란히 놓이는 일이 있었습니다. 이제 공백을 무시하고 짝을 맞춘 뒤, 공백만 다른 줄은 지금처럼 별도 색으로 보여 줍니다.
- 코드 자동 정리에서 중괄호 없이 다음 줄에 쓴 조건문·반복문 본문의 들여쓰기가 사라지던 문제를 바로잡았습니다. 이제 조건문보다 한 단 안쪽에 그대로 놓입니다.

```
if(pin == 1)
    VIA5(ON);
else
    VIA5(OFF);
```

- 코드 자동 정리에서 주석으로 막아 둔 코드 블록의 끝 표시가 윗줄에 붙어 버리던 문제를 바로잡았습니다. 설명 주석이 아니라 코드를 통째로 주석 처리한 경우는 원래 모양 그대로 둡니다.

[V1.1.4 내려받기](https://github.com/LooseCannon-Dev/CodeHistoryTracker-releases/releases/tag/v1.1.4)
