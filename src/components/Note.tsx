import React from "react";
import { NoteProps } from "../models/NoteProps";

export default function Note(props: NoteProps) {
    const notes = ['A', 'A♯/B♭', 'B', 'C', 'C♯/D♭', 'D', 'D♯/E♭', 'E', 'F', 'F♯/G♭', 'G', 'G♯/A♭']
    function GetStandardGuitarNote(string: number): string
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
            case 6:
                return 'B';
        }
        throw "No result found";
    }

    function GetStandardBassNote(string: number): string
    {
        switch(string)
        {
            case 0:
                return 'G';
            case 1: 
                return 'D';
            case 2:
                return 'A';
            case 3:
                return 'E';
        }
        throw "No result found";
    }

    function CalcNote(standardNote: string)
    {
        var index: number = (notes.findIndex((element) => element === standardNote) + props.fret);
        index = index - props.tuning;
        if (index < 0)
        {
            return notes[index + 12];
        }
        return notes[index % 12];
    }

    function GetNote() 
    {
        var note = "";
        switch(props.instrument)
        {
            case 0: 
                note = CalcNote(GetStandardGuitarNote(props.string))
                break;
            case 1:
                note = CalcNote(GetStandardBassNote(props.string))
                break;
        }
        if(props.naturalOnly 
            && note.includes('♯'))
        {
            return "";
        }
        return note;
    }
    function GetClass(note: string)
    {
        switch(note)
        {
            case 'A':
                return "a-note"
            case 'A♯/B♭':
                return "a-sharp-note"
            case 'B':
                return "b-note"
            case 'C':
                return "c-note"
            case 'C♯/D♭':
                return "c-sharp-note"
            case 'D':
                return "d-note"
            case 'D♯/E♭':
                return "d-sharp-note"
            case 'E':
                return "e-note"
            case 'F':
                return "f-note"
            case 'F♯/G♭':
                return "f-sharp-note"
            case 'G':
                return "g-note"
            case 'G♯/A♭':
                return "g-sharp-note"
            default:
                return "";
        }
    }

    const note = GetNote();

    return (
        <>
            {note !== "" && 
                <span className={"note "+GetClass(note)}>
                    {note}
                </span>
            }
        </>
    );
}