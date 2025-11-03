// AI NGERI YA.....
// --- AREA PENGATURAN TUGAS ---
    // Ubah, tambah, atau hapus tugas Anda di dalam daftar di bawah ini.
    // Format Tanggal: "Bulan Hari, Tahun Jam:Menit:Detik" (Bulan dalam Bahasa Inggris)
        document.addEventListener('DOMContentLoaded', function(){

               const tasks = [
        {
            title: "Akhir Perkuliahan Ganjil <br><br>",
            description: "Hari terakhir kegiatan perkuliahan semester ganjil.<p style='margin-top:10px;'><b>22 September 2025 - 16 Januari 2026</b></p>",
            deadline: "Jan 16, 2026 23:59:59"
        },
        {
            title: "Pelaksanaan Wisuda ke-59/60",
            description: "Jadwal pelaksanaan wisuda untuk periode 59/60.<p style='margin-top:10px;'><b>25 Oktober 2025</b></p>",
            deadline: "Oct 25, 2025 23:59:59"
        },
        {
            title: "Akhir Ujian Tengah Semester (UTS) Ganjil",
            description: "Periode pelaksanaan Evaluasi/Uji Kompetensi Tengah Semester.<p style='margin-top:10px;'><b>24 - 28 November 2025</b></p>",
            deadline: "Nov 28, 2025 23:59:59"
        },
        {
            title: "Akhir Ujian Akhir Semester (UAS) Ganjil",
            description: "Periode pelaksanaan Evaluasi/Uji Kompetensi Akhir Semester.<p style='margin-top:10px;'><b>19 - 23 Januari 2026</b></p>",
            deadline: "Jan 23, 2026 23:59:59"
        },
        {
            title: "Batas Akhir Input Nilai UAS Ganjil",
            description: "Batas akhir bagi dosen untuk input nilai Uji Kompetensi Akhir Semester. <p style='margin-top:10px;'><b>28 Januari 2026</b></p>",
            deadline: "Jan 28, 2026 23:59:59"
        },
        {
            title: "Terakhir Input Nilai Skripsi Ganjil",
            description: "Batas akhir untuk input nilai Skripsi. <br><br> <p style='margin-top:10px;'><b>3 Februari 2026</b></p>",
            deadline: "Feb 3, 2026 23:59:59"
        },

        // --- PELAPORAN PD DIKTI GANJIL ---
        {
            title: "Akhir Input Mhs Baru, KRS, Dosen (CP_1)",
            description: "Pelaporan PD DIKTI: Batas akhir input Mahasiswa Baru, KRS, Dosen Pengampu.<p style='margin-top:10px;'><b>1 September - 30 Oktober 2025</b></p>",
            deadline: "Oct 30, 2025 23:59:59"
        },
        {
            title: "Akhir Validasi oleh Kaprodi (CP_1)",
            description: "Pelaporan PD DIKTI: Batas akhir validasi data oleh Kaprodi.<p style='margin-top:10px;'><b>1 - 15 Oktober 2025</b></p>",
            deadline: "Oct 15, 2025 23:59:59"
        },
        {
            title: "Akhir Input Nilai Perkuliahan, dll (CP_2)",
            description: "Pelaporan PD DIKTI: Input Nilai Perkuliahan, Aktifitas Mahasiswa, Mhs Keluar.<p style='margin-top:10px;'><b>12 Februari - 30 April 2026</b></p>",
            deadline: "Apr 30, 2026 23:59:59"
        },
        {
            title: "Akhir Validasi oleh Kaprodi (CP_2)",
            description: "Pelaporan PD DIKTI: Batas akhir validasi data oleh Kaprodi (Periode 2).<p style='margin-top:10px;'><b>1 - 15 April 2026</b></p>",
            deadline: "Apr 15, 2026 23:59:59"
        },
        {
            title: "Akhir Revisi dan Sinkronisasi Ganjil",
            description: "Pelaporan PD DIKTI: Batas akhir revisi dan sinkronisasi data.<p style='margin-top:10px;'><b>16 - 30 April 2026</b></p>",
            deadline: "Apr 30, 2026 23:59:59"
        },

        // --- SEMESTER GENAP 2026 ---
        {
            title: "Akhir Pengambilan KHS & Pemrograman Genap",
            description: "Batas akhir pengambilan KHS, Perwalian, dan Pemrograman KRS.<p style='margin-top:10px;'><b>9 - 16 Februari 2026</b></p>",
            deadline: "Feb 16, 2026 23:59:59"
        },
        {
            title: "Batas Akhir SK Kelulusan & Yudisium",
            description: "Batas akhir untuk calon wisudawan. <br><br><p style='margin-top:10px;'><b>6 Februari 2026</b></p>",
            deadline: "Feb 6, 2026 23:59:59"
        },
        {
            title: "Akhir Perubahan Pemrograman Genap",
            description: "Batas akhir modifikasi mata kuliah semester genap.<p style='margin-top:10px;'><b>18 - 19 Februari 2026</b></p>",
            deadline: "Feb 19, 2026 23:59:59"
        },
        {
            title: "Laporan Data Wisuda Genap",
            description: "Pelaporan data wisuda ke LLDIKTI 7. <br><br><p style='margin-top:10px;'><b>27 Februari 2026</b></p>",
            deadline: "Feb 27, 2026 23:59:59"
        },
        {
            title: "Pendaftaran Wisuda Genap",
            description: "Periode pendaftaran wisuda semester genap. <br><br><p style='margin-top:10px;'><b>11 - 21 Februari 2026</b></p>",
            deadline: "Feb 21, 2026 23:59:59",
            link: "https://example.com/pendaftaran-wisuda"
        },
        {
            title: "Akhir Cuti Akademik Genap",
            description: "Batas akhir pengajuan cuti akademik semester genap.<p style='margin-top:10px;'><b>2 Februari - 16 Maret 2026</b></p>",
            deadline: "Mar 16, 2026 23:59:59"
        },
        {
            title: "Akhir Perkuliahan Genap",
            description: "Hari terakhir kegiatan perkuliahan untuk semester genap.<p style='margin-top:10px;'><b>2 Maret - 26 Juni 2026</b></p>",
            deadline: "Jun 26, 2026 23:59:59"
        },
        {
            title: "Pelaksanaan KKN Reguler",
            description: "Jadwal pelaksanaan Kuliah Kerja Nyata (KKN) Reguler.<p style='margin-top:10px;'><b>1 - 30 Agustus 2026</b></p>",
            deadline: "Aug 30, 2026 23:59:59"
        },
        {
            title: "KKN Muhammadiyah 'Aisyiyah Nasional",
            description: "Jadwal pelaksanaan KKN MAs Nasional.<br><br> <p style='margin-top:10px;'><b>1 - 30 Agustus 2026</b></p>",
            deadline: "Aug 30, 2026 23:59:59"
        },
        {
            title: "KKN Internasional",
            description: "Jadwal pelaksanaan KKN Internasional. <br><br> <p style='margin-top:10px;'><b>1 - 30 Agustus 2026</b></p>",
            deadline: "Aug 30, 2026 23:59:59"
        },
        {
            title: "Pelaksanaan Wisuda Genap",
            description: "Jadwal pelaksanaan wisuda semester genap. <br><br><p style='margin-top:10px;'><b>25 April 2026</b></p>",
            deadline: "Apr 25, 2026 23:59:59"
        },
        {
            title: "Akhir Ujian Tengah Semester (UTS) Genap",
            description: "Periode pelaksanaan Evaluasi/Uji Kompetensi Tengah Semester.<p style='margin-top:10px;'><b>4 - 8 Mei 2026</b></p>",
            deadline: "May 8, 2026 23:59:59"
        },
        {
            title: "Akhir Ujian Akhir Semester (UAS) Genap ",
            description: "Periode pelaksanaan Evaluasi/Uji Kompetensi Akhir Semester.<p style='margin-top:10px;'><b>6 - 10 Juli 2026</b></p>",
            deadline: "Jul 10, 2026 23:59:59"
        },
        {
            title: "Batas Akhir Input Nilai UAS Genap ",
            description: "Batas akhir bagi dosen untuk input nilai Uji Kompetensi Akhir Semester.<p style='margin-top:10px;'><b>15 Juli 2026</b></p>",
            deadline: "Jul 15, 2026 23:59:59"
        },
        {
            title: "Terakhir Input Nilai Skripsi Genap",
            description: "Batas akhir untuk input nilai Skripsi.<br><br><p style='margin-top:10px;'><b>31 Juli 2026</b></p>",
            deadline: "Jul 31, 2026 23:59:59"
        }

    ];

    const container = document.querySelector('.task-container');

    // Membuat HTML untuk setiap tugas
    tasks.forEach((task, index) => {
        const card = document.createElement('div');
        card.className = 'task-card';
        card.id = `task-${index}`;

        let descriptionHTML = task.description ? `<p>${task.description}</p>` : '';

        card.innerHTML = `
            <h2>${task.title}</h2>
            ${descriptionHTML}
            <div class="countdown-wrapper">
                <div class="countdown" id="countdown-${index}">
                    <div class="time-box" id="hari">
                        <div class="number" data-unit="days">0</div>
                        <div class="label">Hari</div>
                    </div>
                    <div class="time-box" id="jam">
                        <div class="number" data-unit="hours">0</div>
                        <div class="label">Jam</div>
                    </div>
                    <div class="time-box" id="menit">
                        <div class="number" data-unit="minutes">0</div>
                        <div class="label">Menit</div>
                    </div>
                    <div class="time-box" id="detik">
                        <div class="number" data-unit="seconds">0</div>
                        <div class="label">Detik</div>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // Fungsi utama untuk mengupdate semua countdown
    function updateAllCountdowns() {
        const now = new Date().getTime();

        tasks.forEach((task, index) => {
            const countDownDate = new Date(task.deadline).getTime();
            const distance = countDownDate - now;

            const card = document.getElementById(`task-${index}`);
            const countdownWrapper = card.querySelector('.countdown-wrapper');

            if (distance < 0) {
                // Jika waktu sudah habis
                countdownWrapper.innerHTML = `<div class="message overdue-msg">Selasai!</div>`;
                card.classList.add('overdue');
            } else {
                // Jika masih ada waktu
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                const countdownEl = document.getElementById(`countdown-${index}`);
                countdownEl.querySelector('[data-unit="days"]').innerText = days;
                countdownEl.querySelector('[data-unit="hours"]').innerText = hours;
                countdownEl.querySelector('[data-unit="minutes"]').innerText = minutes;
                countdownEl.querySelector('[data-unit="seconds"]').innerText = seconds;

                // Tandai jika deadline sudah dekat (kurang dari 3 hari)
                if(days < 30) {
                    card.classList.add('soon');
                }
            }
        });
    }

    // Jalankan fungsi update setiap detik
    setInterval(updateAllCountdowns, 1000);

    // Panggil fungsi sekali saat halaman dimuat
    updateAllCountdowns();
});
