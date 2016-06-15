class SideNav {
  constructor() {
      this.toggelButtonEl = document.querySelector(".js-menu");
      this.hideButtonEl = document.querySelector(".js-menu-hide");
      this.sideNavEl  = document.querySelector(".side-nav");
      this.sideNavContainerEl = document.querySelector('.js-nav-container');

      this.showSideNav = this.showSideNav.bind(this);
      this.hideSideNav = this.hideSideNav.bind(this);
      this.blockClick = this.blockClick.bind(this);
      this.addEventListeners();
  }
  addEventListeners() {
     this.toggelButtonEl.addEventListener('click',this.showSideNav);
     this.hideButtonEl.addEventListener('click',this.hideSideNav);
     this.sideNavEl.addEventListener('click',this.hideSideNav);
     this.sideNavContainerEl.addEventListener('click',this.blockClick);
  }
blockClick(evt){
  evt.stopPropagation();
}
  showSideNav(){
     this.sideNavEl.classList.add('side-nav--visible');
  }
hideSideNav(){
    this.sideNavEl.classList.remove('side-nav--visible');
  }
}
new SideNav();
