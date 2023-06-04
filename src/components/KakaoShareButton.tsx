import React from 'react';
import { Button } from "react-bootstrap";
import { IResult } from '../stores/Result/types';

interface Props {
  data: IResult;
}

declare global {
  interface Window {
    Kakao: any;
  }
}

function KakaoShareButton(props: Props) {
  const url = "https://catmbtits.netlify.app";
  const resultUrl = window.location.href;

  React.useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("9d08a345cd3d3b1c6ee4cd1544d5f8d9");
    }
  }, []);

  const shareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '😺예비집사 판별기 결과😻',
        description: `예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 ${props.data.name}입니다.`,
        imageUrl: url + props.data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: '나도 테스트하러가기',
          link: {
            mobileWebUrl: "https://catmbtits.netlify.app",
            webUrl: "https://catmbtits.netlify.app",
          },
        },
      ],
    });
  };

  return (
    <Button
      onClick={shareKakao}
      className='btn-warning'
      style={{ width: 140, marginTop: 20, padding:10 }}
    >
      공유하기
    </Button>
  );
}

export default KakaoShareButton;
