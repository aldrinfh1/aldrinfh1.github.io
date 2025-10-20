// AI NGERI YA.....
// --- AREA PENGATURAN TUGAS ---
    // Ubah, tambah, atau hapus tugas Anda di dalam daftar di bawah ini.
    // Format Tanggal: "Bulan Hari, Tahun Jam:Menit:Detik" (Bulan dalam Bahasa Inggris)
               document.addEventListener('DOMContentLoaded', function(){

               const tasks = [
            
        {
            title: "Akhir Pembayaran Daftar Ulang",
            description: "Batas akhir pembayaran daftar ulang/registrasi semester ganjil.<p style='margin-top:10px;'><b>4 - 16 Agustus 2025</b></p>",
            deadline: "Aug 16, 2025 23:59:59",
            link: ""
        },
        {
            title: "Akhir Pengambilan KHS & Pemrograman",
            description: "Batas akhir pengambilan KHS, Perwalian, dan Pemrograman KRS.<p style='margin-top:10px;'><b>12 - 18 Agustus 2025</b></p>",
            deadline: "Aug 18, 2025 23:59:59",
            link: ""
        },
        {
            title: "Batas Akhir SK Kelulusan & Yudisium",
            description: "Batas akhir untuk Calon Wisudawan ke-59/60.<p style='margin-top:10px;'><b>18 Agustus 2025</b></p>",
            deadline: "Aug 18, 2025 23:59:59",
            link: ""
        },
        {
            title: "Akhir Perubahan Pemrograman (Modifikasi)",
            description: "Batas akhir modifikasi mata kuliah semester ganjil.<p style='margin-top:10px;'><b>19 - 22 Agustus 2025</b></p>",
            deadline: "Aug 22, 2025 23:59:59",
            link: ""
        },
        {
            title: "Terakhir Daftar Ulang Mahasiswa Baru",
            description: "Batas akhir daftar ulang untuk mahasiswa baru.<p style='margin-top:10px;'><b>18 September 2025</b></p>",
            deadline: "Sep 18, 2025 23:59:59",
            link: ""
        },
        {
            title: "Laporan Data Wisuda (LLDIKTI 7)",
            description: "Pelaporan data wisuda ke LLDIKTI 7.<p style='margin-top:10px;'><b>9 September 2025</b></p>",
            deadline: "Sep 9, 2025 23:59:59",
            link: ""
        },
        {
            title: "Pendaftaran Wisuda ke-59/60",
            description: "Periode pendaftaran untuk wisuda ke-59/60.<p style='margin-top:10px;'><b>21 Agustus - 6 September 2025</b></p>",
            deadline: "Sep 6, 2025 23:59:59",
            link: "https://example.com/pendaftaran-wisuda"
        },
        {
            title: "Akhir Cuti Akademik",
            description: "Batas akhir pengajuan cuti akademik semester ganjil.<p style='margin-top:10px;'><b>4 Agustus - 18 September 2025</b></p>",
            deadline: "Sep 18, 2025 23:59:59",
            link: ""
        },
        {
            title: "Terakhir Pemrograman Mahasiswa Baru",
            description: "Batas akhir pemrograman KRS untuk mahasiswa baru.<p style='margin-top:10px;'><b>19 September 2025</b></p>",
            deadline: "Sep 19, 2025 23:59:59",
            link: ""
        },
        {
            title: "Mastamaru",
            description: "Masa Ta'aruf Mahasiswa Baru.<p style='margin-top:10px;'><b>8 - 13 September 2025</b></p>",
            deadline: "Sep 13, 2025 23:59:59",
            link: ""
        },
        {
            title: "Setting Jadwal Kuliah",
            description: "Periode pengaturan jadwal kuliah.<p style='margin-top:10px;'><b>18 - 20 September 2025</b></p>",
            deadline: "Sep 20, 2025 23:59:59",
            link: ""
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