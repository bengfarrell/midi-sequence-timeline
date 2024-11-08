import { MIDITrack } from './miditrack';
import { NoteEvent } from './noteevent';

export const generateExample = () => {
    const bpm = 120;
    const notes: NoteEvent[] = [];
    for (let i = 0; i < 100; i++) {
        notes.push({
            note: Math.floor(i / 5) + 60,
            time: i * 0.5 * bpm,
            duration: 0.25 * bpm,
            velocity: Math.random() * 64 + 60,
        });
    }
    return MIDITrack.fromNoteEvents(notes,
        {
            timeSignature: {
                numerator: 4,
                denominator: 4
            },
            division: bpm
        });
};