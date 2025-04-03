// CountState2 컴포넌트 정의
function CountState2({ count, onClick }) {
    return (
        <div>
            <button onClick={onClick}>
                Clicked {count} times
            </button>
        </div>
    );
}

export default CountState2;
