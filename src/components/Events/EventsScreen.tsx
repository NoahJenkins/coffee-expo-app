// EventsScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const events = [
  { date: '2025-01-01', title: "New Year's Day Brunch", description: 'Celebrate the new year with special brunch offerings.' }, // Wednesday
  { date: '2025-02-14', title: "Valentine's Coffee Date", description: 'Share a sweet treat and coffee with someone special.' }, // Friday
  { date: '2025-03-17', title: "St. Patrick's Day Green Latte", description: 'Try our festive green matcha latte.' }, // Monday
  { date: '2025-04-11', title: 'Spring Art Market', description: 'Local artists showcase their work.' }, // Friday
  { date: '2025-05-05', title: 'Cinco de Mayo Fiesta', description: 'Enjoy Mexican pastries and themed drinks.' }, // Monday
  { date: '2025-06-20', title: 'Summer Solstice Celebration', description: 'Live music and cold brew specials.' }, // Friday
  { date: '2025-07-04', title: 'Independence Day BBQ', description: 'Outdoor BBQ and iced coffee bar.' }, // Friday
  { date: '2025-07-10', title: 'Live Music', description: 'Enjoy local artists from 6-8 PM.' }, // Thursday
  { date: '2025-07-15', title: 'Latte Art Class', description: 'Learn latte art at 2 PM.' }, // Tuesday
  { date: '2025-07-22', title: 'Community Meetup', description: 'Meet neighbors at 5 PM.' }, // Tuesday
  { date: '2025-09-02', title: 'Labor Day Study Jam', description: 'Quiet study space and free refills.' }, // Tuesday (Labor Day is Monday, so event is Tuesday)
  { date: '2025-10-31', title: 'Halloween Costume Contest', description: 'Dress up and win prizes.' }, // Friday
  { date: '2025-11-26', title: 'Thanksgiving Pie Tasting', description: 'Sample seasonal pies and coffee.' }, // Wednesday (Thanksgiving is Thursday, so event is Wednesday)
  { date: '2025-12-24', title: 'Christmas Eve Cocoa', description: 'Hot chocolate bar and holiday treats.' }, // Wednesday
  { date: '2025-12-31', title: "New Year's Eve Toast", description: 'Ring in the new year with friends and coffee.' }, // Wednesday
];

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

const EventsScreen = () => {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [selectedEvent, setSelectedEvent] = useState<{
    date: string;
    title: string;
    description: string;
  } | null>(null);

  const daysInMonth = getDaysInMonth(year, month);

  const eventMap = events.reduce((acc, event) => {
    const d = new Date(event.date);
    if (d.getMonth() === month && d.getFullYear() === year) {
      acc[d.getDate()] = event;
    }
    return acc;
  }, {} as { [key: number]: typeof events[0] });

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Events</Text>
      <View style={styles.monthNav}>
        <TouchableOpacity onPress={handlePrevMonth}>
          <Text style={styles.navBtn}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>
          {new Date(year, month).toLocaleString('default', { month: 'long' })} {year}
        </Text>
        <TouchableOpacity onPress={handleNextMonth}>
          <Text style={styles.navBtn}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.calendarGrid}>
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const event = eventMap[day];
          return (
            <TouchableOpacity
              key={day}
              style={[styles.dayCell, event && styles.eventDay]}
              onPress={() => event && setSelectedEvent(event as { date: string; title: string; description: string })}
            >
              <Text style={styles.dayText}>{day}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.eventsBlock}>
        <Text style={styles.eventsTitle}>Events This Month</Text>
        {Object.values(eventMap).length === 0 ? (
          <Text style={styles.noEvents}>No events scheduled.</Text>
        ) : (
          Object.values(eventMap).map((event, idx) => (
            <View key={idx} style={styles.eventCard}>
              <Text style={styles.eventDayText}>
                {new Date(event.date).getDate()}
              </Text>
              <View style={styles.eventDetails}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventDesc}>{event.description}</Text>
              </View>
            </View>
          ))
        )}
      </View>
      <Modal visible={!!selectedEvent} transparent animationType="slide">
        <View style={styles.modalBg}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>{selectedEvent?.title ?? ''}</Text>
            <Text style={styles.modalDesc}>{selectedEvent?.description ?? ''}</Text>
            <TouchableOpacity onPress={() => setSelectedEvent(null)}>
              <Text style={styles.closeBtn}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    color: '#4B2473',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  monthNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  navBtn: {
    color: '#4B2473',
    fontSize: 20,
    marginHorizontal: 16,
  },
  monthText: {
    color: '#4B2473',
    fontSize: 18,
    fontWeight: 'bold',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  dayCell: {
    width: 44,
    height: 44,
    margin: 4,
    backgroundColor: '#E6D6F7',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventDay: {
    borderWidth: 2,
    borderColor: '#4B2473',
    backgroundColor: '#C9B6E7',
  },
  eventsBlock: {
    marginTop: 24,
    width: '100%',
    backgroundColor: '#F3E9FF',
    borderRadius: 12,
    padding: 16,
  },
  eventsTitle: {
    color: '#4B2473',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  noEvents: {
    color: '#4B2473',
    fontSize: 15,
    textAlign: 'center',
  },
  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6D6F7',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  eventDayText: {
    color: '#4B2473',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 12,
    width: 32,
    textAlign: 'center',
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    color: '#4B2473',
    fontSize: 15,
    fontWeight: 'bold',
  },
  eventDesc: {
    color: '#4B2473',
    fontSize: 13,
  },
  dayText: {
    color: '#4B2473',
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventCellText: {
    color: '#4B2473',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 2,
    fontWeight: 'bold',
  },
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(75,36,115,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width: 280,
    alignItems: 'center',
  },
  modalTitle: {
    color: '#4B2473',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalDesc: {
    color: '#4B2473',
    fontSize: 15,
    marginBottom: 16,
    textAlign: 'center',
  },
  closeBtn: {
    color: '#4B2473',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EventsScreen;