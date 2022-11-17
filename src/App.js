import { useEffect, useRef, useState } from 'react';
import c from './App.module.css';
import { FcPrevious, FcNext } from 'react-icons/fc';

function App() {
  const images = [
    "https://m.media-amazon.com/images/I/71aQ3u78A3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
  ];
  const swiperWrapperEl = useRef()
  const [currentImg, setCurrentImg] = useState(0);

  const swipeRight = () => {
    if(currentImg < images.length - 1){
      setCurrentImg(currentImg => currentImg + 1)
    }else {
      setCurrentImg(0)
    }
  }
  const swipeLeft = () => {
    if(currentImg > 0){
      setCurrentImg(currentImg => currentImg - 1)
    }else {
      setCurrentImg(images.length - 1)
    }
  }

  useEffect(() => {
    swiperWrapperEl.current.scrollLeft = currentImg * swiperWrapperEl.current.offsetWidth;
  }, [currentImg])

  return (
    <div className={c.swiper__wrapper}>
      <button className={c.swipe__btn} data-btn-swipe="left" onClick={swipeLeft}><FcPrevious/></button>
      <div className={c.swiper} ref={swiperWrapperEl} >
        {
          images.map((swiperImg, index) => 
            <img key={index} className={c.swiper__img} src={swiperImg} alt="banner" />
          )
        }
      </div>
      <div className={c.bullets}>
      {
        images.map((item, index) =>
          <div key={index} className={c.bullet}
            style={index === currentImg ?  {background: "dodgerblue", transform: "scale(1.1)"} : null}
            onClick={() => {setCurrentImg(index)}}>
          </div>
        )
      }
      </div>
      <button className={c.swipe__btn} data-btn-swipe="right" onClick={swipeRight}><FcNext/></button>
    </div>
  );
}

export default App;