// script.js - shared functionality for all pages

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.main-nav');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav-open');
            const icon = mobileToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Quote button alert
    const quoteBtn = document.getElementById('quoteBtn');
    if (quoteBtn) {
        quoteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert("Our team will reach out with moving boxes pricing within 24 hours. Thank you for choosing BoxCycle!");
        });
    }

    // Commercial contact button
    const commercialContact = document.getElementById('commercialContactBtn');
    if (commercialContact) {
        commercialContact.addEventListener('click', function(e) {
            e.preventDefault();
            alert("A commercial moving specialist will contact you within one business day.");
        });
    }

    // Reserve kit buttons (residential page)
    const reserveBtns = document.querySelectorAll('.reserve-btn');
    reserveBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert("Thank you for your interest! Our team will help you reserve the moving box kit.");
        });
    });

    // Initialize map only if the element exists (home page)
    const mapElement = document.getElementById('location-map');
    if (mapElement && typeof L !== 'undefined') {
        // Small delay to ensure container is ready
        setTimeout(() => {
            if (!window.mapInitialized) {
                const map = L.map('location-map').setView([39.8283, -98.5795], 4);
                L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> & CartoDB',
                    subdomains: 'abcd',
                    maxZoom: 8,
                    minZoom: 3
                }).addTo(map);
                
                const locations = [
                    { coords: [37.7749, -122.4194], name: 'San Francisco' },
                    { coords: [34.0522, -118.2437], name: 'Los Angeles' },
                    { coords: [47.6062, -122.3321], name: 'Seattle' },
                    { coords: [41.8781, -87.6298], name: 'Chicago' },
                    { coords: [40.7128, -74.0060], name: 'New York' }
                ];
                locations.forEach(loc => {
                    L.marker(loc.coords).addTo(map)
                        .bindPopup(`<b>BoxCycle Hub</b><br>${loc.name}<br>Moving boxes delivery available`);
                });
                window.mapInitialized = true;
                setTimeout(() => map.invalidateSize(), 200);
            }
        }, 300);
    }
});