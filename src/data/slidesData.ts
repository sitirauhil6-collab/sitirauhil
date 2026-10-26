import { SlideContent, PesantrenInfo, QuizQuestion, FaqItem } from '../types/presentation';

export const PESANTREN_NTB_LIST: PesantrenInfo[] = [
  {
    id: 'nwdi-pancor',
    name: 'Pondok Pesantren Nahdlatul Wathan Diniyah Islamiyah (NWDI)',
    location: 'Pancor, Selong',
    district: 'Lombok Timur',
    island: 'Lombok',
    typicalCohortSize: 120,
  },
  {
    id: 'nurul-hakim',
    name: 'Pondok Pesantren Nurul Hakim',
    location: 'Kediri',
    district: 'Lombok Barat',
    island: 'Lombok',
    typicalCohortSize: 140,
  },
  {
    id: 'al-aziziyah',
    name: 'Pondok Pesantren Al-Aziziyah Putra & Putri',
    location: 'Kapek, Gunungsari',
    district: 'Lombok Barat',
    island: 'Lombok',
    typicalCohortSize: 160,
  },
  {
    id: 'nw-anjani',
    name: 'Pondok Pesantren Syaikh Zainuddin Nahdlatul Wathan',
    location: 'Anjani, Suralaga',
    district: 'Lombok Timur',
    island: 'Lombok',
    typicalCohortSize: 110,
  },
  {
    id: 'abu-hurairah',
    name: 'Pondok Pesantren Abu Hurairah',
    location: 'Kota Mataram',
    district: 'Mataram',
    island: 'Lombok',
    typicalCohortSize: 95,
  },
  {
    id: 'islahuddiny',
    name: 'Pondok Pesantren Darul Falah / Islahuddiny',
    location: 'Kediri',
    district: 'Lombok Barat',
    island: 'Lombok',
    typicalCohortSize: 85,
  },
  {
    id: 'al-ikhlas-taliwang',
    name: 'Pondok Pesantren Modern Al-Ikhlas',
    location: 'Taliwang',
    district: 'Sumbawa Barat',
    island: 'Sumbawa',
    typicalCohortSize: 90,
  },
  {
    id: 'maraqitta-limat',
    name: 'Pondok Pesantren Maraqitta\'limat',
    location: 'Mamben Daya, Wanasaba',
    district: 'Lombok Timur',
    island: 'Lombok',
    typicalCohortSize: 75,
  },
  {
    id: 'al-madinah-bima',
    name: 'Pondok Pesantren Al-Madinah',
    location: 'Kota Bima',
    district: 'Bima',
    island: 'Sumbawa',
    typicalCohortSize: 65,
  },
];

