import React from "react";
import { NoteProps } from "../models/NoteProps";

export default function Note(props: NoteProps) {
    const notes = ['A', 'A♯/B♭', 'B', 'C', 'C♯/D♭', 'D', 'D♯/E♭', 'E', 'F', 'F♯/G♭', 'G', 'G♯/A♭']
    function GetOpenNote(string: number, tuning: number): string
    {
        switch(string)
        {
            case 0:
                return 'E';
            case 1:
                return 'B';
            case 2:
                return 'G';
            case 3: 
                return 'D';
            case 4:
                return 'A';
            case 5:
                return 'E';
        }
        throw "No result found";
    }

    return (
        <>
        {notes[(notes.findIndex((element) => element === GetOpenNote(props.string, props.tuning)) + props.fret) % 12]}
        </>
    );
}