import { IQuestion } from "./types";

export const QuestionData: IQuestion[] = [
  {
   id:1,
   title: "고양이를 키우게 되었다 무엇부터 할까?",
   anwsera: "이름은 뭐가 좋을까? 어디에서왔니? 자꾸 말을 걸고 싶다.",
   anwserb: "혼자만의 시간이 필요하겠지? 넘나 들이대고 싶지만 꾹 참고 적응할 시간을 준다",
   type: "EI",
  },
  {
    id:2,
    title: "고양이에 대해 당장 공부해야겠다!. 내가 할 행동은?",
    anwsera: "고양이 관련 커뮤니티에 당장 가입해서 다른 집사님들과 소통을 하며 고양이에 대한 지식을 얻는다.",
    anwserb: "커뮤니티에 가입은 하지만 눈으로 참고만 하고 정보를 찾아본다",
    type: "EI",
   },
   {
    id:3,
    title: "아무리 봐도 우리 고양이가 제일 이쁜 것 같다! 나의 행동은?",
    anwsera: "'울 냥이 너무 이쁜것 같아.. 사람들한테 자랑해야지!!'  하며 인스타를 만들어 사진도 공유하고 소통도한다 물론 단톡방도 탐색할 예정이다!",
    anwserb: "울 냥이 너무 예뻐.. 사진찍어서 간직하고 밖에서도 쳐다보며 흐뭇해 한다",
    type: "EI",
   },
   {
    id:4,
    title: "고양이 유튜브를 시작하려고 한다. 나는 어떤 유튜브를 만들까?",
    anwsera: "다른 유튜버들 가이드 삼아 비슷하게 만든다",
    anwserb: "새롭거나 자유로운 방식으로 만들기 위해 설계해본다",
    type: "SN",
   },
   {
    id:5,
    title: "고양이에 대해서 모르는 부분들을 검색하고있다. 내가 글을 읽는 방법은?",
    anwsera: "꼼꼼하고 정확하게 찾아보며 읽는다",
    anwserb: "전체적인 의미를 파악하며 읽는다",
    type: "SN",
   },
   {
    id:6,
    title: "이제 고양이 밥을 주려고 하는데 얼마나 먹여야 할까?",
    anwsera: "손, 눈대중으로 대충 이정도면 되겠지 하고 준다.",
    anwserb: "레시피의 칼로리를 정확히 맞춰 저울이나 스푼으로 계량하여 급여한다.",
    type: "SN",
   },
   {
    id:7,
    title: "같은 집사 친구가 고양이가 아픈 것 같아 슬퍼하고 있다. 이때 나의 반응은?",
    anwsera: "'이건 이렇게 하면 어떨까?' 해결책을 함께 생각하며 정보들을 같이 찾아준다.",
    anwserb: "'아이고.. 어쩜좋아.. 괜찮을꺼야...'우선 위로를 해준다",
    type: "TF",
   },
   {
    id:8,
    title: "고양이를 키우는데 가족과의 마찰이 생겼다. 어떻게 해결할까?",
    anwsera: "나의 생각과 논리가 맞다는 걸 증명하기 위해 가족들을 설득한다.",
    anwserb: "나의 의견이 상대방을 기분 나쁘게 하지 않는 방법으로 잘 전달할 수 있는 방법을 생각한다.",
    type: "TF",
   },
   {
    id:9,
    title: "고양이가 아파서 병원을 알아보려고 리뷰를 찾아보았다. 난 어느병원을 선택할까?",
    anwsera: "결과가 중요하지! 친절함과 상관없이 우선 좋은 결과가 많은 병원을 선택한다",
    anwserb: "사람이 중요하지! 원장님의 성격이 좋다고 되어있는 병원을 선택한다",
    type: "TF",
   },
   {
    id:10,
    title: "고양이 사료를 급여하는 루틴은 무엇일까?",
    anwsera: "우리 냥이는 몸무게가 4kg니까 하루두번 0시 00시 나눠주고, 간식은 츄르1개씩 오후4시에 줘야겠어!. 필요한 영양제는 간식시간에 같이 급여해야겠어!",
    anwserb: "울**이는 알아서 잘 먹으니까 일단 자율급식으로 넉넉히 줘봐야겠다!",
    type: "JP",
   },
   {
    id:11,
    title: "고양이 사료가 우연히 여러 종류가 생겼다. 어떻게 사용할까?",
    anwsera: "종류별로 테스트해서 순위를 정해두고 질리지 않도록 교차로 줘봐야겠다",
    anwserb: "오늘은 이사료를 줘봐야겠다! 그날그날 끌리는걸로 급여",
    type: "JP",
   },
   {
    id:12,
    title: "드디어 냥이와 함께한 하루가 저물었다 자기전 나의 행동은?",
    anwsera: "내일은 오늘 못해준 놀이나 훈련을 해볼까? 하며 미리 내일을 정해두고 잔다",
    anwserb: "아 졸려! 일단 자자!!",
    type: "JP",
   }
];