export const INITIAL_SLIDES: SlideContent[] = [
  {
    id: 'slide-1',
    slideNumber: 1,
    category: 'opening',
    title: 'Mengetuk Pintu Langit di Kota Seribu Menara',
    arabicTitle: 'جامعة الأزهر الشريف بمصر: قبلة العلم ومنارة الوسطية',
    subtitle: 'Sosialisasi & Panduan Strategis Kuliah di Universitas Al-Azhar Kairo untuk Santri Pondok Pesantren se-Nusa Tenggara Barat',
    summary: 'Mempersiapkan generasi Tuan Guru masa depan NTB yang berakidah Ahlussunnah wal Jama\'ah, berwawasan Wasathiyah, dan bersanad keilmuan muttashil ke kibar ulama dunia.',
    bulletPoints: [
      'Diselenggarakan bersama Ikatan Alumni Al-Azhar (OIAA) Cabang Nusa Tenggara Barat',
      'Panduan resmi seleksi Kemenag RI, PUSIBA (Markaz Tathwir), dan Beasiswa Al-Azhar',
      'Target audiens: Santriwan & Santriwati Kelas X, XI, XII MA/KMI, Asatidz, serta Pimpinan Pesantren',
      'Dukungan penuh dari jaringan masyaikh dan paguyuban Keluarga Pelajar & Mahasiswa NTB (KPMM) di Kairo'
    ],
    keyHighlight: {
      label: 'Tradisi Keilmuan',
      value: '> 1.080 Tahun',
      description: 'Pusat peradaban Islam tertua di dunia yang terus mencetak ulama mu\'tabar dari masa ke masa'
    },
    speakerNotes: {
      durationMinutes: 4,
      talkingPoints: [
        'Buka dengan salam hangat, hamdalah, shalawat, dan apresiasi kepada pimpinan pondok pesantren serta para santri.',
        'Sebutkan keterikatan historis yang kuat antara NTB (Bumi Seribu Masjid) dengan Kairo (Kota Seribu Menara).',
        'Tegaskan bahwa alumni Al-Azhar asal NTB telah terbukti menjadi lokomotif kemajuan umat dan dakwah di Nusa Tenggara Barat.',
        'Ajak santri untuk menumbuhkan himmah aliyyah (cita-cita tinggi) menuntut ilmu ke jantung keilmuan Islam dunia.'
      ],
      santriEmphasis: 'Kalian yang hari ini mengkaji Jurumiyah, Taqrib, dan mengulang hafalan Qur\'an di bilik pesantren, adalah calon penerus yang akan duduk di halaqah para kibar ulama Masjid Al-Azhar!',
      anecdoteOrTip: 'Gunakan pepatah Arab: "مَنْ لَمْ يُسَافِرْ لَمْ يَرَ شَيْئاً" dan ingatkan bahwa Tuan Guru Bajang (TGB) dulu juga memulai langkahnya dari bilik santri di Lombok.'
    },
    imagePath: '/src/assets/images/alazhar_cairo_historic_1793025397821.jpg'
  },
  {
    id: 'slide-2',
    slideNumber: 2,
    category: 'profile',
    title: 'Keistimewaan & Karakter Keilmuan Al-Azhar',
    arabicTitle: 'المنهج الأزهري: عقيدة وشريعة وأخلاقاً',
    subtitle: 'Mengapa Al-Azhar Kairo Menjadi Kiblat Utama Pelajar Muslim Dunia?',
    summary: 'Al-Azhar bukan sekadar universitas modern, melainkan institusi wakaf peradaban dengan tiga pilar manhaj yang menjaga keutuhan umat Islam selama lebih dari satu milenium.',
    bulletPoints: [
      'Pilar Aqidah: Ahlussunnah wal Jama\'ah berasaskan rumusan Imam Abu Hasan Al-Asy\'ari & Imam Abu Mansur Al-Maturidi',
      'Pilar Fiqh: Mengakui dan mengajarkan 4 Mazhab Fiqih Mu\'tabar (Hanafi, Maliki, Syafi\'i, Hanbali) dengan semangat saling menghormati',
      'Pilar Tasawuf & Akhlak: Pembersihan jiwa (Tazkiyatun Nafs) mengacu pada Imam Al-Ghazali dan Imam Junaid Al-Baghdadi',
      'Sanad Muttashil: Mata rantai keilmuan riwayah dan dirayah yang bersambung langsung tanpa putus hingga Rasulullah SAW'
    ],
    cards: [
      {
        title: 'Manhaj Wasathiyah',
        tag: 'Moderat',
        description: 'Menjauhkan umat dari paham ekstremisme (tatharrruf) maupun sekularisme radikal (tafrith). Santri diajarkan melihat perbedaan furu\'iyah sebagai rahmat.',
      },
      {
        title: 'Kombinasi Kampus & Ruwaq',
        tag: 'Tradisi & Modern',
        description: 'Santri belajar kurikulum formal di kelas universitas pada pagi hari, dan duduk bersila talaqqi kitab turats bersama kibar masyaikh di Masjid Al-Azhar pada sore & malam.',
      },
      {
        title: 'Ijazah Diakui Global',
        tag: 'Internasional',
        description: 'Lulusan Al-Azhar diakui kredibilitas keilmuannya oleh lembaga-lembaga fatwa dunia, universitas di Timur Tengah, Eropa, maupun kementerian di seluruh dunia Islam.',
      }
    ],
    speakerNotes: {
      durationMinutes: 4,
      talkingPoints: [
        'Jelaskan bahwa sistem pendidikan pesantren di NTB (yang mayoritas bermazhab Syafi\'i dan berakidah Asy\'ariyah) 100% selaras dengan Manhaj Al-Azhar.',
        'Santri NTB tidak akan mengalami disorientasi keagamaan atau "kaget mazhab" saat tiba di Kairo karena pondasi kitabnya sama.',
        'Tekankan berkah talaqqi: belajar di hadapan guru secara langsung mengambil adab sebelum ilmu.'
      ],
      santriEmphasis: 'Kalian belajar Fathul Qarib dan Minhajuth Thalibin di sini, di Al-Azhar kalian akan membaca syarahnya langsung dari ulama penerus pensyarahnya!',
      anecdoteOrTip: 'Ceritakan suasana maghrib di Masjid Al-Azhar di mana puluhan tiang marmer menjadi halaqah ilmu para ulama sepuh dunia.'
    }
  },
  {
    id: 'slide-3',
    slideNumber: 3,
    category: 'alumni',
    title: 'Kiprah Alumni Al-Azhar di NTB & Nusantara',
    arabicTitle: 'أثر خريجي الأزهر في نهضة المجتمع الإندونيسي',
    subtitle: 'Bukti Nyata Kontribusi dan Kepemimpinan Azhari di Bumi Gora',
    summary: 'Alumni Al-Azhar dari Nusa Tenggara Barat telah menempati posisi sentral sebagai ulama fatwa, pendidik, pimpinan pondok pesantren, dan pemimpin transformatif.',
    bulletPoints: [
      'Dr. TGH. M. Zainul Majdi, MA (Tuan Guru Bajang): Ketua Umum PB NWDI, Ketua OIAA Cabang Indonesia, Alumnus Tafsir & Ulumul Qur\'an Al-Azhar (S1, S2, S3 Summa Cum Laude)',
      'Jaringan Masyaikh & Asatidz di Pesantren NTB: Pemimpin dan pengasuh pondok di Lombok Timur, Lombok Barat, Mataram, Sumbawa, hingga Bima mayoritas didukung alumni Kairo',
      'Organisasi Internasional Alumni Al-Azhar (OIAA) NTB: Wadah pembinaan, bimbingan seleksi santri, sertifikasi bahasa, dan jejaring beasiswa',
      'Alumni Nasional: KH. Abdurrahman Wahid (Gus Dur), Prof. Dr. HM. Quraish Shihab, MA, Prof. Dr. Nasaruddin Umar, MA, Prof. Dr. Din Syamsuddin'
    ],
    cards: [
      {
        title: 'Ketua OIAA Indonesia',
        tag: 'Tokoh NTB',
        description: 'TGB Dr. M. Zainul Majdi membuktikan santri asal Lombok mampu meraih predikat Summa Cum Laude (Martabah Asy-Syarof Al-Ula ma\'a Toba\'ah) di Universitas Al-Azhar Kairo.',
      },
      {
        title: 'Keluarga Mahasiswa KPMM NTB',
        tag: 'Paguyuban Kairo',
        description: 'Santri NTB di Kairo memiliki rumah singgah / wisma kekeluargaan (KPMM NTB) di Kairo untuk bimbingan akademik, tempat tinggal darurat, dan kebersamaan.',
      },
      {
        title: 'Sinergi Pesantren & OIAA NTB',
        tag: 'Bimbingan',
        description: 'OIAA Cabang NTB rutin menggelar Dauroh Lughoh, simulasi tes Kemenag, dan bimbingan berkas ijazah untuk santri pesantren NTB sebelum keberangkatan.',
      }
    ],
    speakerNotes: {
      durationMinutes: 4,
      talkingPoints: [
        'Kaitkan materi dengan tokoh yang sangat dihormati para santri, khususnya TGB dan asatidz pesantren tuan rumah yang merupakan alumni Al-Azhar.',
        'Sebutkan jika di pesantren tuan rumah ada alumni Al-Azhar yang mengajar, minta beliau berdiri atau sebutkan namanya sebagai teladan hidup.',
        'Yakinkan santri bahwa mereka memiliki DNA keilmuan yang sama dengan para alumni sukses terdahulu.'
      ],
      santriEmphasis: 'TGB dan para Tuan Guru dulu juga seusia kalian saat mulai bercita-cita ke Kairo. Kesempatan yang sama terbuka lebar bagi kalian sekarang!',
      anecdoteOrTip: 'Tunjukkan rasa bangga bahwa NTB merupakan salah satu provinsi penyumbang mahasiswa Al-Azhar paling berprestasi di Kairo.'
    },
    imagePath: '/src/assets/images/santri_pesantren_study_1793025396269.jpg'
  },
  {
    id: 'slide-4',
    slideNumber: 4,
    category: 'faculty',
    title: 'Fakultas & Program Studi di Al-Azhar',
    arabicTitle: 'الكليات والأقسام العلمية بجامعة الأزهر',
    subtitle: 'Pilihan Spesialisasi Keilmuan Agama (Syar\'iyyah) dan Umum (Ilmiyyah)',
    summary: 'Universitas Al-Azhar memiliki kampus terpisah antara Banin (Mahasiswa Putra) dan Banat (Mahasiswi Putri) di Kairo, Tafahna Al-Asyraf, Tanta, Alexandria, dan kota lainnya.',
    bulletPoints: [
      'Fakultas Ushuluddin: Jurusan Tafsir & Ulumul Qur\'an, Hadits & Ulumul Hadits, Aqidah & Filsafat, serta Dakwah & Kebudayaan Islam',
      'Fakultas Syari\'ah wal Qanun: Jurusan Syari\'ah Islamiyah (Fiqh & Ushul Fiqh), Fiqh Muqaran (Perbandingan Mazhab), dan Qanun (Hukum Positif & Syariah)',
      'Fakultas Bahasa Arab (Kulliyatul Lughah Al-Arabiyah): Jurusan Lughawiyyat (Linguistik & Nahwu Shorof), Adab & Naqd (Sastra & Kritik), Balaghah & Fashahah',
      'Fakultas Dirasat Islamiyah wal Arabiyah (Kulliyat Banin & Banat): Menggabungkan Ushuluddin, Syariah, dan Bahasa Arab dalam satu fakultas'
    ],
    cards: [
      {
        title: 'Fakultas Ushuluddin',
        tag: 'Kulliyah Favorit',
        description: 'Mencetak mufassir, muhaddits, dan mutakallim. Membedah kitab-kitab induk karya Imam Fakhruddin Ar-Razi, Imam Ibnu Hajar Al-Asqalani, dan Imam Nawawi.',
      },
      {
        title: 'Fakultas Syari\'ah wal Qanun',
        tag: 'Pencetak Mufti & Hakim',
        description: 'Fokus pada hukum Islam, kaidah fiqhiyyah, maqashid syariah, dan perbandingan hukum syariat dengan undang-undang modern.',
      },
      {
        title: 'Fakultas Bahasa Arab',
        tag: 'Mastery Bahasa Al-Qur\'an',
        description: 'Mendalami rahasia mukjizat balaghah Al-Qur\'an, sejarah sastra Arab jahiliyah & Islam, serta ilmu Nahwu dari mazhab Bashrah dan Kufah.',
      },
      {
        title: 'Fakultas Saintek & Kedokteran',
        tag: 'Fakultas Umum',
        description: 'Kedokteran Umum, Kedokteran Gigi, Farmasi, Teknik Sipil & Elektro, Pertanian. Tersedia dengan syarat penyetaraan ijazah dan kuota beasiswa bilateral.',
      }
    ],
    speakerNotes: {
      durationMinutes: 4,
      talkingPoints: [
        'Jelaskan bahwa 90%+ mahasiswa Indonesia dan santri NTB mengambil fakultas keagamaan (Ushuluddin, Syariah, Bahasa Arab, Dirasat Islamiyah).',
        'Jelaskan perbedaan antara sistem Banin (asrama dan kampus putra) dan Banat (kampus dan asrama putri yang terpisah dan sangat terjaga).',
        'Tanyakan kepada santri di ruangan: "Siapa yang ingin masuk jurusan Tafsir Hadits? Siapa yang ingin jurusan Fiqh Muqaran?" untuk memicu antusiasme.'
      ],
      santriEmphasis: 'Semua fakultas keagamaan di Al-Azhar langsung bersentuhan dengan literatur turats klasik otentik berbahasa Arab fusha tingkat tinggi.',
      anecdoteOrTip: 'Jelaskan gelar yang didapat: Licence (Lc.) setara Sarjana Strata Satu (S1), kemudian Magister (M.A.), dan Doktor (Dr.).'
    }
  },
  {
    id: 'slide-5',
    slideNumber: 5,
    category: 'pathway',
    title: '4 Jalur Pendaftaran & Seleksi Resmi',
    arabicTitle: 'المسارات الرسمية للالتحاق بجامعة الأزهر الشريف',
    subtitle: 'Pahami Mekanisme Resmi Kemenag RI, PUSIBA, Beasiswa, dan Mu\'adalah',
    summary: 'Pemerintah Mesir dan Kedutaan Besar Republik Indonesia (KBRI) Kairo menegaskan seluruh calon mahasiswa wajib menempuh jalur resmi yang tersertifikasi.',
    bulletPoints: [
      '1. Jalur Seleksi Kemenag RI (Diktis): Ujian nasional Computer Based Test (CBT), tes lisan bahasa Arab, tahfidz, dan wawancara wawasan kebangsaan (dibuka sekitar Mei-Juni)',
      '2. Jalur PUSIBA (Markaz Tathwir Cabang Indonesia): Jalur matrikulasi bahasa Arab di bawah naungan OIAA Pusat di Jakarta / Bekasi sebelum diberangkatkan ke Kairo',
      '3. Jalur Beasiswa Penuh (Grand Sheikh Al-Azhar & PBSB): Kuota beasiswa dari Kantor Syaikhul Azhar (Masyikhatul Azhar) atau Program Beasiswa Santri Berprestasi (PBSB Kemenag)',
      '4. Jalur Mu\'adalah Pesantren: Khusus pondok pesantren yang telah mengantongi SK Penyetaraan Ijazah (Mu\'adalah) resmi langsung dari Masyikhatul Azhar Kairo'
    ],
    cards: [
      {
        title: 'Jalur Kemenag RI (Diktis)',
        tag: 'Jalur Utama Nasional',
        description: 'Terbuka untuk lulusan MA / SMA / Pondok Pesantren se-Indonesia. Menghasilkan kuota beasiswa dan non-beasiswa resmi yang diakui KBRI Kairo.',
      },
      {
        title: 'Jalur PUSIBA / Markaz Tathwir',
        tag: 'Jalur Terpadu OIAA',
        description: 'Santri menyelesaikan level bahasa Arab (Mustawa 1-7) di Indonesia, sehingga saat mendarat di Mesir bisa langsung masuk perkuliahan semester 1 tanpa menunggu lama.',
      },
      {
        title: 'Jalur Mu\'adalah Pesantren',
        tag: 'Jalur Khusus Pondok',
        description: 'Pesantren NTB yang ijazahnya telah di-mu\'adalah dapat mendaftarkan lulusannya secara langsung sesuai ketentuan dokumen resmi dari Kairo.',
      }
    ],
    speakerNotes: {
      durationMinutes: 5,
      talkingPoints: [
        'Waspadai calo atau jalur non-resmi (jalur visa turis/visa ziarah yang sering bermasalah di imigrasi Mesir).',
        'Tekankan: "Hanya daftar lewat jalur Kemenag RI atau PUSIBA OIAA resmi!" agar visa pelajar, izin tinggal (iqamah), dan legalitas ijazah aman 100%.',
        'Jelaskan bahwa santri berprestasi dari NTB sangat berpeluang meraih beasiswa penuh jika tahfidz-nya mutqin dan bahasa Arabnya istimewa.'
      ],
      santriEmphasis: 'Jangan pernah tergiur janji "berangkat cepat tanpa tes bahasa". Jalur resmi Al-Azhar menguji kompetensi demi keselamatan studi santri di Mesir!',
      anecdoteOrTip: 'Ceritakan bahwa OIAA NTB siap mengkoordinir pendaftaran kolektif bagi santri pesantren di NTB.'
    }
  },
  {
    id: 'slide-6',
    slideNumber: 6,
    category: 'exam',
    title: 'Standar & Materi Ujian Seleksi (Ikhtibar Qabul)',
    arabicTitle: 'اختبارات القبول: الكفاءة اللغوية والقرآن الكريم',
    subtitle: 'Komponen Uji Kompetensi yang Harus Dikuasai Calon Mahasiswa',
    summary: 'Seleksi masuk Al-Azhar dirancang untuk menguji kesiapan mental, kelancaran berbahasa Arab aktif-pasif, penguasaan hafalan Qur\'an, dan komitmen moderasi beragama.',
    bulletPoints: [
      '1. Uji Bahasa Arab (TOAFL / CBT): Fahmul Masmu\' (mendengar percakapan ilmiah), Qawa\'id (Nahwu, Shorof, I\'rab), Fahmul Maqru\' (membaca teks gundul & analisis makna)',
      '2. Uji Tahfidz Al-Qur\'an: Kelancaran membaca (tartil/tajwid) dan hafalan Al-Qur\'an minimal 2 juz mutqin untuk reguler (minimal 10-30 juz untuk kuota beasiswa)',
      '3. Ujian Lisan & Insya\': Kemampuan percakapan bahasa Arab fusha (Muhadatsah), memperkenalkan diri, argumentasi hukum sederhana, dan menulis karangan bahasa Arab',
      '4. Wawancara Moderasi Beragama: Wawasan kebangsaan, Pancasila, komitmen NKRI, serta pemahaman Wasathiyatul Islam untuk menangkal paham intoleran'
    ],
    cards: [
      {
        title: 'Komponen Fahmul Masmu\' (25%)',
        tag: 'Listening Arab',
        description: 'Mendengarkan audio rekaman aksen Arab fusha Mesir/Timur Tengah lalu menjawab pertanyaan pilihan ganda terkait ide pokok dan kesimpulan.',
      },
      {
        title: 'Komponen Qawa\'id & Balaghah (35%)',
        tag: 'Tata Bahasa',
        description: 'Penerapan kaidah Matan Jurumiyah, Imrithi, atau Alfiyah: Marfu\'atul Asma\', Manshubat, Majrurat, I\'lal, Idhofah, Balaghah Ma\'ani/Bayan.',
      },
      {
        title: 'Tahfidz & Wawasan Kebangsaan (40%)',
        tag: 'Lisan & Karakter',
        description: 'Sambung ayat hafalan di hadapan penguji, pertanyaan fikih dasar wasathiyah, dan pandangan santri terhadap toleransi dan kebhinekaan di Indonesia.',
      }
    ],
    speakerNotes: {
      durationMinutes: 4,
      talkingPoints: [
        'Santri pesantren NTB punya modal besar di Qawa\'id (Nahwu Shorof) karena terbiasa dengan kitab kuning.',
        'Kelemahan umum santri Indonesia adalah di Fahmul Masmu\' (Listening) dan Muhadatsah (Berbicara), karena jarang membiasakan mendengar audio Arab fusha.',
        'Berikan tips konkret: mulai dengarkan siaran berita Idza\'atul Qur\'an Kairo atau ceramah masyaikh Al-Azhar di YouTube tiap hari.'
      ],
      santriEmphasis: 'Jangan takut ujian! Kita santri NTB sudah terbiasa dengan sorogan dan bandongan. Tinggal kita asah pendengaran dan lisan fusha kita!',
      anecdoteOrTip: 'Nanti di akhir presentasi ini ada sesi Latihan Kuis Tes Seleksi langsung di layar untuk menguji kemampuan teman-teman santri!'
    }
  },
  {
    id: 'slide-7',
    slideNumber: 7,
    category: 'pusiba',
    title: 'Jenjang Kursus Bahasa Arab (Markaz Lughah / PUSIBA)',
    arabicTitle: 'مستويات مركز تعليم اللغة العربية لغير الناطقين بها',
    subtitle: '7 Tingkatan Mustawa yang Menentukan Kesiapan Duduk di Ruang Kuliah',
    summary: 'Berdasarkan regulasi resmi Universitas Al-Azhar, seluruh mahasiswa asing (Wafidin) wajib lulus ujian matrikulasi bahasa Arab Markaz Tathwir (Pusat Pengembangan Pendidikan Wafidin).',
    bulletPoints: [
      'Mustawa Mubtadi\' Awwal & Tsani (Level Pemula 1 & 2): Penguasaan kosakata dasar, fonetik makharijul huruf, dan struktur kalimat sederhana',
      'Mustawa Mutawassith Awwal & Tsani (Level Menengah 1 & 2): Diskusi tematik, tata bahasa terapan, pemahaman teks berita dan kitab fiqih ringkas',
      'Mustawa Mutaqaddim Awwal & Tsani (Level Lanjutan 1 & 2): Analisis teks turats klasik, ushul fiqh, balaghah tingkat tinggi, dan penulisan makalah ilmiah',
      'Mustawa Mutamayyiz (Level Mahir): Tingkat kelulusan akhir yang menjadi tiket resmi membuka berkas pendaftaran fakultas di Universitas Al-Azhar'
    ],
    steps: [
      {
        number: '1',
        title: 'Placement Test (Tahdid Mustawa)',
        description: 'Tes penempatan level di awal untuk mengukur santri masuk ke tingkatan mana (bisa langsung lompat ke level menengah jika hasil tes bagus).'
      },
      {
        number: '2',
        title: 'Studi di PUSIBA Jakarta atau Kairo',
        description: 'Santri dapat memilih menyelesaikan tingkatan mustawa di PUSIBA cabang Indonesia (Jakarta/Bekasi) atau langsung di Markaz Lughah Kairo Mesir.'
      },
      {
        number: '3',
        title: 'Kelulusan Mutamayyiz & Tasjil Kuliah',
        description: 'Setelah mengantongi syahadah (sertifikat) lulus Mutamayyiz, mahasiswa berhak mendaftar dan memilih fakultas yang diminati di Kairo.'
      }
    ],
    speakerNotes: {
      durationMinutes: 4,
      talkingPoints: [
        'Jelaskan keuntungan menyelesaikan mustawa di PUSIBA Jakarta: biaya hidup lebih hemat selama belajar bahasa, mental lebih matang sebelum terbang ke Mesir.',
        'Tetapi jika santri berangkat langsung ke Kairo, mereka mendapatkan lingkungan imersi bahasa 24 jam dengan penutur asli Mesir.',
        'Setiap level biasanya berlangsung 1 bulan intensif dengan ujian di akhir tiap level.'
      ],
      santriEmphasis: 'Bagi santri yang sudah mutqin nahwu dan percakapan sejak di pondok, kalian bisa langsung loncat ke Mustawa Mutawassith atau Mutaqaddim pada Placement Test!',
      anecdoteOrTip: 'Tunjukkan buku kurikulum standar "Silsilah Al-Azhar li Ta\'limil Lughah Al-Arabiyah" yang sangat sistematis dan kaya kosakata.'
    }
  },
  {
    id: 'slide-8',
    slideNumber: 8,
    category: 'cost',
    title: 'Rincian Finansial & Estimasi Biaya Hidup (Living Cost)',
    arabicTitle: 'التكاليف الدراسية وتكاليف المعيشة بالقاهرة',
    subtitle: 'Fakta Menarik: Kuliah Agama di Al-Azhar Bebas Uang SPP (Bebas Biaya Kuliah)',
    summary: 'Universitas Al-Azhar menggratiskan biaya kuliah (Tuition Fee / SPP) bagi mahasiswa asing di fakultas keagamaan. Biaya yang dibutuhkan murni untuk biaya hidup dan kebutuhan mandiri.',
    bulletPoints: [
      'SPP Kuliah Fakultas Keagamaan: 100% GRATIS (tidak ada uang gedung atau SPP semesteran seperti kampus swasta)',
      'Sewa Flat Mahasiswa (Sharing Apartment): Sekitar 1.000 – 1.800 EGP / santri / bulan (~Rp 320.000 – Rp 580.000 / bulan)',
      'Makan & Belanja Dapur Mandiri: Sekitar 1.500 – 2.500 EGP / bulan (~Rp 480.000 – Rp 800.000 / bulan dengan masak bersama kawan se-flat)',
      'Biaya Awal Pemberangkatan (One-off): Tiket pesawat internasional, visa pelajar, paspor, legalisasi dokumen, dan matrikulasi bahasa'
    ],
    cards: [
      {
        title: 'Sewa Apartemen di Kairo',
        tag: '1.200 - 1.800 EGP/bln',
        description: 'Mahasiswa NTB umumnya tinggal bersama (flat sharing) di kawasan Hayy El-Asher (Madinat Nasr), Darrasah (dekat Masjid Al-Azhar), atau Muqattam.',
      },
      {
        title: 'Makan & Masak Mandiri',
        tag: '1.500 - 2.500 EGP/bln',
        description: 'Bahan pangan pokok di Mesir (roti aisy, beras, ayam, telur, sayur mayur, buah) sangat murah dan melimpah berkat subsidi pangan pemerintah Mesir.',
      },
      {
        title: 'Buku Kitab & Transportasi',
        tag: '400 - 800 EGP/bln',
        description: 'Harga kitab turats di Maktabah Kairo terkenal paling murah di dunia Islam. Transportasi harian menggunakan Tramco (angkot) dan Metro Kairo.',
      },
      {
        title: 'Total Pengeluaran Bulanan',
        tag: 'Rp 1.000.000 - Rp 1.600.000',
        description: 'Estimasi total living cost santri per bulan: 3.000 – 4.500 EGP (~Rp 1 - 1,5 Juta IDR). Seringkali lebih terjangkau daripada kuliah di Jakarta atau Surabaya!',
      }
    ],
    speakerNotes: {
      durationMinutes: 5,
      talkingPoints: [
        'Poin ini SANGAT PENTING untuk wali santri dan pimpinan pondok yang sering mengira kuliah di luar negeri butuh ratusan juta.',
        'Faktanya: Biaya kuliah di Al-Azhar GRATIS! Hanya perlu mempersiapkan biaya hidup bulanan yang setara dengan biaya makan santri di pondok Indonesia.',
        'Mata uang Pound Mesir (EGP) saat ini berada di kisaran ~Rp 320 / 1 EGP, membuat daya beli Rupiah sangat kompetitif di Kairo.'
      ],
      santriEmphasis: 'Jangan minder karena masalah biaya! Dengan masak patungan dan hidup sederhana khas santri, kalian bisa bertahan hidup dengan sangat layak di Kairo!',
      anecdoteOrTip: 'Ceritakan roti "Aisy Baladi", roti gandum khas Mesir yang sangat murah dan mengenyangkan, makanan favorit mahasiswa Indonesia dari masa ke masa.'
    }
  },
  {
    id: 'slide-9',
    slideNumber: 9,
    category: 'life',
    title: 'Kehidupan Santri di Kairo & Masir',
    arabicTitle: 'حياة الطلاب الوافدين: دراسة وتلاقٍ وأخوة في الغربة',
    subtitle: 'Pengalaman Berharga Menimba Ilmu, Berbudaya, dan Bersaudara di Negeri Para Nabi',
    summary: 'Kairo menawarkan laboratorium kehidupan yang kaya: iklim 4 musim, pasar buku turats bersejarah, interaksi dengan 130+ negara, serta kehangatan paguyuban daerah.',
    bulletPoints: [
      'Keluarga Pelajar dan Mahasiswa NTB di Mesir (KPMM): Rumah gadang dan keluarga kedua santri NTB di perantauan untuk bimbingan belajar, bakti sosial, dan silaturahmi',
      'Tradisi Talaqqi di Ruwaq Al-Azhar: Menghadiri majelis ta\'lim di Masjid Al-Azhar, Masjid Sayyiduna Husein, Masjid Sayyidah Zainab, dan ma\'had para masyaikh',
      'Adaptasi Iklim 4 Musim: Mengalami musim dingin yang sejuk (10°C–15°C) dan musim panas kering, belajar disiplin fisik dan daya tahan tubuh',
      'Jejaring Sahabat Multinasional: Berteman dan bertukar wawasan dengan santri dari Maroko, Sudan, Syam, Uzbekistan, Malaysia, Thailand, hingga Afrika Barat'
    ],
    cards: [
      {
        title: 'Asrama Mahasiswa (Madinat Bu\'uts)',
        tag: 'Bagi Penerima Beasiswa',
        description: 'Kompleks asrama internasional resmi Al-Azhar yang menyediakan kamar, makan 3 kali sehari, perpustakaan, fasilitas olahraga, dan klinik gratis.',
      },
      {
        title: 'Masir (Kekeluargaan Daerah)',
        tag: 'Dukungan Sosial',
        description: 'Setiap mahasiswa baru (Maba) asal NTB akan dijemput di Bandara Kairo, dibantu mencari flat tinggal, dibimbing pembuatan izin tinggal, dan dipantau senior.',
      },
      {
        title: 'Ziarah Makam Para Aulia & Sahabat',
        tag: 'Wisata Rohani',
        description: 'Kairo adalah tempat peristirahatan Imam Syafi\'i, Imam Waki\', Sayyidah Nafisah, Ibnu Hajar Al-Asqalani, dan ratusan ulama besar penyusun kitab pesantren.',
      }
    ],
    speakerNotes: {
      durationMinutes: 4,
      talkingPoints: [
        'Gambarkan bagaimana rasa haru ketika santri berziarah ke makam Imam Syafi\'i yang selama ini namanya selalu dibaca di pembuka kitab pesantren.',
        'Yakinkan wali santri bahwa anak-anak mereka tidak dilepas sendirian di Kairo; ada KPMM NTB, KBRI Kairo, dan OIAA yang mengawal ketat.',
        'Kebiasaan santri Indonesia yang santun, tekun, dan pandai menjaga adab sangat dicintai oleh para dosen dan masyaikh Al-Azhar.'
      ],
      santriEmphasis: 'Kalian tidak akan kesepian di Mesir. Masakan Plecing Kangkung dan Ayam Taliwang pun sering dibuat bersama di Wisma NTB Kairo!',
      anecdoteOrTip: 'Ceritakan kisah keakraban santri NTB saat berkumpul di asrama untuk khataman Qur\'an dan mudzakarah kitab setiap malam Jumat.'
    }
  },
  {
    id: 'slide-10',
    slideNumber: 10,
    category: 'roadshow',
    title: 'Rencana Roadshow Pesantren Sasaran di NTB',
    arabicTitle: 'خطة الجولة التعريفية بالمعاهد الإسلامية بنوسا تنجارا الغربية',
    subtitle: 'Menjangkau Pusat-Pusat Pesantren Unggulan di Pulau Lombok dan Pulau Sumbawa',
    summary: 'Sosialisasi dilaksanakan secara bertahap menyasar pondok-pondok pesantren yang memiliki rekam jejak penguatan bahasa Arab, kajian kitab kuning, dan tahfidzul Qur\'an.',
    bulletPoints: [
      'Lombok Timur: Ponpes NWDI Pancor, Ponpes Syaikh Zainuddin NW Anjani, Ponpes Maraqitta\'limat Mamben, Ponpes As-Sunnah Bagik Nyaka',
      'Lombok Barat: Ponpes Nurul Hakim Kediri, Ponpes Al-Aziziyah Gunungsari, Ponpes Islahuddiny Kediri, Ponpes Darul Qur\'an Bengkel',
      'Kota Mataram & Lombok Tengah: Ponpes Abu Hurairah Mataram, Ponpes Manhalul Ma\'arif Darek, Ponpes Qomarul Huda Bagu',
      'Pulau Sumbawa & Bima: Ponpes Al-Ikhlas Taliwang (KSB), Ponpes Modern Internasional Dea Malela (Sumbawa), Ponpes Al-Madinah (Bima)'
    ],
    cards: [
      {
        title: 'Format Kunjungan Sosialisasi',
        tag: 'Agenda 2-3 Jam',
        description: '1. Pemaparan Slide & Motivasi Santri; 2. Simulasi Kuis Tes Seleksi & Bahasa Arab; 3. Bincang Khusus Bersama Asatidz & Bagian Kesiswaan.',
      },
      {
        title: 'Output Konkret untuk Pesantren',
        tag: 'Dampak Nyata',
        description: 'Pembentukan "Azhar Club / Halaqah Al-Azhar" di ma\'had untuk pembinaan intensif hafalan dan tryout soal Kemenag berkala.',
      },
      {
        title: 'Pendampingan Berkas & Ijazah',
        tag: 'Fasilitasi OIAA',
        description: 'Bimbingan proses validasi ijazah pesantren, penerjemahan tersumpah, dan pendaftaran kolektif ke portal Kemenag / PUSIBA.',
      }
    ],
    speakerNotes: {
      durationMinutes: 4,
      talkingPoints: [
        'Jika sedang presentasi di pesantren tertentu, sesuaikan slide ini dengan menyebut: "Hari ini kami hadir di tengah keluarga besar [Nama Pesantren], sebuah kehormatan luar biasa!"',
        'Tawarkan program tindak lanjut ke pihak pesantren berupa kelas dauroh bahasa Arab khusus atau pengiriman modul latihan tes masuk Al-Azhar.',
        'Sampaikan apresiasi kepada kiai, asatidz, dan masyayikh pesantren atas sambutan hangatnya.'
      ],
      santriEmphasis: 'Pesantren kalian memiliki reputasi hebat di NTB. Kami yakin tahun ini ada santri dari pondok ini yang lulus dan berangkat ke Kairo!',
      anecdoteOrTip: 'Ajak salah satu santri yang paling semangat untuk maju menerima cinderamata / buku panduan Al-Azhar.'
    }
  },
  {
    id: 'slide-11',
    slideNumber: 11,
    category: 'roadmap',
    title: 'Roadmap Persiapan Santri Sejak Kelas X, XI, XII MA',
    arabicTitle: 'خارطة طريق إعداد الطالب الأزهري المتميز',
    subtitle: 'Strategi Bertahap Membangun Kesiapan Akademik, Bahasa, dan Spiritual',
    summary: 'Kelulusan seleksi Al-Azhar bukan hasil keberuntungan semalam, melainkan buah dari persiapan yang terukur dan disiplin sejak tahun pertama di aliyah.',
    bulletPoints: [
      'Kelas X MA / 1 KMI: Fondasi Qawa\'id (Jurumiyah & Kailani), hafalan mufradat 20 kata/hari, pembiasaan menyimak audio bahasa Arab',
      'Kelas XI MA / 2 KMI: Peningkatan ke Mutammimah/Imrithi, pemantapan mutqin hafalan Qur\'an minimal juz 28-30, latihan menulis karangan bahasa Arab pendek (Insya\')',
      'Kelas XII MA Semester Ganjil: Kajian Alfiyah Ibnu Malik, membaca surat kabar Arab (Al-Ahram) dan teks turats gundul, latihan soal TOAFL Kemenag tahun-tahun sebelumnya',
      'Kelas XII MA Semester Genap: Ujian Tryout CBT Kemenag, pembuatan paspor, penyiapan berkas ijazah/akta/transkrip, doa & riyadhah batiniah'
    ],
    steps: [
      {
        number: 'Fase 1',
        title: 'Kelas X: Penguasaan Tata Bahasa & Kosa Kata',
        description: 'Fokus pada pondasi Nahwu Shorof dasar, kelancaran lisan berbahasa fusha sederhana, dan mengunci hafalan minimal 2 juz mutqin.'
      },
      {
        number: 'Fase 2',
        title: 'Kelas XI: Pembiasaan Teks Gundul & Menyimak',
        description: 'Membaca kitab turats tanpa harakat secara mandiri, melatih telinga dengan muhadhoroh masyaikh Mesir, dan memperluas wawasan keislaman moderat.'
      },
      {
        number: 'Fase 3',
        title: 'Kelas XII: Bedah Soal & Ujian Seleksi',
        description: 'Mengikuti simulasi CBT Kemenag, bimbingan wawancara lisan bersama alumni Al-Azhar NTB, dan melengkapi seluruh syarat administratif.'
      }
    ],
    speakerNotes: {
      durationMinutes: 4,
      talkingPoints: [
        'Bagi santri kelas X: "Kalian masih punya waktu 2 tahun penuh, waktu yang sangat ideal untuk mematangkan persiapan!"',
        'Bagi santri kelas XII: "Jangan patah arang! Masih ada waktu beberapa bulan untuk fokus drilling soal dan memantapkan hafalan juz mutqin."',
        'Kunci utamanya: konsistensi (istiqamah). Lebih baik belajar 30 menit setiap hari daripada 10 jam menjelang tes.'
      ],
      santriEmphasis: 'Ilmu di Al-Azhar itu lautan. Santri yang siap dari sekarang adalah santri yang kelak akan paling cepat menyerap mutiara ilmunya di Kairo!',
      anecdoteOrTip: 'Nasihat Syeikh Azhar: "اطلبوا العلم من المهد إلى اللحد" dan tekad para ulama terdahulu yang merantau ribuan kilometer demi satu hadits.'
    }
  },
  {
    id: 'slide-12',
    slideNumber: 12,
    category: 'closing',
    title: 'Langkah Awal Menuju Kairo & Kontak OIAA NTB',
    arabicTitle: 'ابدأ خطوتك الأولى اليوم: أزهر المستقبل يناديك',
    subtitle: 'Konsultasi, Layanan Informasi, Bimbingan Berkas, dan Sesi Tanya Jawab',
    summary: 'Impian mulia menuntut ilmu ke Al-Azhar Kairo dimulai dari tekad hari ini. Hubungi tim sekretariat OIAA Cabang Nusa Tenggara Barat untuk bimbingan berkelanjutan.',
    bulletPoints: [
      'Sekretariat OIAA Cabang NTB: Pusat Informasi & Pembinaan Calon Mahasiswa Al-Azhar NTB',
      'Website Resmi Seleksi Kemenag: diktis.kemenag.go.id & portal resmi PUSIBA: pusiba.id',
      'Program Terdekat: Tryout Akbar Seleksi Kemenag Se-NTB & Kelas Intensif Bahasa Arab Online/Offline',
      'Konsultasi Mu\'adalah Ijazah Pesantren: Pendampingan legalisasi dan pengajuan penyetaraan ke Kairo'
    ],
    cards: [
      {
        title: 'Ikatan Alumni Al-Azhar (OIAA) NTB',
        tag: 'Pusat Layanan NTB',
        description: 'Mataram & Lombok Timur, NTB. Layanan konsultasi wali santri, bimbingan beasiswa, dan pendampingan santri hingga keberangkatan.',
      },
      {
        title: 'Keluarga Mahasiswa KPMM NTB di Kairo',
        tag: 'Tim Lapangan di Kairo',
        description: 'Distrik 10 (Hayy El-Asher), Madinat Nasr, Kairo, Mesir. Tim penyambutan di Bandara Internasional Kairo dan pendampingan flat tinggal.',
      },
      {
        title: 'Motto Motivasi Santri',
        tag: 'Pesan Masyayikh',
        description: '"من ثبت نبت، ومن صدق وصل" — Siapa yang teguh dan istiqamah akan berbuah, dan siapa yang bersungguh-sungguh dengan jujur akan sampai pada tujuannya!',
      }
    ],
    speakerNotes: {
      durationMinutes: 5,
      talkingPoints: [
        'Ajak seluruh hadirin untuk berdoa bersama memohon keberkahan ilmu dan kemudahan bagi para santri yang berazam ke Al-Azhar.',
        'Buka sesi tanya jawab interaktif dengan santri dan asatidz.',
        'Berikan nomor kontak sekretariat OIAA NTB dan tautan materi presentasi ini agar bisa dipelajari ulang oleh pihak pesantren.'
      ],
      santriEmphasis: 'Semoga kelak saat kalian tawaf di Ka\'bah atau sujud di Masjid Al-Azhar, kalian ingat bahwa langkah besar itu dimulai dari aula pesantren ini hari ini!',
      anecdoteOrTip: 'Tutup dengan pantun khas Sasak/Sumbawa atau doa wasathiyah untuk kemajuan bumi Nusa Tenggara Barat.'
    }
  }
];

