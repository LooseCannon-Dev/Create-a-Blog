---
title: ReFinder V1.1.8 업데이트
description: "'메모리에 없는 일'이 말로 정한 결정까지 찾고 Codex · Gemini 메모리도 지원하며, '비슷한 문서'가 뜻으로도 찾습니다."
date: 2026-10-12T12:07:49
tags: [ReFinder, 업데이트]
category: ReFinder
---

Windows 10 이상 64비트에서 씁니다.

- 관리 화면 'Claude' 탭의 이름을 'AI Agent' 로 바꿨습니다.
- '메모리에 없는 일' 이 말로 정한 결정도 찾습니다. AI 가 "~할까요?" 처럼 묻거나 추천한 말에 "응 그렇게 해줘" 처럼 답해 정한 것인데 메모리에 옮겨 적지 않은 것을 보여 줍니다. 설정 '일반 → Claude 연동' 에서 끌 수 있습니다.
- '메모리에 없는 일' 을 Codex · Gemini CLI 의 메모리 폴더에서도 씁니다. 그 AI 의 대화 기록에서 만든 릴리스 · 태그와 말로 정한 결정을 찾습니다.
- '비슷한 문서' 가 뜻으로도 찾을 수 있습니다. "자동 저장을 끈다" 와 "저장은 Ctrl+S 로만 한다" 처럼 낱말은 다르지만 같은 내용을 적은 문서 짝을 '뜻이 비슷함' 으로 따로 보여 줍니다. 프로그램에 든 언어 모델로 이 PC 안에서만 계산하며 인터넷은 쓰지 않습니다. 설정 '코드 폴더 · 무시 목록' 의 '비슷한 문서' 에서 켜고, 기준과 문서 전체를 볼지 정합니다. 처음 한 번은 문서가 많을수록 오래 걸리고 그다음은 바뀐 문서만 다시 셉니다.
- 'AI Agent' 탭 위쪽의 고르기 단추가 칸이 좁을 때 잘리던 문제를 고쳤습니다.

![AI Agent 탭의 '메모리에 없는 일'. 비 알림 기준을 50%로 낮출지 묻는 말에 '응 50%로 낮춰줘'라고 답했지만 메모리에는 아직 적히지 않아, AI가 쓴 글과 사용자의 대답을 함께 보여 준다](/Create-a-Blog/images/refinder/spoken-decision.png)

![Codex 메모리 보관함의 '메모리에 없는 일'. Codex의 대화 기록에서 만든 태그와, 한도를 1분에 60번으로 올리자는 추천에 승낙한 결정이 나온다](/Create-a-Blog/images/refinder/codex-memory.png)

![비슷한 문서의 '뜻이 비슷함'. 밤 알림 규칙을 다른 말로 적은 night-quiet와 rain-alert 두 문서를 뜻 비슷함 76%로 나란히 보여 준다](/Create-a-Blog/images/refinder/similar-meaning.png)

[V1.1.8 내려받기](https://github.com/LooseCannon-Dev/ReFinder-releases/releases/tag/v1.1.8)
