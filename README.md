# ㈜케이지아이 홈페이지

> 기술로 세계 PLANT 시장을 선도하는 기업

㈜케이지아이(KGI) 회사 소개 홈페이지입니다. 보일러·플랜트 설치, 열교환기 및 압력용기 제작을 하는 회사의 개요, 사업 분야, 실적을 소개합니다.

**사이트 주소: https://kgi-t.com**

## 구성

한 페이지를 스크롤하는 원페이지 사이트입니다.

| 섹션 | 내용 |
|---|---|
| 회사 개요 | 설립 연도, 매출, 공장 규모, 주요 사업 종목 |
| 사업 분야 | 폐열보일러·플랜트, 열교환기·압력용기, 보일러 부속기기, 보유 장비 |
| 실적 | 매출 추이 그래프, 주요 거래처, 2018~2022 주요 실적(연도별 보기), 핵심 인력 |

빌드 도구 없이 HTML · CSS · JavaScript만 사용합니다.

```
index.html        페이지 내용
css/style.css     디자인 (PC·모바일 반응형)
js/main.js        메뉴, 매출 그래프 애니메이션, 실적 연도 필터
images/           로고, 공장 사진
CNAME             GitHub Pages 사용자 도메인 (kgi-t.com)
```

## 수정하고 반영하기

1. 파일을 수정합니다. 문구는 대부분 `index.html`에 있습니다.
2. 커밋하고 푸시합니다.

   ```powershell
   git add -A
   git commit -m "수정 내용"
   git push
   ```

3. 1~2분 뒤 https://kgi-t.com 에 반영됩니다.

## 내 PC에서 미리보기

`index.html`을 바로 열면 CSS와 이미지가 안 보일 수 있어서, 간단한 로컬 서버를 사용합니다. (Python이나 Node 없이 PowerShell만 사용)

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .claude\serve.ps1
```

브라우저에서 http://localhost:8080 을 엽니다. 끝낼 때는 터미널에서 `Ctrl+C`를 누릅니다.

## 호스팅 · 도메인

- **호스팅:** GitHub Pages (`main` 브랜치 루트), HTTPS 강제 적용
- **도메인:** `kgi-t.com` — 가비아에서 DNS 관리
  - A 레코드 `@` → 185.199.108.153 / 109.153 / 110.153 / 111.153
  - CNAME `www` → `fxf24.github.io.` (www로 들어오면 kgi-t.com으로 이동)
  - 메일(하이웍스)용 MX · TXT 레코드는 그대로 둡니다.
- `CNAME` 파일을 지우거나 내용을 바꾸면 도메인 연결이 끊깁니다.

## 참고

- 원본 회사소개서(PPT)는 직원 연락처와 등록번호가 있어 저장소에 올리지 않습니다 (`.gitignore`에서 제외).
- 전화번호, 팩스, 주소 같은 연락처는 홈페이지에 넣지 않았습니다.
