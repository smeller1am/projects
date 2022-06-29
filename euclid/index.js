document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)



      document.querySelectorAll('.tab-content').forEach(function(tabContent){
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

    })
  })

  document.querySelectorAll('.tabs__btn').forEach(function(tabsActive) {
    tabsActive.addEventListener('click', function() {
      document.querySelectorAll('.tabs__btn').forEach(function(tabsRemove) {
        tabsRemove.classList.remove('work__list-item-active')
      })

      tabsActive.classList.toggle('work__list-item-active')


    })
  })

  document.querySelector('.header__nav-bar').addEventListener('click', function() {
    document.querySelector('.header__burger').classList.add('header__burger-transform')
  })

  document.querySelector('.header__nav-x').addEventListener('click', function(navX) {
    document.querySelector('.header__burger').classList.remove('header__burger-transform')
  })


  document.querySelector('.search-btn').addEventListener('click', function() {
    document.querySelector('.search-hidden').classList.add('search-transform')
  })

  document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.search-hidden').classList.remove('search-transform')
  })

})
