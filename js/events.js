// js/events.js

const events = [
    {
        id: "al-faqih-al-muqaddam", // Unique ID for this event
        title: "Al Faqih Al Muqaddam",
        subtitle: "perintis madrasah Hadramaut",
        description: "Kesan & jasa madrasah Hadramaut merangkumi lebih sepertiga dunia, khususnya di bumi Nusantara ini bermula dari sosok seorang yang istimewa. Mari hayati bersama.",
        date: "25 Jun 2025",
        dateTimeISO: "2025-06-25T20:00:00+08:00", // ISO 8601 format with timezone offset
        time: "8.00pm, Rabu",
        location: {
            name: "Surau Al-Abrar (Tawfiq)",
            address: "2832 Jln Sg Penchala, Kg Sg Penchala, KL"
        },
        speakers: [
            { role: "Moderator", name: "Ustaz Haji Azian Bin Man" },
            { role: "Panel 1", name: "Habib Ali Zaenal Abidin Al Hamid" },
            { role: "Panel 2", name: "Ustaz Muhammad Nasrullah" }
        ],
        poster: "images/telegram-cloud-photo-size-5-6257766556159297475-y.jpg",
        isPastEvent: false // This will be updated by the script below
    },
    {
        id: "tokoh-ulama-muharram-1447h", // Unique ID for this event
        title: "Majlis Memperingati Tokoh Ulama' & Sambutan Awal Muharram 1447H",
        subtitle: "Bersama Habaib, Masyaikh, Asatizah & Jemaah",
        description: "Muslimin & muslimat dijemput hadir.",
        date: "26 Jun 2025",
        dateTimeISO: "2025-06-26T18:00:00+08:00", // ISO 8601 format with timezone offset
        time: "6.00pm, Khamis",
        location: {
            name: "Surau Al-Abrar (Tawfiq)",
            address: "2832 Jln Sg Penchala, Kg Sg Penchala, KL"
        },
        speakers: [
            { role: "Al Faqih Al Muqaddam", name: "Muhammad Bin Ali Ba'Alawi" },
            { role: "As Syeikh", name: "Abu Bakar Bin Salim" },
            { role: "Al Habib", name: "Muhammad Bin Salim Benhafidz" },
            { role: "As Syeikh", name: "Muhammad Yasin Al-Fadani" }
        ],
        poster: "images/telegram-cloud-photo-size-5-6257766556159297476-y.jpg",
        isPastEvent: false // This will be updated by the script below
    }
];

// Helper function to check if an event is in the past
function isEventPast(eventDateISO) {
    const eventDateTime = new Date(eventDateISO);
    const now = new Date(); // Current date and time
    return eventDateTime < now;
}

// Update the isPastEvent status for all events based on current date/time
// Run this once when the script loads
events.forEach(event => {
    event.isPastEvent = isEventPast(event.dateTimeISO);
});

// For demonstration, you can log the status:
console.log("Event Status after check (based on current time):", events.map(e => ({ id: e.id, isPast: e.isPastEvent })));
