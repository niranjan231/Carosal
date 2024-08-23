import "./Carosal2.css";




const Carosal2=()=>{
    return(
        <div>
           <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://wallpaperaccess.com/full/640842.jpg" class="d-block w-100"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="http://www.pixelstalk.net/wp-content/uploads/2016/05/Nasa-Wallpapers-Screen-Free-Download.jpeg" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src="https://tse1.mm.bing.net/th?id=OIP._Zp9DOxh3kuHlF7QSH5k1QHaEK&pid=Api&P=0&h=180" class="d-block w-100"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
export default Carosal2;