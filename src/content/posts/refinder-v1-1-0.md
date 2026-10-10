---
title: ReFinder V1.1.0 업데이트
description: 링크 도구가 코드 폴더도 보고, 코히트에 Claude가 고친 줄을 알려 줍니다.
date: 2026-09-30T12:28:50
tags: [ReFinder, 업데이트]
category: ReFinder
---

Windows 10 이상 64비트에서 씁니다.

- Claude 가 부르는 링크 도구가 이제 **코드 폴더**도 봅니다.
  - Claude 가 코드를 고치기 전에, Claude 가 마지막으로 쓴 내용과 지금 파일이 다른 줄을 알려 줍니다. 사용자가 직접 고쳤을 수 있는 줄이라, Claude 는 그 파일을 다시 읽고 그 줄은 요청 없이 바꾸지 않습니다. "여기까지가 내가 수정한 부분이야" 를 매번 말하지 않아도 됩니다.
  - 큰 파일처럼 대화 기록만으로 Claude 가 쓴 내용을 알 수 없으면, 마지막 커밋의 내용을 기준으로 그 뒤에 바뀐 줄을 알려 줍니다.
  - Claude 가 명령(파일 복사 · git 등)으로 바꿨을 수 있는 줄은 따로 표시합니다.
- 코히트(Code History Tracker)가 두 기록 사이에 바뀐 줄을 Claude 가 고친 줄과 직접 고친 줄로 나눠 보일 수 있게, 필요한 기록을 넘겨줍니다. 코히트에서 이 기능을 쓰려면 이 판 이상의 리파인더가 설치되어 있어야 합니다.

[V1.1.0 내려받기](https://github.com/LooseCannon-Dev/ReFinder-releases/releases/tag/v1.1.0)
