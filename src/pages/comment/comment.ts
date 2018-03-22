import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  commentForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public viewCtrl: ViewController) {
    this.commentForm = this.fb.group({
      author: '',
      rating: 5,
      comment: ''
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }


  onSubmit() {
    console.log(this.commentForm.value);
    let comment = this.commentForm.value;
    comment.date = new Date().toISOString()
    this.viewCtrl.dismiss(comment);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
