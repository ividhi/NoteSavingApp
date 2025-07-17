import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes: Note[] = [];
  newNote: Note = { title: '', content: '' };
  selectedNote: Note | null = null;

  constructor(
    private noteService: NoteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  createNote(): void {
    if (this.newNote.title && this.newNote.content) {
      this.noteService.createNote(this.newNote).subscribe(note => {
        this.notes.push(note);
        this.newNote = { title: '', content: '' };
      });
    }
  }

  selectNote(note: Note): void {
    this.selectedNote = note;
  }

  updateNote(): void {
    if (this.selectedNote) {
      this.noteService.updateNote(this.selectedNote.id!, this.selectedNote).subscribe(updatedNote => {
        const index = this.notes.findIndex(note => note.id === updatedNote.id);
        if (index !== -1) {
          this.notes[index] = updatedNote;
        }
        this.selectedNote = null;
      });
    }
  }

  deleteNote(id: number): void {
    if (confirm('Are you sure you want to delete this note?')) {
      this.noteService.deleteNote(id).subscribe(() => {
        this.notes = this.notes.filter(note => note.id !== id);
        if (this.selectedNote?.id === id) {
          this.selectedNote = null;
        }
      });
    }
  }
}