export const MOCK_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'Nahwu',
    question: 'Tentukan kedudukan (i\'rab) kata yang digarisbawahi dalam kalimat berikut: "يَسْعَى الطَّالِبُ إِلَى كَسْبِ <u>العِلْمِ</u> نَافِعاً"',
    arabicText: 'يَسْعَى الطَّالِبُ إِلَى كَسْبِ العِلْمِ نَافِعاً',
    options: [
      'Maf\'ul Bih Manshub',
      'Mudhaf Ilaih Majrur bil Kasrah',
      'Na\'at Majrur',
      'Fa\'il Marfu\''
    ],
    correctIndex: 1,
    explanation: 'Kata "العِلْمِ" terletak setelah isim nakirah "كَسْبِ" yang disandarkan kepadanya, sehingga kedudukannya adalah Mudhaf Ilaih yang selalu Majrur (dengan tanda kasrah dzahirah).'
  },
  {
    id: 2,
    category: 'Shorof',
    question: 'Apa wazan (timbangan) dari fi\'il "اِسْتَغْفَرَ" dan apa makna tambahan huruf hamzah, sin, dan ta\' (است) pada fi\'il tersebut?',
    arabicText: 'اِسْتَغْفَرَ - يَسْتَغْفِرُ - اِسْتِغْفَاراً',
    options: [
      'Wazan If\'alla bermakna Mubalaghah',
      'Wazan Istaf\'ala bermakna Thalab (memohon/meminta)',
      'Wazan Tafa\'ala bermakna Takalluf',
      'Wazan Fâ\'ala bermakna Musyarakah'
    ],
    correctIndex: 1,
    explanation: 'Wazan "اِسْتَفْعَلَ" dengan tambahan Alif, Sin, dan Ta\' (است) di awal umumnya berfaedah li at-Thalab (للطَّلَبِ), yakni memohon sesuatu; istaghfara artinya memohon ampunan (thalabul maghfirah).'
  },
  {
    id: 3,
    category: 'Fahmul Maqru',
    question: 'Apa makna ungkapan "الوَسَطِيَّةُ الإِسْلَامِيَّةُ" (Wasathiyatul Islam) menurut manhaj Al-Azhar Asy-Syarif?',
    arabicText: 'الوَسَطِيَّةُ: العَدْلُ وَالخَيْرِيَّةُ بَيْنَ الإِفْرَاطِ وَالتَّفْرِيطِ',
    options: [
      'Mengabaikan hukum syariat demi mengikuti budaya barat',
      'Sikap adil, bijak, dan proporsional di antara ekstremisme berlebih (ghuluw/ifrath) dan peremehan hukum (tafrith)',
      'Hanya memilih pendapat yang paling mudah tanpa dalil',
      'Mencampuradukkan semua akidah agama menjadi satu'
    ],
    correctIndex: 1,
    explanation: 'Wasathiyah Al-Azhar merujuk pada tafsir "وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطاً" yakni sikap adil, tegak lurus, menolak terorisme/ekstremisme sekaligus menolak sekularisme liberal yang merusak syariat.'
  },
  {
    id: 4,
    category: 'Tahfidz',
    question: 'Lanjutkan ayat berikut: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ ..."',
    arabicText: 'يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ ...',
    options: [
      'دَرَجَاتٍ وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ (Al-Mujadilah: 11)',
      'أَجْراً عَظِيماً وَكَانَ اللَّهُ غَفُوراً رَّحِيماً',
      'فِي جَنَّاتِ النَّعِيمِ خَالِدِينَ فِيهَا',
      'نُوراً يَمْشُونَ بِهِ فِي النَّاسِ'
    ],
    correctIndex: 0,
    explanation: 'Kelanjutan ayat QS. Al-Mujadilah ayat 11 adalah: "...دَرَجَاتٍ وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ", dalil agung kemuliaan derajat para penuntut ilmu syar\'i.'
  },
  {
    id: 5,
    category: 'Wawasan Wasathiyah',
    question: 'Siapakah pimpinan tertinggi Al-Azhar yang bergelar Grand Sheikh of Al-Azhar (Syaikhul Azhar) saat ini?',
    arabicText: 'الإمام الأكبر شيخ الأزهر الشريف',
    options: [
      'Prof. Dr. Ahmad Ath-Thayyib',
      'Prof. Dr. Ali Jum\'ah',
      'Prof. Dr. Syauqi Allam',
      'Dr. Muhammad Sayyid Thanthawi'
    ],
    correctIndex: 0,
    explanation: 'Pimpinan tertinggi Al-Azhar saat ini adalah Al-Imam Al-Akbar Prof. Dr. Ahmad Ath-Thayyib, tokoh perdamaian dunia dan penggagas Dokumen Persaudaraan Manusia (Human Fraternity).'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Ijazah & Muadalah',
    question: 'Apakah santri dari pesantren salaf (non-formal / tanpa ijazah negeri) bisa mendaftar ke Al-Azhar?',
    answer: 'Bisa! Ada dua opsi: (1) Mengikuti program Paket C (Ijazah Kesetaraan resmi pemerintah) yang sudah diakui dan dilegalisasi Kemenag & Kemendikbud, atau (2) Jika pondok pesantren salaf tersebut sudah memiliki sertifikat Mu\'adalah resmi yang diterbitkan langsung oleh Masyikhatul Azhar Kairo, maka santri dapat langsung mendaftar menggunakan ijazah pondoknya.',
    sourceNote: 'Regulasi Majelis A\'la Al-Azhar & Diktis Kemenag RI'
  },
  {
    id: 'faq-2',
    category: 'Santriwati',
    question: 'Bagaimana keamanan, asrama, dan perkuliahan untuk santriwati (mahasiswi putri) di Kairo?',
    answer: 'Sangat aman dan terhormat. Di Al-Azhar, kampus Banat (Putri) dan Banin (Putra) terpisah secara total dari jenjang gedung kuliah, perpustakaan, hingga gerbang masuk. Mahasiswi putri yang tinggal di luar asrama ditempatkan di flat khusus putri yang dijaga bawwab (keamanan apartemen) dan selalu didampingi oleh divisi keputrian OIAA serta Wihdah (organisasi mahasiswi Indonesia di Kairo).',
    sourceNote: 'Divisi Keputrian OIAA & KPMM NTB'
  },
  {
    id: 'faq-3',
    category: 'Biaya & Beasiswa',
    question: 'Berapa total dana awal yang harus disiapkan seorang santri sebelum terbang ke Kairo?',
    answer: 'Untuk jalur non-beasiswa resmi: Dana awal sekitar Rp 25.000.000 – Rp 35.000.000 (mencakup tiket pesawat one-way Kairo ~Rp 9-12 juta, paspor, medical check-up & vaksin, legalisasi Kemenlu/Kemenkumham/Kedubes Mesir, visa pelajar, kursus level bahasa di PUSIBA, serta deposit sewa flat 2-3 bulan pertama). Setelah tiba di Mesir, biaya hidup rutin sangat terjangkau yakni Rp 1 – 1,5 juta/bulan.',
    sourceNote: 'Kalkulasi Rata-Rata Angkatan Terkini'
  },
  {
    id: 'faq-4',
    category: 'Bahasa Arab',
    question: 'Jika kemampuan bahasa Arab fusha santri belum lancar berbicara, apakah boleh tetap mendaftar?',
    answer: 'Sangat boleh! Di situlah fungsi Markaz Lughah (Pusat Bahasa) PUSIBA. Semua santri akan diuji penempatan level (Tahdid Mustawa). Jika masih pemula, santri akan dibimbing secara berjenjang dari level Mubtadi\' hingga Mutamayyiz oleh pengajar asli (native speaker) dari Mesir. Yang terpenting adalah kemauan belajar dan pondasi nahwu shorof.',
    sourceNote: 'Kurikulum Markaz Tathwir Al-Azhar'
  },
  {
    id: 'faq-5',
    category: 'Kehidupan Mesir',
    question: 'Apakah santri di Kairo bisa sambil bekerja sampingan (part-time)?',
    answer: 'Visa mahasiswa Al-Azhar adalah visa studi resmi yang tidak mengizinkan bekerja formal di perusahaan Mesir. Namun, mahasiswa Indonesia sering mengisi waktu luang dengan menjadi muthawwif haji/umrah musiman, membuka usaha katering makanan Indonesia untuk sesama mahasiswa, penerjemah buku turats, atau mengajar les privat Al-Qur\'an secara online.',
    sourceNote: 'Panduan Konsuler KBRI Kairo'
  }
];
