import React from 'react';

const FrontEndDeveloper = () => {
  return (
    <div className='max-w-[1226px] mx-auto mt-12'>
         <div className="relative mb-12">
                <div className="absolute inset-0 bg-[#F9F9F9] opacity-50 -z-10"></div>
                
                <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-gray-800 mb-2">Front-end Developer</h1>
                <p className="text-gray-600">
                    <span>D.I Yogyakarta</span>
                    <span className="mx-2">|</span>
                    <span className="text-teal-500">Full Time</span>
                </p>
                
                <div className="mt-6">
                    <button className="bg-teal-400 hover:bg-teal-500 text-white py-2 px-8 rounded-full transition duration-300">
                    Apply Now
                    </button>
                </div>
                </div>
            </div>
            
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
           
            <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-gray-800">Tentang Pekerjaan</h2>
                <p className="text-gray-500">Diunggah : 25 November, 2023</p>
                </div>
                
                <p className="text-gray-600 mb-6">
                you are going to use a passage of Lorem Ipsum, you need to be sure there isn't embarrassing hidden in
                the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
                </p>
                
                <ul className="list-disc pl-6 text-gray-600 space-y-3">
                <li>Merancang dan mengembangkan situs web berkualitas tinggi yang memenuhi kebutuhan</li>
                <li>Berkolaborasi dengan tim pengembang kami untuk memastikan bahwa desain diterapkan</li>
                <li>Tetap up-to-date dengan tren dan teknologi desain web terbaru</li>
                </ul>
            </div>
            
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Kualifikasi</h2>
                <p className="text-gray-600 mb-6">
                Kami mencari Pengembang Web yang terampil dan berpengalaman untuk bergabung
                dengan tim kami dan membantu kami membangun dan memelihara situs web berkualitas
                tinggi. Sebagai Web Developer, Anda akan bertanggung jawab atas aspek teknis situs web
                kami, memastikan bahwa mereka fungsional, aman, dan berkinerja baik.
                </p>
                
                <ul className="space-y-3 text-gray-600">
                {[
                    "Mengatasi masalah dan men-debug masalah situs web",
                    "Berkolaborasi dengan tim desainer kami untuk mengimplementasikan desain mereka",
                    "Mengoptimalkan kinerja situs web untuk kecepatan dan responsivitas",
                    "Tetap up-to-date dengan tren dan teknologi pengembangan web terbaru",
                    "Tulis kode yang bersih dan terdokumentasikan dengan baik",
                    "Menyebarkan dan memelihara situs web menggunakan sistem kontrol versi"
                ].map((item, index) => (
                    <li key={index} className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    {item}
                    </li>
                ))}
                </ul>
            </div>
            
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Hubungi Kami!</h2>
                <p className="text-gray-600 mb-6">
                Jika ada pertanyaan, Anda dapat menghungi kami di,
                </p>
                
                <div className="text-gray-700">
                <p className="font-bold">John Doe</p>
                <p>johndoe@mail.co</p>
                <p>+123 456 02342</p>
                </div>
                
                <div className="mt-8">
                <button className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-10 rounded-full transition duration-300">
                    Apply Now
                </button>
                </div>
            </div>
            
            <div className="absolute bottom-0 right-0 p-4">
                <div className="bg-green-500 rounded-full p-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                </svg>
                </div>
            </div>
            </div>
    </div>
    
  );
};

export default FrontEndDeveloper;