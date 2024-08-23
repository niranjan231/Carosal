import "./Carosal.css";




const Carosal=()=>{
    return(
        <div>
          <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://wallpapercave.com/wp/wp1891063.jpg" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src="https://3.bp.blogspot.com/-Jzdb9JcL380/WxTSOWJf9YI/AAAAAAAABnM/-UbFGfhizkMRTa_mMX5DEhi0dwJE566AACLcBGAs/s1600/gud+evening+images.jpg" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src="https://tse3.mm.bing.net/th?id=OIP.YqikNHgxHpZLiHh3cAv7SAHaGl&pid=Api&P=0&h=180" class="d-block w-100" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
export default Carosal;