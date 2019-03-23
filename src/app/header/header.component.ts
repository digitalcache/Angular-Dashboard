import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Click on the burger icon to hide the sidebar
  public sidebarVisible(): void {
    $('.launch').show();
    $('.content-main').animate({
      width: '100%'
    });
    if ($(window).width() > 767) {
      $('.activityMain').css('width', '74vw');
    }
  }
  // Click on the burger icon to show the sidebar
  public sidebarInvisible(): void {
    $('.launch').hide();
    $('.content-main').animate({
      width: '90%'
    });
    $(' .rightMenu').animate({
      marginRight: '10px'
    });
    if ($(window).width() > 767) {
      $('.activityMain').css('width', '65vw');
    }
  }
  constructor() {

  }

  ngOnInit() {
    // Change searchHolder Width if mobile device
    if ($(window).width() < 767) {
      $('.searchHolder').animate({
        width: '45vw'
      });
    }
    if ($(window).width() < 400) {
      $('.searchHolder').animate({
        width: '30vw'
      });
    }
  }

}
