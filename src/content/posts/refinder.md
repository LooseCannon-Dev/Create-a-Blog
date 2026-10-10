---
title: ReFinder — AI가 쓰는 마크다운 보관함을 검토하는 툴
description: 마크다운 문서를 모은 폴더를 열어 읽고, 고치고, 문서끼리의 연결과 AI가 바꾼 곳을 한눈에 살피는 Windows용 툴입니다.
date: 2026-10-10
tags: [툴, ReFinder, Windows, AI]
category: ReFinder
pinned: true
image: images/refinder/main.png
imageAlt: ReFinder 메인 화면. 왼쪽 파일 목록, 가운데 서식이 그려진 문서, 오른쪽에 이 문서를 가리키는 문서 목록이 보인다
---

<div class="video-embed"><iframe src="https://www.youtube.com/embed/k-t6EMMR-VY" title="ReFinder 소개 영상" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

**ReFinder**(리파인더)는 마크다운(.md) 문서를 모아 둔 폴더(보관함)를 열어 읽고, 고치고, 문서끼리 어떻게 이어져 있는지 보여 주는 Windows용 데스크톱 툴입니다.

요즘은 Claude 같은 AI가 규칙이나 작업 기록을 마크다운 문서로 쌓아 두는 일이 많습니다.
리파인더는 그 문서들이 **어떻게 이어져 있는지, 어디가 끊겼는지, 무엇이 낡았는지, 무엇이 바뀌었는지**를 사람이 한눈에 보고 바로잡을 수 있게 만든 툴입니다.

