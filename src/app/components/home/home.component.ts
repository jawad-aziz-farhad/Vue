import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.initCarousel();
  }

 /* INITIALIZING CAROUSEL */ 
 initCarousel(){
    (function($) {
    
    'use strict';
    
    var $slides = $('[data-slides]');
    var images = $slides.data('slides');
    var count = images.length;
    var slideshow = function() {
    $slides.css('background-image', 'url("' + images[Math.floor(Math.random() * count)] + '")')
           .show(0, function() {
                setTimeout(slideshow, 3000);
      });
    };
    
    slideshow();
    
  }($));


  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:7,
      loop:true,
      margin:10,
      lazyLoad:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[5000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  });

  var owl = $('.owl-carousel2');
  owl.owlCarousel({
        items:3,
        loop:true,
        margin:10,
        lazyLoad:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[5000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });
  }

  navigate(value){

  }

}
