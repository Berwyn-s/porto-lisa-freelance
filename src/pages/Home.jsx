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
        <section className="flex flex-col items-center mt-20 gap-3">
          <div>
            Dipercayai oleh lebih dari 20+ bisnis dan tim di seluruh Indonesia
          </div>
          <div className="flex flex-row gap-5 justify-center">
            <img src="src/assets/company/astra_financial_icon.png" alt="" />
            <img src="src/assets/company/acc_icon.png" alt="" />
            <img src="src/assets/company/seva_icon.png" alt="" />
            <img src="src/assets/company/moxa_icon.png" alt="" />
            <img src="src/assets/company/caas_icon.png" alt="" />
            <img src="src/assets/company/asuransi_ramayana_icon.png" alt="" />
          </div>
        </section>
        <section className="bg-soft-blue rounded-xl px-4 py-8 flex flex-col items-center justify-center mt-16 max-w-[1226px] mx-auto">
          <div className="uppercase text-gray-400 font-bold font-montserrat text-2xl">Layanan</div>
          <div className="capitalize font-bold text-4xl mt-2 font-montserrat">Solusi Tepat untuk bisnis Anda</div>
          <div className="flex flex-row mt-8 gap-8 font-montserrat text-2xl font-light">
            <div className="underline">Techno Center</div>
            <div>Operations Center</div>
            <div>Telephony Center</div>
          </div>
          <div className="flex flex-row justify-between mt-16">
            <div className="flex flex-col gap-4">
              <div className="font-medium text-4xl font-montserrat">Techno Center</div>
              <div className="font-light font-montserrat text-xl">
              Membantu bisnis untuk menjangkau pelanggan dan calon pelanggan mereka dengan lebih efisien melalui sistem yang terintegrasi
              </div>
              <div>
                <img className="inline-block mr-4" src="src/assets/home/techno_center_1.png" alt="" />
                <span className="capitalize font-medium text-xl">Mobile & Web Development</span>
              </div>
              <div>
                <img className="inline-block mr-4" src="src/assets/home/techno_center_2.png" alt=""  />
                <span className="capitalize font-medium text-xl">Robotic & Automation</span>
              </div>
              <div>
                <img className="inline-block mr-4" src="src/assets/home/techno_center_3.png" alt="" />
                <span className="capitalize font-medium text-xl">Techno Center Product Solution</span>
              </div>
              <div>
                <img className="inline-block mr-4" src="src/assets/home/techno_center_4.png" alt="" />
                <span className="capitalize font-medium text-xl">Analytics Report Development</span>
              </div>
            </div>
            <img src="src/assets/home/techno_center.png" alt="" />
          </div>
          <div className="w-full pl-16 mt-6 text-soft-gray font-medium font-montserrat underline text-xl ">
            <span className="hover:cursor-pointer hover:font-bold">Learn More</span>
          </div>
        </section>
      </div>
    );
  }
  
  export default Home;