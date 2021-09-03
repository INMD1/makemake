# 효민생활관 발열측정 자동화 구현
node.js에서 puppeteer를 이용하여 자동화 구현

![upload](https://user-images.githubusercontent.com/87979171/129705819-ac96834c-f967-4bd2-a2c9-fe04f5fb10cb.gif)이 사진과 비슷하게 움직입니다.

# 사용방법
1. 릴리즈에 있는 파일을 같은 폴더에 다운로드를 해주세요.
2. 아래에 적어둔 설정 글을 보고 알맞게 설정을 해주시고 zip으로 되어 있는것은 파일이 있는 곳에 풀어주세요.
3. 모든 준비를 했으면 screenshot이라고 폴더를 하나 만들어 주시고 exe를 돌리면 됨니다.<br><br>

screenshot 폴더에는 정보를 보내지 전에 이때까지 한 모습을 사진으로 저장합니다.
<img src = "https://user-images.githubusercontent.com/87979171/131958280-f8bc96ed-ed5b-4c63-9b34-15e3b1bb2957.png" width="400px">

# 설정
이 프로그램을 이용하기 위해서는 먼저 Scret_templete.json이라는 걸 설정을 해야합니다.

일단 Scret_templete.json으로 들어가면 
```
[ 
    {
        "id": "학번입력",
        "name": "자기자신 이름",
        "body": "기숙사(행긱,효만)",
        "room": "사생실 번호"
    }
]
```
이런게 뜨는데 혼자서 할거면 이렇게 양식을 작성하고 다른이름 저장으로 Scret.json으로 저장하시면 됨니다.<br>
<br>
다른 사람들을 추가 하고 싶은 경우는  아래 처럼 설정하시고 저장하시면 됨니다.
```
[ 
    //1명
    {
        "id": "학번입력",
        "name": "자기자신 이름",
        "body": "기숙사(행긱,효만)",
        "room": "사생실 번호"
    },
        {
        "id": "학번입력",
        "name": "자기자신 이름",
        "body": "기숙사(행긱,효만)",
        "room": "사생실 번호"
    }
]
```
