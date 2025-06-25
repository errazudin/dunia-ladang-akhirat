// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const eventsContainer = document.getElementById('events-container');
    const pastEventsContainer = document.getElementById('past-events-container');

    function renderEvents() {
        if (!events || events.length === 0) {
            eventsContainer.innerHTML = '<p>No upcoming events scheduled at the moment. Please check back later!</p>';
            pastEventsContainer.innerHTML = '<p>No past events to display yet.</p>';
            return;
        }

        const upcomingEvents = events.filter(event => !event.isPastEvent);
        const pastEvents = events.filter(event => event.isPastEvent).sort((a, b) => new Date(b.dateTimeISO) - new Date(a.dateTimeISO)); // Sort past events by most recent first

        // Render Upcoming Events
        if (upcomingEvents.length > 0) {
            eventsContainer.innerHTML = ''; // Clear loading text
            upcomingEvents.forEach(event => {
                const eventCard = document.createElement('a');
                eventCard.href = `event-detail.html?id=${event.id}`; // Link to the detail page with ID
                eventCard.classList.add('event-card');
                eventCard.innerHTML = `
                    <h4>${event.title}</h4>
                    <p><span class="icon">🗓️</span> ${event.date}</p>
                    <p><span class="icon">⏰</span> ${event.time}</p>
                    <p><span class="icon">📍</span> ${event.location.name}</p>
                    <span class="card-link">View Details</span>
                `;
                eventsContainer.appendChild(eventCard);
            });
        } else {
            eventsContainer.innerHTML = '<p>No upcoming events scheduled at the moment. Please check back later!</p>';
        }

        // Render Past Events
        if (pastEvents.length > 0) {
            pastEventsContainer.innerHTML = ''; // Clear loading text
            pastEvents.forEach(event => {
                const eventCard = document.createElement('a');
                eventCard.href = `event-detail.html?id=${event.id}`; // Link to the detail page with ID
                eventCard.classList.add('event-card');
                eventCard.innerHTML = `
                    <h4>${event.title}</h4>
                    <p><span class="icon">🗓️</span> ${event.date}</p>
                    <p><span class="icon">⏰</span> ${event.time}</p>
                    <p><span class="icon">📍</span> ${event.location.name}</p>
                    <span class="card-link">View Details</span>
                `;
                pastEventsContainer.appendChild(eventCard);
            });
        } else {
            pastEventsContainer.innerHTML = '<p>No past events to display yet.</p>';
        }
    }

    renderEvents();
});

// Note: The event-detail.html also includes a small script to load its specific event data.
// This main.js primarily handles the index.html page.
