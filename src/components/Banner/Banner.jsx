import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div
  className="hero min-h-screen rounded-2xl mt-5"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/TbTYjJc/various-vegetables-black-table-with-space-message.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Discover an exceptional cooking class tailed for you!</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <div className='space-x-2'><button className="btn btn-primary">Get Started</button>
      <button className="btn btn-outline">Our Feedback</button></div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;

