# Leejiyun

#PARD웹 과제- instagram clone coding

#과제화면
![스크린샷 2023-11-03 223104](https://github.com/2nd-PARD-WEB-PART/Leejiyun/assets/143606589/c8b148f4-6c18-4bae-b8c7-bc544e9e46dd)
![스크린샷 2023-11-03 224200](https://github.com/2nd-PARD-WEB-PART/Leejiyun/assets/143606589/0e90678b-2325-4695-b924-05d7386e7d7b)
위의 사진은 가장 처음 열었을 때의 home화면
아래 사진은 editProfile화면에서 정보수정 후 적용된 home화면

![스크린샷 2023-11-03 223118](https://github.com/2nd-PARD-WEB-PART/Leejiyun/assets/143606589/9bb60bac-4d2c-4939-b8b0-d749953a1a25)
![스크린샷 2023-11-03 224324](https://github.com/2nd-PARD-WEB-PART/Leejiyun/assets/143606589/9b9a5c41-cd98-430f-bea1-e5a94deff9bf)
위 사진은 editprofile화면에서 아무런 변경사항도 없을 때의 화면
아래 사진은 editprofile화면에서 변경사항이 생겼을 때의 화면(버튼 활성화)

![스크린샷 2023-11-03 223135](https://github.com/2nd-PARD-WEB-PART/Leejiyun/assets/143606589/ac47af3f-063d-4390-8e0f-5d4c7653e6c4)
![스크린샷 2023-11-03 223153](https://github.com/2nd-PARD-WEB-PART/Leejiyun/assets/143606589/36ba078c-e3fd-45eb-b18a-46d59787c6fe)
위 사진은 contents화면의 기본적인 형태(751px~)
아래 사진은 contents화면의 크기가 451px~750px인 경우, 반응형 웹
450px이하의 사진은 웹으로 표현이 안되는듯 하여 스크린샷 없음

#기능 설명

1. home화면에서 editprofile, contents화면으로 넘어가는 버튼들 활성화, routing
    contents API로 변수들 전달
2. editprofile화면에서 정보 변경 가능, 마찬가지로 contents API를 사용해 변수 업데아트 및 다른 화면에도 전달
3. contents화면에서 게시물에 대한 좋아요, 댓글 업데이트 기능 생성, 반응형 웹으로 제작하여 ~450px, 451~750px, 751px~로 구분지어 작동하게 제작