- 지원 환경: Windows 10 이상 (64비트)
- 내려받기: [릴리스 페이지](https://github.com/LooseCannon-Dev/ReFinder-releases/releases)

## 보관함과 편집

![첫 화면. 폴더를 보관함으로 열거나 새로 만들고, 최근 연 보관함과 PC에 있는 Claude 메모리 폴더가 목록으로 나온다](/Create-a-Blog/images/refinder/welcome.png)

- 원하는 폴더를 보관함으로 열거나 새로 만듭니다. 프로그램이 스스로 폴더를 열지 않습니다.
- 첫 화면에 PC에 있는 **Claude 메모리 폴더**를 프로젝트 이름과 문서 수로 모아 보여 줘, 눌러서 바로 열 수 있습니다.
- 편집 화면은 제목 · 굵게 · 목록 · 코드 · 표 · 링크 · 태그를 색으로 구분하고, 보기 화면은 머리말을 표로, 서식을 그려 보여 줍니다.
- **서식 막대**가 있어 마크다운 기호를 몰라도 제목 · 굵게 · 목록 · 할 일 · 표 같은 서식을 넣을 수 있습니다. `Ctrl+B`, `Ctrl+K` 같은 단축키도 되고, 단축키 목록은 설정에서 볼 수 있습니다.

![편집 화면. 위쪽 서식 막대와 색으로 구분된 마크다운, 오른쪽 기록 탭에 'Claude가 고침'이 보인다](/Create-a-Blog/images/refinder/edit-toolbar.png)

- `[[`를 치면 문서 이름 자동 완성이 뜹니다. 문서 이름을 바꾸면 그 문서를 가리키는 링크도 함께 고칩니다.

![링크 기호 뒤에 nt-를 치자 같은 이름으로 시작하는 문서 세 개가 자동 완성 목록으로 뜬 모습](/Create-a-Blog/images/refinder/link-autocomplete.png)

- 입력을 멈추면 저절로 저장합니다. 다른 프로그램이 같은 문서를 바꿔 놓았으면 덮어쓰지 않고 알려 줍니다.
- 보관함에 이름을 붙이고 즐겨찾기로 고정해 둘 수 있습니다.
- 보관함 폴더 안에는 프로그램 파일을 만들지 않습니다. 설정 · 색인 · 변경 기록은 모두 보관함 밖에 둡니다.

## 연결 살피기

- 오른쪽 칸에서 이 문서를 가리키는 문서(백링크), 이 문서가 가리키는 문서, 목차, 변경 기록을 봅니다. 없는 문서를 가리키는 끊긴 링크는 빨갛게 표시하고, 비슷한 이름의 문서를 찾아 줍니다.
- **그래프:** 문서끼리의 연결을 점과 선으로 보여 줍니다. 전체를 보거나, 지금 문서 주변만 단계별로 넓혀 가며 볼 수 있습니다. 문서가 생긴 차례대로 그래프가 자라는 **타임랩스**도 재생합니다.
- 그래프는 폴더나 태그로 색을 나누고, 오늘 또는 최근 7일 동안 **Claude가 고친 문서와 사용자가 고친 문서**를 따로 표시합니다. 태그를 점으로 띄우거나, 어디에도 이어지지 않은 외톨이 문서와 끊긴 링크를 보이게 할 수도 있습니다.

![보관함 전체 그래프. 문서 25개가 선으로 이어져 있고, 오른쪽에서 색 나누기와 Claude·사용자가 고친 문서 표시를 고른다](/Create-a-Blog/images/refinder/graph.png)

- **빠른 열기 · 전체 검색:** 문서 이름과 본문을 한 번에 찾고, `tag:` `path:`로 좁힐 수 있습니다. 한글에 조사가 붙어도 찾고, 문서 이름은 초성으로도 찾습니다.

![검색 창에 '알림'을 친 결과. 본문에서 찾은 16곳이 문서별로 나오고, 위쪽에서 문서 이름 · 본문 · tag: · path:로 좁힐 수 있다](/Create-a-Blog/images/refinder/search.png)

- **연결 안 된 언급:** 다른 문서 이름을 링크 없이 적은 곳을 보관함 전체에서 모아, 한 곳씩 또는 한 번에 링크로 바꿉니다.

![연결 안 된 언급 탭. widgets 문서 15번째 줄의 external-api를 링크로 바꾸기 전 모습](/Create-a-Blog/images/refinder/unlinked-mentions.png)

- 본문에 적은 태그와 함께, 폴더 이름이나 머리말 값으로 태그를 자동으로 붙일 수 있습니다.

## 검토를 돕는 관리 화면

- **변경 기록과 되돌리기:** 저장 · 이름 바꾸기 · 지우기는 물론 밖에서 바뀐 것까지, 바뀌기 전 내용을 모두 남깁니다. 지난 내용과 나란히 비교하고 원하는 때로 되돌립니다. 프로그램이 기록을 스스로 지우지 않습니다.
- **최근 바뀐 것:** 마지막으로 확인한 뒤 바뀐 문서만 모아 검토합니다. 문서마다 [확인함]을 누르거나, 확인하기 전 내용으로 되돌립니다. AI가 한 세션 동안 무엇을 고쳤는지 한 화면에서 볼 수 있습니다.

![최근 바뀐 것 탭. 바뀐 문서 4개 가운데 build-pitfalls에 새로 더해진 줄이 초록색으로 보인다](/Create-a-Blog/images/refinder/recent-changes.png)

- **형식 검사:** 머리말 칸 · 파일 이름 · 크기 · 끊긴 링크 같은 규칙으로 문서를 점검하고, 걸린 문서마다 **왜 걸렸는지** 설명합니다. Claude · ChatGPT · Gemini 메모리용 규칙 묶음이 들어 있습니다.

![형식 검사 탭. design-tokens.md의 name이 파일 이름과 달라 걸린 이유를 설명하고, 해당 줄을 표시한다](/Create-a-Blog/images/refinder/format-check.png)

- **낡은 기록 찾기:** 문서에 적힌 파일 · 함수 이름이 연결한 코드 폴더에 아직 있는지, 적힌 버전 번호가 실제로 나온 번호와 맞는지 확인합니다. `ForecastCache.Refresh`처럼 점으로 이은 이름은 앞쪽 이름까지 확인하고, 이름이 없으면 코드에서 가장 가까운 이름도 알려 줍니다.

![낡은 기록 탭. 문서에 적힌 ForecastCache.Refresh가 코드에 없고, 가장 가까운 이름 ForecastStore를 알려 준다](/Create-a-Blog/images/refinder/stale-records.png)

- **비슷한 문서 찾기:** 내용이 많이 겹치는 문서 짝을 찾아 나란히 보여 줍니다. AI가 있던 문서를 고치지 않고 새로 만든 경우를 잡아냅니다.

![비슷한 문서 탭. 72% 겹치는 두 문서를 나란히 놓고 겹치는 부분을 칠해 보여 준다](/Create-a-Blog/images/refinder/similar-docs.png)

틀릴 수 있는 판단은 결함처럼 단정하지 않고 '확인 필요'로 보여 주며, 프로그램이 스스로 고치지 않습니다.

## AI와 함께 쓰기

- **누가 고쳤는지 구분:** 변경 기록과 그래프에서 'Claude가 고침', '사용자가 고침', '밖에서 바뀜'을 나눠 보여 줍니다. Claude가 고친 기록을 비교하면 **그 고침 바로 앞에 사용자가 한 말**이 함께 보여, 왜 바뀌었는지 알 수 있습니다.

![변경 기록 비교 화면. Claude가 고친 내용 옆에 '이 고침 바로 앞에 사용자가 한 말'이 말풍선으로 나온다](/Create-a-Blog/images/refinder/history-user-message.png)

- **Claude 탭:** Claude를 위한 검토 화면을 네 가지로 나눠 보여 줍니다.
  - **세션 시작에 받는 글:** Claude가 세션을 시작할 때 받는 규칙과 메모리를 받는 차례대로 모아 보여 줍니다. MEMORY.md가 Claude에게 다 가는지(앞 200줄 · 25,000자)는 편집할 때 상태 줄에서도 보입니다.
  - **읽힌 횟수:** 문서마다 Claude가 최근 30일 동안 몇 번 읽었는지 세고, 한 번도 열리지 않은 문서를 따로 모읍니다.
  - **재발:** 규칙을 만든 뒤에도 사용자가 같은 지적을 다시 한 횟수를 셉니다.
  - **메모리에 없는 일:** 대화에서 정했는데 메모리 어느 문서에도 적히지 않은 일을 찾아 줍니다.

![Claude 탭의 '세션 시작에 받는 글'. 사용자 규칙, 프로젝트 CLAUDE.md, MEMORY.md가 Claude가 받는 차례대로 모여 있다](/Create-a-Blog/images/refinder/claude-session-start.png)

![Claude 탭의 '재발'. 지우기 전에 묻기로 한 규칙을 만든 뒤에도 사용자가 같은 말을 다시 한 기록이 나온다](/Create-a-Blog/images/refinder/claude-recurrence.png)

![Claude 탭의 '메모리에 없는 일'. 대화에서 고른 답 '배터리 절약 모드에서는 새로 고침 끄기'가 메모리에 없다고 알려 준다](/Create-a-Blog/images/refinder/claude-not-in-memory.png)

- **MCP 도구:** 리파인더를 설치하면 AI가 부를 수 있는 MCP 도구가 함께 설치됩니다. Claude Code에 아래 명령으로 한 번 등록하면, Claude가 보관함의 링크를 따라 주변 문서를 한 번에 훑고, 메모리를 고치기 전에는 사용자가 리파인더에서 직접 고친 문서를, 코드를 고치기 전에는 사용자가 손댄 줄을 확인합니다. 도구는 파일을 읽기만 하고 고치지 않습니다. Codex · ChatGPT 데스크톱 앱과 Gemini CLI에도 MCP로 등록할 수 있습니다.

  ```powershell
  claude mcp add refinder -s user -- "$env:LOCALAPPDATA\Programs\ReFinder\mcp\ReFinder.Mcp.exe"
  ```

  한 번 등록하면 모든 프로젝트에서 쓸 수 있습니다. 등록한 뒤에는 새 대화를 열어야 도구가 붙습니다.

## Code History Tracker와 함께 쓰기

[Code History Tracker](/Create-a-Blog/posts/code-history-tracker/)(코히트)와 함께 설치하면, 코히트의 비교 화면에서 줄마다 **Claude · Codex · Gemini · 사용자** 가운데 누가 고친 줄인지 색 띠가 붙습니다.
리파인더가 AI의 편집 기록을 코히트에 넘겨주기 때문입니다.

## 그 밖의 기능

- 다크 · 라이트 테마를 고르면 바로 바뀝니다.
- 설정 칸마다 무엇을 하는지와 예시를 적어 두었습니다.
- 새 버전이 나오면 켤 때 알려 주고, 받아서 설치까지 합니다. 테스트판을 먼저 받아 볼 수도 있습니다.

![라이트 테마를 켠 보기 화면](/Create-a-Blog/images/refinder/light-theme.png)

## 마치며

AI에게 문서 작업을 맡기다 보면 "어디가 바뀌었고, 무엇이 낡았고, 어디가 끊겼는지"를 사람이 따라가기 어려워집니다.
ReFinder는 그 문서 모음을 사람이 빠르게 검토하고 바로잡을 수 있도록 만든 툴입니다.

최신 버전은 [릴리스 페이지](https://github.com/LooseCannon-Dev/ReFinder-releases/releases)에서 받을 수 있습니다.
