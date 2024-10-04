/* eslint-disable no-unused-vars */
'use client'

import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

// Mock data for events
const mockEvents = [
  {
    id: 1,
    title: 'Summer Music Festival',
    start: new Date(2023, 5, 15),
    end: new Date(2023, 5, 17),
    category: 'Music',
    ticketType: 'Paid',
    price: 50,
    image: 'https://api.mdnd.in/public/images/event_images/event_photo_1726132043431.jpeg',
    description: 'A three-day music extravaganza featuring top artists from around the world.',
  },
  {
    id: 2,
    title: 'Art Exhibition',
    start: new Date(2023, 5, 20),
    end: new Date(2023, 5, 20),
    category: 'Art',
    ticketType: 'Free',
    price: 0,
    image: 'https://api.mdnd.in/public/images/event_images/event_photo_1726037664476.jpeg',
    description: 'A three-day music extravaganza featuring top artists from around the world.',
  },
  {
    id: 3,
    title: 'Theater Performance',
    start: new Date(2023, 5, 25),
    end: new Date(2023, 5, 25),
    category: 'Theater',
    ticketType: 'Paid',
    price: 30,
    image: 'https://api.mdnd.in/public/images/event_images/event_photo_1726218008170.jpeg',
    description: 'A three-day music extravaganza featuring top artists from around the world.'},
  {
    id: 4,
    title: 'Summer Music Festival',
    start: new Date(2024, 8, 12),
    end: new Date(2024, 8, 12),
    category: 'Music',
    ticketType: 'Paid',
    price: 50,
    image: 'https://www.musicacademymadras.in/wp-content/uploads/2024/07/02-Vyasar5padi-Kothandaraman--scaled.jpg',
    description: 'A three-day music extravaganza featuring top artists from around the world.',
  },
  {
    id: 5,
    title: 'Summer Music Festival',
    start: new Date(2024, 8, 13),
    end: new Date(2023, 8, 13),
    category: 'Music',
    ticketType: 'Paid',
    price: 50,
    image: 'https://api.mdnd.in/public/images/event_images/event_photo_1726120958168.jpeg',
    description: 'A three-day music extravaganza featuring top artists from around the world.',
  },
  {
    id: 6,
    title: 'Summer Music Festival',
    start: new Date(2024, 8, 14),
    end: new Date(2024, 8, 17),
    category: 'Music',
    ticketType: 'Paid',
    price: 50,
    image: 'https://www.musicacademymadras.in/wp-content/uploads/2024/07/04-PrinceRama-Varma-scaled.jpg0',
    description: 'A three-day music extravaganza featuring top artists from around the world.',
  },
];

export default function Venue() {
  const [events, setEvents] = useState(mockEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [filters, setFilters] = useState({
    category: 'All',
    ticketType: 'All',
    date: null,
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDateEvents, setShowDateEvents] = useState(false);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  const closeEventModal = () => {
    setShowEventModal(false);
    setSelectedEvent(null);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const filteredEvents = events.filter(event => {
    return (
      (filters.category === 'All' || event.category === filters.category) &&
      (filters.ticketType === 'All' || event.ticketType === filters.ticketType) &&
      (!filters.date || moment(event.start).isSame(filters.date, 'day'))
    );
  });

  const handleSelectSlot = (slotInfo) => {
    const clickedDate = slotInfo.start;
    setSelectedDate(clickedDate);
    setFilters(prev => ({ ...prev, date: clickedDate }));
    setShowDateEvents(true);
  };

  const closeDateEvents = () => {
    setShowDateEvents(false);
    setSelectedDate(null);
    setFilters(prev => ({ ...prev, date: null }));
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-br from-purple-100 to-pink-100 min-h-screen   dark:bg-slate-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-6 text-center text-purple-800">Lyrica Event Venue</h1>

      {/* Filters */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">Filters</h2>
        <div className="flex flex-wrap gap-4">
          <select
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="p-2 border rounded-md  dark:bg-slate-900 dark:text-white"
          >
            <option value="All">All Categories</option>
            <option value="Music">Music</option>
            <option value="Art">Art</option>
            <option value="Theater">Theater</option>
          </select>
          <select
            onChange={(e) => handleFilterChange('ticketType', e.target.value)}
            className="p-2 border rounded-md  dark:bg-slate-900 dark:text-white"
          >
            <option value="All">All Ticket Types</option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
          </select>
          <input
            type="date"
            onChange={(e) => handleFilterChange('date', e.target.value ? new Date(e.target.value) : null)}
            className="p-2 border rounded-md"
          />
        </div>
      </div>

      {/* Calendar */}
      <div className="mb-8 ">
        <Calendar
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable={true}
          className="bg-white shadow-lg rounded-lg p-4  dark:bg-sky-50 dark:text-black "
        />
      </div>

      {/* Selected Date Events */}
      {showDateEvents && selectedDate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4 text-purple-700  dark:bg-slate-900 dark:text-white">
              Events on {moment(selectedDate).format('MMMM D, YYYY')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {filteredEvents
                .filter(event => moment(event.start).isSame(selectedDate, 'day'))
                .map(event => (
                  <div key={event.id} className="relative overflow-hidden rounded-lg shadow-lg  dark:bg-sky-50 dark:text-black">
                    <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg z-0"></div>
                    <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                    <div className="p-4 relative z-10">
                      <h3 className="text-xl font-bold mb-2 text-purple-800">{event.title}</h3>
                      <p className="text-sm text-gray-600 mb-2 dark:bg-sky-50 dark:text-black">{moment(event.start).format('MMMM D, YYYY')}</p>
                      <p className="text-sm font-semibold mb-2">{event.category}</p>
                      <p className="text-sm mb-4">{event.ticketType} - {event.ticketType === 'Free' ? 'No charge' : `$${event.price}`}</p>
                      <p className="text-sm mb-4 line-clamp-2">{event.description}</p>
                      <button
                        onClick={() => handleSelectEvent(event)}
                        className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <button
              onClick={closeDateEvents}
              className="mt-6 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Upcoming Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <div key={event.id} className="relative overflow-hidden rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-white bg-opacity-20  "></div>
            <img src={event.image} alt={event.title} className="object-fill h-50 w-full" />
            <div className="p-4 relative z-10">
              <h3 className="text-xl font-bold mb-2 text-purple-800">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{moment(event.start).format('MMMM D, YYYY')}</p>
              <p className="text-sm font-semibold mb-2">{event.category}</p>
              <p className="text-sm mb-4">{event.ticketType} - {event.ticketType === 'Free' ? 'No charge' : `$${event.price}`}</p>
              <button
                onClick={() => handleSelectEvent(event)}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Event Modal */}
      {showEventModal && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">{selectedEvent.title}</h2>
            <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-48 object-cover mb-4 rounded-md" />
            <p className="mb-2"><strong>Date:</strong> {moment(selectedEvent.start).format('MMMM D, YYYY')}</p>
            <p className="mb-2"><strong>Category:</strong> {selectedEvent.category}</p>
            <p className="mb-2"><strong>Ticket Type:</strong> {selectedEvent.ticketType}</p>
            <p className="mb-4"><strong>Price:</strong> {selectedEvent.ticketType === 'Free' ? 'No charge' : `$${selectedEvent.price}`}</p>
            <p className="mb-4"><strong>Description:</strong> {selectedEvent.description}</p>
            <div className="flex justify-between">
              <button
                onClick={closeEventModal}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert('Registration feature coming soon!');
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}