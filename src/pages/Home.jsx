import moxaIcon from './../assets/company/moxa_icon.png'
import astraFinancialIcon from './../assets/company/astra_financial_icon.png'
import accIcon from './../assets/company/acc_icon.png'
import sevaIcon from './../assets/company/seva_icon.png'
import caasIcon from './../assets/company/caas_icon.png'
import asuransiRamayanaIcon from './../assets/company/asuransi_ramayana_icon.png'
import starIcon from './../assets/home/star_icon.png'
import technoCenter from './../assets/home/techno_center.png'
import quotesIcon from './../assets/home/quotes_icon.png'
import photoIcon from './../assets/home/photo.png'
import technoCenter1 from './../assets/home/techno_center_1.png'
import technoCenter2 from './../assets/home/techno_center_2.png'
import technoCenter3 from './../assets/home/techno_center_3.png'
import technoCenter4 from './../assets/home/techno_center_4.png'

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
          <img src={photoIcon} alt="" />
        </section>
        <section className="flex flex-col items-center mt-20 gap-3">
          <div>
            Dipercayai oleh lebih dari 20+ bisnis dan tim di seluruh Indonesia
          </div>
          <div className="flex flex-row gap-5 justify-center">
            <img src={astraFinancialIcon} alt="" />
            <img src={accIcon} alt="" />
            <img src={sevaIcon} alt="" />
            <img src={moxaIcon} alt="" />
            <img src={caasIcon} alt="" />
            <img src={asuransiRamayanaIcon} alt="" />
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
                <img className="inline-block mr-4" src={technoCenter1} alt="" />
                <span className="capitalize font-medium text-xl">Mobile & Web Development</span>
              </div>
              <div>
                <img className="inline-block mr-4" src={technoCenter2} alt=""  />
                <span className="capitalize font-medium text-xl">Robotic & Automation</span>
              </div>
              <div>
                <img className="inline-block mr-4" src={technoCenter3} alt="" />
                <span className="capitalize font-medium text-xl">Techno Center Product Solution</span>
              </div>
              <div>
                <img className="inline-block mr-4" src={technoCenter4}alt="" />
                <span className="capitalize font-medium text-xl">Analytics Report Development</span>
              </div>
            </div>
            <img src={technoCenter} alt="" />
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
            <img src={quotesIcon} alt="" />
            <div className="flex flex-row items-center gap-4">
              <div className={`w-15 h-15 bg-cover bg-center inline-block rounded-full`}
                style={{ backgroundImage: `url(https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}>
              </div>
              
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
                  <img src={starIcon} alt="" />
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

        <OfficeGallery />
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

const OfficeGallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: 'https://s3-alpha-sig.figma.com/img/62b7/73ea/a74cd5b02124de9412c0c0399c339649?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VLI51ema074gya0NgGJO~vMzzveGveRG5cDkdAS5T-hav3fAbUYKSGyoMMx0OKAotLu5oN4zU2h2imFf0zumW5mq8bUlyOa7cJMH1xPqLVjmrPcjsAr48hATZj9u3QyvWpMb5Fd2puPaibDJDc~-8iiU6-eCM6tzz07~FZFtQUgdgnDTmlnnDAYB1-t0wNhmit-TfKtf4J1vkmIBekFdGPCNl6H8ejlnHpzAK5VrziWdZgAhInrl8kgivyFpaZ2LT74OmoJs3c0NMEYFX9mLzzS0KAUmJarIWO-LbxM7TY5Scyb84vi~Zha7W1Fs8X0SD37piRGlucWm5yJqbpCPTg__',
      title: 'Gedung Berijalan Office',
      isLarge: true,
    },
    {
      id: 2,
      image: 'https://s3-alpha-sig.figma.com/img/d9a9/7518/46131ef915123749475259abdf712a11?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g4WQ07-33ubtKc9--HjuP8c~OOiSb80G7IjZLiRBhs~3ShWHGtlsP0vsr0IOOoOzr7sodhv3WJdC61R65x3-~3YqVVCGdbOuV0L8EeO8DuzzHbdKOX21B4sK1ewEFoOpFP6mwowD1gGtgRFEg9OVLUZMWv4M83v3uB80Aj-CAHOmD6TmV6j0cPXtQt8jpxGvm18fUWN4Kn87W-tjfIYv9BSmDPPG0iS-aQqrnK7ajIPIcM-EOuV5cFpaY6KN7FdISFVcGlznMupxMoLVfmgd3E-814tQO2Fvn3B0ndvhq2ImhsQ5mXw3f8AcWOZ-oUbVEOu9lXwQpFMv7vTqLmjXjg__',
      title: 'Pembagian Paket Sembako',
      isLarge: false,
    },
    {
      id: 3,
      image: 'https://s3-alpha-sig.figma.com/img/25db/7489/cef57aff14756d256f8c841e7ee6441b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l8trl7yurel6G8bid8ql19i6daj5eOWJh8TzPQ4ISgQC9jbEf3aSBFA7cYwT4LT8gBGo7TxmHWf70oQTwmoDZkHQuGwx5aB7WyqU7D2rmS7fR2E~4HCZvpzqd88c-pGESINwlDFM5ISI3B3klruKE32-32RXMvUtn-NIKJ-C7EKQM3lVl79oh5tDMWq3QbCzy7n9NgcKi4Wma4K~cvmWXDdtF~Zmxez0Gk8OXDkdXwmbtyvOv1efhRrWZdURy0AT1VshT6z8j-0zNhkEDdswBc7Pp0frAaVe-pp9hROxEqq5eGV9I1-ShdKmOKdVow-UJn7tIeRK2giVfGJLesh3lw__',
      title: 'Milestone Astra ACC',
      isLarge: false,
    },
    {
      id: 4,
      image: 'https://s3-alpha-sig.figma.com/img/a6bc/4a45/47b09de6e9daa0d14faec5c12afa970b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QEf65ENTIt7SJdJvalmqUb1wAHtWgZskjxByHPOr-nMHj09Y~YPMDhIbzkS01L14kuVIVc1kclB6uVlQXdwr~WloZ2ozE39pYpDg0Lf~4wuZO~fvY6Exenf87CGrAEc6oOmO7U1LZaWfKSYVkQLnTwxwiFkkOVA9ZAbexcz5P1AmxzqubxyoPnXQh-N2kncGpE-sBqLZT~dAvR-2~wCeZ51wlmaLcxAEsm6zwCaMJvDRrdHpV3zVtyfkSHaNdAoi~4~xnVQvgCieWhS~3lQIKP2FpwmZbsXTkQR~A4Lb4WaGHSh5dQqUcdm1xsAcTv4kurb8hLhWlYxoTN80qnDEwA__',
      title: 'Ruang Kerja',
      isLarge: false,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="text-center font-bold text-5xl text-soft-black mt-16">Galeri Foto</div>
      <div className="underline text-soft-black text-center mt-4">
        Lihat foto lainnnya
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
        {/* Large card (left side) */}
        {galleryItems
          .filter(item => item.isLarge)
          .map(item => (
            <div 
              key={item.id}
              className="relative h-96 md:h-full rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end group">
              <div className="absolute inset-0 bg-black opacity-0 duration-300 group-hover:opacity-20"></div>
                <div className="p-6 text-white flex items-center justify-between w-full">
                  <h2 className="text-2xl md:text-3xl font-bold">{item.title}</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}

        {/* Right column with smaller cards */}
        <div className="flex flex-col gap-4">
          {galleryItems
            .filter(item => !item.isLarge)
            .map(item => (
              <div 
                key={item.id}
                className="relative h-48 rounded-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end 
                 hover:cursor-pointer duration-300 transition-all group">
                  <div className="absolute inset-0 bg-black opacity-0 duration-300 group-hover:opacity-20"></div>
                  <div className="p-4 text-white flex items-center justify-between w-full gap-2 transition-all duration-300">
                    <h2 className="text-xl font-bold group-hover:font-extrabold"> 
                      {item.title}
                    </h2>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;