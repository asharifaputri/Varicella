var bankPopup = {
    cek: {
        badge: "Skrining Awal",
        title: "Cek Gejala Cacar Air",
        html: "<ul class='cute-list'><li><strong>Riwayat Kontak:</strong> Pernah kontak dengan penderita cacar air dalam 10-21 hari terakhir.</li><li><strong>Gejala Awal:</strong> Demam, lemas, dan sakit kepala selama 1-2 hari.</li><li><strong>Ruam Khas:</strong> Bintik merah berubah menjadi lenting berair jernih dan gatal.</li></ul>"
    },
    p3k: {
        badge: "Pertolongan Pertama",
        title: "Perawatan Mandiri di Rumah",
        html: "<ul class='cute-list'><li><strong>Jangan digaruk!</strong> Mencegah infeksi bakteri dan bekas bopeng.</li><li><strong>Mandi air suam-suam kuku</strong> atau kompres dingin untuk meredakan gatal.</li><li><strong>Oleskan losion kalamin</strong> lembut pada bintik dan pakai baju katun longgar.</li></ul>"
    },
    vaksin: {
        badge: "Imunisasi",
        title: "Panduan Vaksinasi Varicella",
        html: "<ul class='cute-list'><li><strong>Anak-anak:</strong> 2 dosis (usia 12-15 bulan dan 4-6 tahun).</li><li><strong>Remaja & Dewasa:</strong> 2 dosis dengan jarak minimal 4-8 minggu.</li></ul>"
    },
    mitos: {
        badge: "Edukasi Klinis",
        title: "Mitos vs Fakta Cacar Air",
        html: "<ul class='cute-list'><li><strong>MITOS:</strong> Dilarang mandi saat cacar.<br><strong>FAKTA:</strong> Mandi air bersih menjaga kulit bebas bakteri.</li><li><strong>MITOS:</strong> Boleh minum aspirin.<br><strong>FAKTA:</strong> Aspirin dilarang karena memicu Sindrom Reye.</li></ul>"
    },
    menular: {
        badge: "Penularan VZV",
        title: "Kapan Cacar Air Menular?",
        html: "<ul class='cute-list'><li><strong>1-2 hari sebelum ruam:</strong> Menular lewat udara saat batuk/bersin.</li><li><strong>Selama lenting berair:</strong> Cairan lenting mengandung virus aktif.</li><li><strong>Aman kembali:</strong> Setelah seluruh lenting kering menjadi keropeng.</li></ul>"
    },
    obat: {
        badge: "Keamanan Obat",
        title: "Obat yang Harus Dihindari",
        html: "<ul class='cute-list'><li><strong>Hindari Aspirin:</strong> Berisiko memicu Sindrom Reye.</li><li><strong>Gunakan Paracetamol</strong> untuk demam dan konsultasikan Acyclovir ke dokter.</li></ul>"
    },
    zoster: {
        badge: "Info Lanjutan",
        title: "Cacar Air & Herpes Zoster",
        html: "<p>Setelah sembuh, virus <strong>Varicella-Zoster</strong> tidur di saraf dan dapat aktif kembali saat imun turun sebagai <strong>Herpes Zoster (Cacar Ular)</strong>.</p>"
    },
    bahaya: {
        badge: "Peringatan Medis",
        title: "Tanda Bahaya Harus ke Dokter!",
        html: "<ul class='cute-list'><li><strong>Lenting di area mata</strong> atau kelopak mata.</li><li><strong>Lenting bernanah,</strong> bengkak, merah meluas, dan demam &gt;39&deg;C.</li></ul>"
    },
    isolasi: {
        badge: "Karantina Mandiri",
        title: "Checklist Isolasi di Rumah",
        html: "<ul class='cute-list'><li><strong>Pisahkan kamar tidur</strong> dengan sirkulasi udara baik.</li><li><strong>Pisahkan handuk dan alat makan</strong> serta potong pendek kuku.</li></ul>"
    }
};

function bukaModal(kunci) {
    var d = bankPopup[kunci];
    var modal = document.getElementById("modalBox");
    if (!d || !modal) {
        alert(d ? d.title : "Info Medis");
        return;
    }
    document.getElementById("mBadge").innerHTML = d.badge;
    document.getElementById("mTitle").innerHTML = d.title;
    document.getElementById("mBody").innerHTML = d.html;
    modal.className = "modal-bg show";
}

function tutupModal() {
    var modal = document.getElementById("modalBox");
    if (modal) {
        modal.className = "modal-bg";
    }
}

function validasiForm(e) {
    if (e) {
        e.preventDefault();
    }
    var nama = document.getElementById("inNama").value.replace(/^\s+|\s+$/g, "");
    var email = document.getElementById("inEmail").value.replace(/^\s+|\s+$/g, "");
    var telp = document.getElementById("inTelp").value.replace(/^\s+|\s+$/g, "");
    var pesan = document.getElementById("inPesan").value.replace(/^\s+|\s+$/g, "");

    document.getElementById("errNama").innerHTML = "";
    document.getElementById("errEmail").innerHTML = "";
    document.getElementById("errTelp").innerHTML = "";
    document.getElementById("errPesan").innerHTML = "";

    var valid = true;
    if (nama.length < 3) {
        document.getElementById("errNama").innerHTML = "Nama lengkap wajib diisi minimal 3 karakter.";
        valid = false;
    }
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        document.getElementById("errEmail").innerHTML = "Masukkan format alamat email yang valid.";
        valid = false;
    }
    if (telp.length < 10 || isNaN(telp)) {
        document.getElementById("errTelp").innerHTML = "Nomor telepon harus berupa angka (10-15 digit).";
        valid = false;
    }
    if (pesan.length < 10) {
        document.getElementById("errPesan").innerHTML = "Pertanyaan atau pesan minimal 10 karakter.";
        valid = false;
    }

    if (valid) {
        bukaModal("cek");
        document.getElementById("mBadge").innerHTML = "Terkirim";
        document.getElementById("mTitle").innerHTML = "Pertanyaan Berhasil Dikirim!";
        document.getElementById("mBody").innerHTML = "<p>Terima kasih <strong>" + nama + "</strong>! Pertanyaan Anda telah divalidasi dan dicatat oleh sistem VaricellaCare.</p>";
        document.getElementById("formKonsul").reset();
    }
    return false;
}
