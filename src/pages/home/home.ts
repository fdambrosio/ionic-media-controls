import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { MusicControls } from '@ionic-native/music-controls';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  file: MediaObject;
  constructor(public musicControls: MusicControls, public media: Media, public navCtrl: NavController) {
  }

  settingMusicControl(){
    this.musicControls.destroy(); // it's the same with or without the destroy 
    this.musicControls.create({
      track       : 'Test track',        // optional, default : ''
      artist      : 'test artist',                       // optional, default : ''
      cover       : '',      // optional, default : nothing
      // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
      //           or a remote url ('http://...', 'https://...', 'ftp://...')
      isPlaying   : true,                         // optional, default : true
      dismissable : false,                         // optional, default : false
    
      // hide previous/next/close buttons:
      hasPrev   : false,      // show previous button, optional, default: true
      hasNext   : false,      // show next button, optional, default: true
      hasClose  : true,       // show close button, optional, default: false
    
    // iOS only, optional
      album       : 'test album',     // optional, default: ''
      duration : 0, // optional, default: 0
      elapsed : 0, // optional, default: 0
    
      // Android only, optional
      // text displayed in the status bar when the notific\ation (and the ticker) are updated
      ticker    : 'Now playing test'
     });
     this.musicControls.subscribe().subscribe((action) => {
          console.log('action', action);
          switch(action) {
            case 'music-controls-next':
               // Do something
               break;
            case 'music-controls-previous':
               // Do something
               break;
            case 'music-controls-pause':
               // Do something
               console.log('musc pause');
               this.file.pause();
               this.musicControls.listen(); 
               this.musicControls.updateIsPlaying(false);
               break;
            case 'music-controls-play':
               // Do something
               console.log('music play');
               this.file.play();
               this.musicControls.listen(); 
               this.musicControls.updateIsPlaying(true);
               break;
            case 'music-controls-destroy':
               // Do something
               break;
            // External controls (iOS only)
            case 'music-controls-toggle-play-pause' :
              // Do something
              break;
            case 'music-controls-seek-to':
              // Do something
              break;
            case 'music-controls-skip-forward':
              // Do something
              break;
            case 'music-controls-skip-backward':
              // Do something
              break;

              // Headset events (Android only)
              // All media button events are listed below
            case 'music-controls-media-button' :
                // Do something
                break;
            case 'music-controls-headset-unplugged':
                // Do something
                break;
            case 'music-controls-headset-plugged':
                // Do something
                break;
            default:
                break;
          }
    });
    this.musicControls.listen(); // activates the observable above
    this.musicControls.updateIsPlaying(true);
  }

  play(){
    this.file = this.media.create('https://archive.org/download/tsp2007-06-19.mbho.flac16/tsp2007-06-19.mbho.d1t01.mp3');
    this.file.play();
    this.settingMusicControl();
  }

  pause(){
    this.file.pause();
    this.musicControls.updateIsPlaying(false);
  }
}
