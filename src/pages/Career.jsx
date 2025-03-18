import { useNavigate } from "react-router-dom";

function JobPostings() {
  const navigate = useNavigate();

    return (
      <div className="mx-auto px-4 py-12 max-w-[1226px] mt-20">
        <h1 className="text-4xl font-bold text-center mb-12">Lowongan saat ini</h1>
        
        <div className="flex flex-row justify-center gap-6">
          {/* Web Designer & Developer Card */}
          <div className="bg-[#0a2158] text-white p-8 rounded-xl max-w-[450px]">
            <h2 className="text-3xl font-bold mb-4 min-h-[calc(2em*1.5)]">Web Designer & Developer</h2>
            
            <div className="flex items-center mb-6">
              <p className="text-lg">D.I Yogyakarta</p>
              <span className="mx-4">|</span>
              <p className="text-lg">Full Time</p>
            </div>
            
            <p className="text-lg mb-8 min-h-[calc(4em*1.5)]">
              Bertanggung jawab membuat desain dari aplikasi dan membuat aplikasi termasuk
              coding dan kebutuhan klien.
            </p>
            
            <button className="bg-white text-black py-3 px-8 rounded-full font-bold hover:bg-gray-100 hover:cursor-pointer transition-colors"
            onClick={() => {navigate("/career/web-designer")}}>
              Periksa Lowongan
            </button>
          </div>
          
          {/* Front-end developer Card */}
          <div className="bg-white border border-gray-200 p-8 rounded-xl max-w-[450px]">
            <h2 className="text-3xl font-bold mb-4 min-h-[calc(2em*1.5)]">Front-end developer</h2>
            
            <div className="flex items-center mb-6">
              <p className="text-lg">D.I Yogyakarta</p>
              <span className="mx-4">|</span>
              <p className="text-lg">Full Time</p>
            </div>
            
            <p className="text-lg mb-8 min-h-[calc(4em*1.5)]">
              Melakukan coding sesuai dengan kebutuhan klien dan mengidentifikasi
              kebutuhan lainnya.
            </p>
            
            <button className="border border-gray-300 text-gray-800 py-3 px-8 rounded-full font-bold hover:cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => {navigate("/career/front-end-developer")}}>
              Periksa Lowongan
            </button>
          </div>
        </div>
      </div>
    );
  }
    
function ValueCard({imgUrl, title, desc}) {
    return (
        <div className="flex flex-col rounded-2xl shadow-md max-w-[400px] p-6 border-[0.5px] border-gray-100">
            <img className="w-[100px] h-[100px]" src={imgUrl} alt={title} />
            <div className="font-bold font-montserrat text-2xl my-4">{title}</div>
            <div className="font-montserrat text-lg font-light">{desc}</div>
        </div>
    )
}
function Career() {
    return (
      <div className="max-w-[1226px] mx-auto">
        <section>
            <div className="mx-auto text-center font-bold text-7xl font-montserrat text-soft-black">
                Career
            </div>
            <div className="text-center mt-4 font-light text-2xl">
                Bekerjalah dengan kami mulai dengan cari posisi pekerjaan yang sesuai dengan anda.
            </div>
            <div className="text-[#ffffff] bg-[#00C2B6] mx-auto py-4 px-20 rounded-full w-fit mt-8 font-medium">
                Cari posisi yang sesuai
            </div>

            <div className="grid grid-cols-[6fr_7fr] gap-6 mt-8">
                <div className="rounded-3xl overflow-hidden">
                <img 
                    src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Team members working" 
                    className="w-full h-full object-cover"
                />
                </div>
                <div className="rounded-3xl overflow-hidden">
                <img 
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                />
                </div>
            </div>
        </section>
        <section className="mt-20  max-w-[1226px] mx-auto">
            <div className="bg-[#F6F9FF] py-4 px-10 rounded-full text-[#002D72] mx-auto w-fit font-bold">Nilai</div>
            <div className="mx-auto text-center font-bold text-5xl font-montserrat text-soft-black mt-8">
                Nilai yang menggambarkan kami
            </div>
            <div className="flex flex-row flex-wrap justify-center max-w-[1000px] mx-auto gap-8 mt-8">
                <ValueCard imgUrl={'src/assets/career/person.png'} title={'Patients come first'} desc={'Kesabaran menjadi kunci utama dari kesuksesan bekerjasama dalam tim.'} />
                <ValueCard imgUrl={'src/assets/career/rocket.png'} title={'Career growth'} desc={'Peningkatan karir secara konstan bersama dengan berijalan'} />
                <ValueCard imgUrl={'src/assets/career/clock.png'} title={'Flekxible hours'} desc={'Waktu kerja fleksibel dimanapun dan kapanpun bersama kami.'} />
                <ValueCard imgUrl={'src/assets/career/plus.png'} title={'Medical insurance'} desc={'Kesehatan menjadi prioritas utama kami terutama bagi karyawan kami.'} />
            </div>
        </section>
        <JobPostings />
      </div>
    );
  }
  
  export default Career;