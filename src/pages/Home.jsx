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
                <button className="w-49 text-white bg-tosca rounded-4xl py-4 px-8 text-xl" >Get Started</button>
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

        <section className="bg-soft-cream-yellow rounded-xl px-4 py-8 flex flex-col items-center justify-center mt-16 max-w-[1226px] mx-auto">
          <div className="uppercase text-gray-400 font-bold font-montserrat text-2xl">Kemudahan Berbisnis</div>
          <div className="capitalize font-bold text-4xl mt-4 font-montserrat">Mengapa harus memilih kami</div>
          <div className="flex flex-row mt-16 gap-8 font-montserrat text-2xl font-light justify-between items-center">
            <div className="flex flex-col justify-center align-center gap-4">
              <img className="w-52 mx-auto" src="src/assets/home/berbisnis_1.png" alt="" />
              <div className="text-xl font-semibold text-center">Tersedia kapanpun, dimanapun</div>
              <p className="text-center text-xl font-light">Kemampuan untuk menangani pelanggan dari awal hingga akhir di lokasi yang terpusat.</p>
            </div>
            <div className="flex flex-col justify-center align-center gap-4">
              <img className="w-52 mx-auto" src="src/assets/home/berbisnis_2.png" alt="" />
              <div className="text-xl font-semibold text-center">Tersedia kapanpun, dimanapun</div>
              <p className="text-center text-xl font-light">Kemampuan untuk menangani pelanggan dari awal hingga akhir di lokasi yang terpusat.</p>
            </div>
            <div className="flex flex-col justify-center align-center gap-4">
              <img className="w-52 mx-auto" src="src/assets/home/berbisnis_1.png" alt="" />
              <div className="text-xl font-semibold text-center">Tersedia kapanpun, dimanapun</div>
              <p className="text-center text-xl font-light">Kemampuan untuk menangani pelanggan dari awal hingga akhir di lokasi yang terpusat.</p>
            </div>
          </div>
        </section>

        <section className="bg-soft-cyan rounded-xl px-4 py-8 flex flex-col items-center justify-center mt-16 max-w-[1226px] mx-auto">
          <div className="text-center md:text-start uppercase text-gray-400 font-bold font-montserrat text-2xl">Perkembangan Komunitas</div>
          <div className="text-center md:text-start capitalize font-bold text-4xl mt-4 font-montserrat">Bersama kami tingkatkan kelas bisnis anda</div>
          <div className="flex flex-row flex-wrap pt-12 justify-center gap-8 md:gap-16">
            <CommunityCard 
              imageUrl="src/assets/home/vuesax/people.png"
              title="Lapangan kerja baru"
              description="Lorem ipsum dolor sit amet consectetur. A diam felis imperdiet amet turpis ac et aliquam"
            />
            <CommunityCard 
              imageUrl="src/assets/home/vuesax/note-2.png"
              title="Sertifikasi Mitra"
              description="Lorem ipsum dolor sit amet consectetur. A diam felis imperdiet amet turpis ac et aliquam"
            />
            <CommunityCard 
              imageUrl="src/assets/home/vuesax/money-send.png"
              title="Peningkatan Ekonomi"
              description="Lorem ipsum dolor sit amet consectetur. A diam felis imperdiet amet turpis ac et aliquam"
            />
            <CommunityCard 
              imageUrl="src/assets/home/vuesax/hierarchy.png"
              title="Kegiatan CSR"
              description="Lorem ipsum dolor sit amet consectetur. A diam felis imperdiet amet turpis ac et aliquam"
            />
            <CommunityCard 
              imageUrl="src/assets/home/vuesax/pet.png"
              title="Layanan Masyarakat"
              description="Lorem ipsum dolor sit amet consectetur. A diam felis imperdiet amet turpis ac et aliquam"
            />
            <CommunityCard 
              imageUrl="src/assets/home/vuesax/tree.png"
              title="Ramah lingkungan"
              description="Lorem ipsum dolor sit amet consectetur. A diam felis imperdiet amet turpis ac et aliquam"
            />
          </div>
        </section>

        <section className="max-w-[1226px] mx-auto">
          <div className="font-bold text-5xl font-montserrat text-center text-soft-black mt-24">
            Lihat bagaimana <span className="text-berijalan-green">berijalan</span> membantu pelanggan
          </div>
          <div className="font-light text-center mt-8 text-soft-black underline">
            <span className="underline hover:cursor-pointer hover:font-semibold">Lihat semua cerita pelanggan</span>
          </div>
          <div className="flex flex-row flex-wrap gap-6 mt-12 justify-around">
            <CustomerReviewCard 
              imageUrl={"https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
              title={"Astra Financial tingkatkan 43% pendapatan dengan berijalan."}
            />
            <CustomerReviewCard 
              imageUrl={"https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
              title={"Asuransi Ramayana luncurkan layanan baru."}
            />
            <CustomerReviewCard 
              imageUrl={"https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
              title={"SEVA menurunkan pengeluaran sebesar 72%."}
            />
            <CustomerReviewCard 
              imageUrl={"https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
              title={"Melalui data mining, MOXA dapatkan sumber pendapatan baru."}
            />
          </div>
        </section>

        <section className="bg-super-soft-gray rounded-xl px-4 py-8 flex flex-col items-center justify-center mt-16 max-w-[1226px] mx-auto">
          <div className="uppercase text-gray-400 font-bold font-montserrat text-2xl">Happy customers</div>
          <div className="capitalize font-bold text-4xl mt-4 font-montserrat">Apa kata pelanggan kami</div>
          <div className="flex flex-row mt-12 gap-6 justify-center items-center">
            <img src="src/assets/home/quotes_icon.png" alt="" />
            <div className="flex flex-row items-center gap-4">
              <div className={`w-15 h-15 bg-cover bg-center inline-block rounded-full`}
                style={{ backgroundImage: `url(https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}>
              </div>
              
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <img src="src/assets/home/star_icon.png" alt="" />
                  <img src="src/assets/home/star_icon.png" alt="" />
                  <img src="src/assets/home/star_icon.png" alt="" />
                  <img src="src/assets/home/star_icon.png" alt="" />
                  <img src="src/assets/home/star_icon.png" alt="" />
                </div>
                <div className="font-bold text-2xl text-soft-black">
                  Johnson Abadi
                </div>
              </div>
            </div>
          </div>
          <div className="text-center font-light font-montserrat text-2xl mt-8">
          Berijalan sangat responsif dan sabar dalam menjawab pertanyaan saya. Mereka juga memberikan saran-saran yang sangat bermanfaat untuk website saya. Setelah berdiskusi, kami pun sepakat untuk membuat website dengan desain yang modern dan minimalis. Proses desain dan pengembangan website berjalan dengan lancar.
          </div>
          <img className="mt-8" src="src/assets/company/moxa_icon.png" alt="" />
        </section>
      </div>
    );
  }

function CustomerReviewCard({imageUrl, title}){
  return (
    <div className="flex flex-col w-50 md:w-70 gap-6">
      <div className={`rounded-3xl min-w-50 min-h-50 md:min-w-70 md:min-h-70 bg-cover bg-center`}
        style={{ backgroundImage: `url(${imageUrl})` }} ></div>
      <div className="font-semibold text-xl">{title}</div>
      <div className="uppercase text-soft-black">
        Read More
      </div>
    </div>
  )
}

function CommunityCard({imageUrl, title, description}){
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start gap-4 w-[330px]">
        <div className="bg-white shadow-xl p-2 w-12 h-12 rounded-full">
          <img className="min-w-8 min-h-8" src={`${imageUrl}`} alt="" />
        </div>
        <div className="px-4">
          <h1 className="text-center md:text-start text-xl font-semibold font-montserrat mt-2 text-soft-black">{title}</h1>
          <p className="text-center md:text-start mt-4">{description}</p>
        </div>
    </div>
  );
};
  
  export default Home;