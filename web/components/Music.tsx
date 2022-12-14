const Music = () => {
  return (
    <div id="music">
      <div className="pt-8 font-bold text-5xl mt-24 mb-16 sm:text-center md:text-left">
        Music
      </div>
      <a href="/Topster.png" target="_blank" rel="noreferrer">
        <img src="/Topster.png" />
      </a>
      <div className="flex justify-between sm:text-xs md:text-base">
        <div>All my favorite music in one image. (click to enlarge)</div>
        <div>10.03.22</div>
      </div>
      <div className="mt-20"></div>
      <iframe
        src="https://open.spotify.com/embed/playlist/4fEpAtqG45wrgcU3UosWNu?utm_source=generator"
        width="100%"
        height="380"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-[12px]"
      ></iframe>
      <div className="flex justify-between mt-6 sm:text-xs md:text-base">
        <div>My top 10 favorite songs of all time, ranked.</div>
        <div>09.28.22</div>
      </div>
    </div>
  );
};

export default Music;
