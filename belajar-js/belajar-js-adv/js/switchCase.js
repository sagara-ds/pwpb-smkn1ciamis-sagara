let hari = "Jumat";
switch (hari) {
    case "Sabtu":
    case "Minggu":
        console.log("Hari libur waktunya istirahat");
        break;
    case "Jumat":
    case "Kamis":
    case "Senin":
    case "Selasa":
    case "Rabu":
        console.log("Hari kerja. tetap semangat");
        break;
    default:
        console.log("hari tidak valid");
}