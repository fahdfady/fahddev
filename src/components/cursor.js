const Cursor = () => {


    return (
        <div className="cursor-container">
            <div className="dot"></div>
            <div className="cursor"></div>
        </div>
    )
    
}

    // cursor
    let mouseCursor = document.querySelector('.cursor');
    let mouseDot = document.querySelector('.dot');
    let smallSpeed = 0.2;
    let largeSpeed = 0.12;


    window.addEventListener('mousemove', moveCursor);


    function moveCursor(e) {
        let placeX = e.pageX - 25;
        let placeY = e.pageY - 25;
        let placeXS = e.pageX - 4;
        let placeYS = e.pageY - 4;

        mouseCursor.style.transform = "translate(" + placeX + 'px,' + placeY + 'px)';

        mouseDot.style.transform = "translate(" + placeXS + 'px,' + placeYS + 'px)';

    }
export default Cursor;