function Home() {
    return (
      <div>
        <section className="flex flex-row flex-wrap justify-around">
          <div className="w-1/3 font-bold text-5xl text-soft-black">
            Kembangkan bisnis dengan keputusan berbasis data oleh <span className="text-berijalan-green">berijalan.</span>
            <div>
              <div className="text-2xl font-light pt-4">
                Memberikan layanan solusi dan inovatif melalui kolaborasi terbaik demi mendukung keberhasilan bisnis.
              </div>
              <input className="text-xl font-medium border-[0.05px] border-gray-300 rounded-lg py-2 px-4 w-full mt-4" type="text"  placeholder="Ketik email Anda"/>
              <div className="flex flex-row mt-8 gap-4">
                <button className="w-49 text-white bg-soft-tosca rounded-4xl py-4 px-8 text-xl" >Get Started</button>
                <span className="uppercase font-bold text-xl text-gray-300 w-fit" >Bebas biaya. <br></br>tanpa pembayaran.</span>
              </div>
            </div>
          </div>
          <img src="src/assets/home/photo.png" alt="" />
        </section>
      </div>
    );
  }
  
  export default Home;