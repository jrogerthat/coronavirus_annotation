import '../styles/index.scss';
import * as d3 from 'd3';
import * as vid from './video_player';
import { renderNav, toggleMagic, updateSideAnnotations} from './sidebar';
import * as firebase from 'firebase';
import "firebase/auth";
import { firebaseConfig, checkDatabase, dataKeeper } from './firebaseStuff';
import { annotationType, defaultTemplate, annotationTemplate, annoTypes } from './templates';
import { dropDown, clearSidebar } from './canvas';
import { image } from 'd3';
import { specialUserCheck, addCommentButton } from './topToolbar';

export const currentUserKeeper = [];
export const specialUserKeeper = [];

var playing = vid.playing;



if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

let mainWrap = document.getElementById('main-wrap');
if(mainWrap){

    let play = vid.formatVidPlayer(mainWrap, './public/entry_notflat_082020.mp4', "./public/entry_flat_082020.mp4");

    d3.select('#interaction').on('mousemove', (d, i, n)=> {

      vid.mouseMoveVideo(d3.mouse(n[i]))}).on('click', ()=> vid.videoClicked());

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        
          let ref = firebase.database().ref();  
        
          checkDatabase(ref, updateSideAnnotations);
          checkDatabase(ref, specialUserCheck);

          d3.select('.add-comment').select('button').on('click', (d, i, n)=> addCommentButton(d, i, n));

          clearSidebar();

        // User is signed in.
      } else {
        console.log("NO USER", user);
        // No user is signed in.
      }
        currentUserKeeper.push(user);

    });
}

  

