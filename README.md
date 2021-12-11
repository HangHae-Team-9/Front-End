# 🎊항해99 6주차 미니프로젝트 <9조>🎊

## ☝🏻프로젝트 소개

</br>

## 개팔자가 상팔자🐕🐈

</br>
📆 기간 : 2021.12.06 ~ 2021.12.11

<p>대한민국 4명중 한명은 반려동물을 키운다! 반려동물 인구 1500만 시대! 나만 알 수 없는 반려동물 꿀템🍯 대방출! 반려동물과 함께 찍은 리얼찐템 조회수는 UP!UP!📈 사료, 장난감, 간식, 모든것을 자유롭게! 🐶😼 개팔자와 상팔자와 함께하세요! 🐾</p>

</br>

## ✌🏻프로젝트 구성원

</br>
<h2>✨프론트엔드<h2>
<h3>정상일, 이지연, 김형래</h3>
</br>
<h2>✨백앤드<h2>
<h3>서유리, 이한울, 이현범</h3>
<hr/>

<hr/>

</br>
</br>

## ⚙️ 사용 기술 스택 ⚙️

<img height="30" src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=plastic"/>
<img height="30" src="https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=Swagger&logoColor=white">
<img height="30" src="https://img.shields.io/badge/JWT-000000?style=flat&logo=JSON%20web%20tokens&logoColor=white">

![header](https://capsule-render.vercel.app/api?type=slice&color=gradient&text=%20Javascript%20%20&height=50&fontSize=50)

</br>
</br>

## 🎞 프로젝트 시연 영상 🎞

<br/>
[홈페이지 바로가기](http://ohyo.shop.s3-website.ap-northeast-2.amazonaws.com)<br/>
[와이어프레임](https://ovenapp.io/project/yBmVvSyjqJe0Nsgq1Vi0ZbalbHAH23MP#n3kas)
</br>
</br>
</br>

## ⚙ 주요 기능 ⚙

🤍**로그인/회원가입**

- 아이디 중복확인 기능
- 회원가입시 아이디, Email, 비밀번호 유효성 검사
  </br>

🧡**메인페이지**

- 로그인한 유저이름 출력
- 게시글 목록 출력
  - 키워드 클릭 시 해당 카테고리의 출력
  - 카드별 이미지, Title, 작성자, 조회수 표시
- 카테고리 별 게시글 출력(필터)
  - 키워드 클릭 시 해당 카테고리의 출력
- 상세페이지 이동
  - 카드 클릭 시 해당 상세페이지 이동
    </br>

💛**게시글 작성 페이지**

- 사진 업로드
- 빈칸 메세지
  </br>

💚**상세페이지**

- 게시글 상세내용 출력
- 댓글기능 - 로그인한 사용자만 댓글 작성가능
  </br>

💙**마이페이지**

- 로그인한 사용자의 게시물 확인 가능
  </br>
  </br>

## 📜 API TABLE

**회원가입**
| 기능 | Method | URL | Request | response |
| --- | --- | --- | --- | --- |
| 회원가입 | POST | /api/user/signup | {"username": "username", "password":"password", "passwordCheck":"password", "email": "email"} | 회원가입 성공시: Success Sign up |
| 아이디 중복확인 | POST | /api/user/checkid | {"username":"beomin123"} | 아이디 존재시: Existed Id, 아이디 없을시: You can use this Id |
| 이메일 중복확인 | POST | /api/user/checkemail | {"email":"email@naver.com"} | 이메일 존재시: Existed Email, 이메일 없을시: You can use this Email |

![image](https://user-images.githubusercontent.com/86363774/145669813-5e22eccd-eb4a-4c2d-a8cb-f561b9478f98.png)
![image](https://user-images.githubusercontent.com/86363774/145669824-218e9e81-6162-4a1c-b10a-566f0d6db688.png)
![image](https://user-images.githubusercontent.com/86363774/145669841-a2164ca2-5002-4a5b-b2bb-e8c29e77c7b3.png)

</br>
</br>

## 📖 팀노션

[팀노션 바로가기](https://www.notion.so/99-4-6-9-c2b95bdb4e4f40fc90a2a2294399013b)

</br>
</br>

## 느낀점
