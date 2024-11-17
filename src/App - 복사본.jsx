import BlueButton from "./button/BlueButton";
import Cart from "./cart/Cart";
import DeepBlueButton from "./button/DeepBlueButton";
import HeartButton from "./button/HearButton";
import LikeButton from "./button/LikeButton";
import SubscribeButton from "./button/SubscribeButton";



//ctrl + space로 import


//구독 버튼 컴포넌트
//💛하트 버튼 컴포넌트


function App() {
  return (
    <div className="App">
      <LikeButton></LikeButton>
      <HeartButton></HeartButton>
      <SubscribeButton></SubscribeButton>
      <BlueButton></BlueButton>
      <DeepBlueButton></DeepBlueButton>
      <Cart></Cart>
    </div>
  );
}

export default App;
