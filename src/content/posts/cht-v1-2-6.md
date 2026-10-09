---
title: Code History Tracker V1.2.6 업데이트
description: Source Insight와 IAR이 스스로 만드는 파일을 기본으로 기록하지 않습니다.
date: 2026-09-30T10:33:03
tags: [CodeHistoryTracker, 업데이트]
category: Code History Tracker
---

작동 환경: Windows 10 이상 64비트

## 개선
- **Source Insight와 IAR이 스스로 만드는 파일을 기본으로 기록하지 않습니다.** 이 파일들은 편집·분석·빌드할 때마다 그 프로그램이 계속 다시 써서, 실시간 연동이 쉬지 않고 다시 확인하게 만들고 그 프로그램의 저장과 부딪힐 수 있었습니다. 이번에 기본 제외 목록에 넣은 항목은 다음과 같습니다.
  - Source Insight 프로젝트 데이터베이스
  - IAR 작업 상태(창 배치·디버거 설정)
  - IAR 빌드 결과물(실행 파일·목록 파일)과 의존성 파일
- IAR 프로젝트 설정 파일은 계속 기록됩니다. IAR 폴더 밖에 있는 같은 이름의 폴더도 그대로 기록되므로, 다른 프로젝트에는 영향이 없습니다.
- **쓰고 계시던 설정에도 자동으로 한 번 추가됩니다.** 업데이트 후 처음 켤 때 기본 제외 목록에 없는 항목만 더하고, 나중에 지우셔도 다시 넣지 않습니다.
- 이미 쌓인 기록에는 이 파일들이 남아 있습니다. 저장 공간을 줄이려면 프로젝트를 우클릭해 **예전 기록 정리**를 실행하세요.

[V1.2.6 내려받기](https://github.com/LooseCannon-Dev/CodeHistoryTracker-releases/releases/tag/v1.2.6)
