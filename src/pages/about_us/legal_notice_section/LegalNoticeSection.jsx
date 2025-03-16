import LegalNoticeItem from "./LegalNoticeItem";

function LegalNoticeSection() {
    return (
        <div className="bg-gray-100 px-80 py-10">
            <p className="font-bold text-teal-400 text-center">LEGAL NOTICE</p>

            {/* Section Title */}
            <h3 className="w-full text-4xl font-bold text-black text-center mt-[15px] mb-[40px]">
                Pemberitahuan Penting Tentang Merek dan Logo “berijalan”
            </h3>

            <div className="flex flex-col gap-[40px]">
                <p className="text-sm text-justify text-gray-600">
                    PT Cipta Sedaya Digital Indonesia (“CSDI”) merupakan perusahaan di bawah Group
                    PT Astra Internasional Tbk (“Astra Grup”), yang berada dalam Group Astra Credit
                    Companies (ACC). CSDI adalah Perusahaan yang bergerak di bidang pengembangan
                    layanan digital bagi perusahaan pembiayaan di bawah Astra Grup, serta perusahaan
                    lain yang memerlukan jasa terkait. CSDI didirikan dan menjalankan bisnisnya
                    secara legal dan sah sesuai peraturan hukum yang berlaku di Negara Republik
                    Indonesia.
                    <br />
                    <br />
                    Dengan ini manajemen PT CSDI menyampaikan pemberitahuan kepada masyarakat umum
                    serta pihak-pihak berkepentingan lainnya terkait hal-hal sebagai berikut:
                </p>

                <div className="flex flex-col gap-6">
                    <LegalNoticeItem
                        numbering={"01."}
                        content={
                            "Bahwa CSDI adalah pemilik dan pemegang hak eksklusif atas merek dan logo “berijalan” yang telah terdaftar secara resmi di Direktorat Jenderal Kekayaan Intelektual, Kementerian Hukum dan HAM di bawah nomor pendaftaran IDM001065975, IDM001065968, IDM001065779, IDM001065757, IDM001065747"
                        }
                    />

                    <LegalNoticeItem
                        numbering={"02."}
                        content={
                            "Bahwa merek dan/atau logo “berijalan” merupakan milik CSDI sepenuhnya dan CSDI tidak melakukan kerja sama dalam bentuk apapun dan dengan pihak manapun terkaitpenggunaan dan/atau logo “berijalan”."
                        }
                    />

                    <LegalNoticeItem
                        numbering={"03."}
                        content={
                            "Apabila terdapat penggunaan merek dan/atau logo “berijalan” oleh pihak lain selain CSDI, maka hal tersebut tidak memiliki kaitan dengan CSDI dan tindakan tersebut adalah perbuatan melawan hukum yang dapat dikenakan tindakan hukum baik pidana atau perdata."
                        }
                    />

                    <LegalNoticeItem
                        numbering={"04."}
                        content={
                            "CSDI meminta kepada masyarakat untuk berhati-hati dan waspada terhadap penggunaan merek dan/atau logo “berijalan” yang tidak sah dan melawan hukum, dan oleh karenannya CSDI tidak bertanggung jawab atas segala kerugian dan akibat hukum yang ditimbulkan dari penggunaan merek dan/atau logo “berijalan” yang tidak sah dan melawan hukum tersebut"
                        }
                    />
                </div>

                <p className="text-sm text-justify text-gray-600">
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words
                    which don't look even slightly believable.
                </p>
            </div>
        </div>
    );
}

export default LegalNoticeSection;
