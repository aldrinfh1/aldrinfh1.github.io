// --- AREA PENGATURAN TUGAS ---
    // Ubah, tambah, atau hapus tugas Anda di dalam daftar di bawah ini.
    // Format Tanggal: "Bulan Hari, Tahun Jam:Menit:Detik" (Bulan dalam Bahasa Inggris)
               const tasks = [
        {
            title: "Agama Islam :<br> Me-resume kajian",
            description: "<p style=text-align:;><b>5 Oktober 2025, pukul 17.00 WIB.</p>",
            deadline: "Oct 5, 2025 17:00:00"
        },
        {
            title: "B.Indonesia :<br> Mencari 25 kosakata",
            description: "Mencari kosakata yg berhubungan dengan PPKn dan definisikan. <p style=text-align:;><b> 7 Oktober 2025 </p>",
            deadline: "Oct 7, 2025 08:59:59"
        },
        {
            title: "Ilmu Negara :<br> Book Chapter / Artikel",
            description: "Membuat book chapter atau Artikel+jurnal, Makalah+Video.<p style=text-align:;><b> 8 Oktober 2025 </p>",
            deadline: "Oct 8, 2025 08:59:59"
        },
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
                countdownWrapper.innerHTML = `<div class="message overdue-msg">Tugas Selasai!</div>`;
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
                if(days < 3) {
                    card.classList.add('soon');
                }
            }
        });
    }

    // Jalankan fungsi update setiap detik
    setInterval(updateAllCountdowns, 1000);

    // Panggil fungsi sekali saat halaman dimuat
    updateAllCountdowns();
