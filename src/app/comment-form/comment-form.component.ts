import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  commentForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      bookName: ['', Validators.required],
      readerName: ['', Validators.required],
      comments: [''],
    });
  }

  onSubmit() {
    if (this.commentForm.invalid) {
      return;
    }
    console.log(this.commentForm.value);
  }
}
