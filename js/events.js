// js/events.js

const events = [
    {
        id: "al-faqih-al-muqaddam", // Unique ID for this event
        title: "Al Faqih Al Muqaddam",
        subtitle: "perintis madrasah Hadramaut",
        description: "Kesan & jasa madrasah Hadramaut merangkumi lebih sepertiga dunia, khususnya di bumi Nusantara ini bermula dari sosok seorang yang istimewa. Mari hayati bersama.",
        date: "25 Jun 2025",
        dateTimeISO: "2025-06-25T20:00:00", // ISO 8601 format for date/time
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
        isPastEvent: false // Set to true if the event date is in the past
    },
    {
        id: "tokoh-ulama-muharram-1447h", // Unique ID for this event
        title: "Majlis Memperingati Tokoh Ulama' & Sambutan Awal Muharram 1447H",
        subtitle: "Bersama Habaib, Masyaikh, Asatizah & Jemaah",
        description: "Muslimin & muslimat dijemput hadir.", // Taken from the poster's "Muslimin & muslimat dijemput hadir"
        date: "26 Jun 2025",
        dateTimeISO: "2025-06-26T18:00:00", // ISO 8601 format
        time: "6.00pm, Khamis",
        location: {
            name: "Surau Al-Abrar (Tawfiq)",
            address: "2832 Jln Sg Penchala, Kg Sg Penchala, KL"
        },
        speakers: [
            { role: "Habaib", name: "Habaib" },
            { role: "Mashaikh", name: "Mashaikh" },
            { role: "Asatizah", name: "Asatizah" }
        ],
        poster: "images/telegram-cloud-photo-size-5-6257766556159297476-y.jpg",
        isPastEvent: false
    }
    // Add more events here as new posters come in
];

// Helper function to check if an event is in the past
function isEventPast(eventDateISO) {
    const eventDateTime = new Date(eventDateISO);
    const now = new Date();
    return eventDateTime < now;
}

// Update the isPastEvent status for all events based on current date/time
events.forEach(event => {
    event.isPastEvent = isEventPast(event.dateTimeISO);
});
