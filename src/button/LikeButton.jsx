//LikeButton.jsx //시작은 대문자로, 무조건 함수 만들어야됨

const LikeButton = () => {

    const youtuber = "코리아 IT";

    const hello = (guest) => `${guest || "guest"}님 환영합니다!`;

    return (
        <div>
            <button>{hello("백종원")}</button>
            <button>{youtuber}좋아요!</button>
            <button>{youtuber}싫어요!</button>
            <button>{5 > 3 ? "손흥민" : "김민재"}</button>
        </div>
    );
};

//return에서는 부모태그가 무조건 1개

export default LikeButton;