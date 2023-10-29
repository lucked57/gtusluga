var main_url = '';

function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }

  function menuMobile(){
    document.querySelector('.collapsemenu').classList.toggle("menutoggle");
      document.querySelector('.ham4').classList.toggle("active");
  }

Vue.component ('menu-desktop',{
  data: function(){
    return {
      license: '/#license',
      company: 'company.html',
      special: 'service.html',
      together: 'cooperation.html',
      contact: 'contact.html',
      phone: '/#special',
      expert: 'expert.html',
      phoneval: '+7 (499) 714-70-07',
      phonehref: 'tel:(499)714-70-07',
    }
  },
  template: '<nav class="navdestop"><div class="container"><div class="row my-3 align-items-center"><div class="col"><img class="logo" src="img/logo.png" alt=""></div><div class="col"><div class="text-end mx-5"><a class="phone" :href="phonehref">{{phoneval}}</a><a :href="phone" class="btn btn-outline-primary" style="margin-left: 30px; border-radius: 30px; border: 0.523116px solid #172858;color: #172858;">Оставить заявку</a></div></div></div></div><hr><div class="container"><!--row-cols-auto--><div class="row text-desctop text-nowrap"><div class="col"><a :href="license"><p>Лицензия</p></a></div><div class="col"><a :href="company"><p>Готовые фирмы</p></a></div><div class="col"><a :href="special"><p>Услуги</p></a></div><div class="col"><a :href="expert"><p>Эксперты</p></a></div><div class="col mr-l-text"><a :href="together"><p>Сотрудничество</p></a></div><div class="col mx-5"><a :href="contact" style="text-align: right;"><p>Контакты</p></a></div></div></div></nav>'
});

Vue.component ('menu-mobile',{
  data: function(){
    return {
      license: '/#license',
      company: 'company.html',
      special: 'service.html',
      together: 'cooperation.html',
      contact: 'contact.html',
      phone: '/#special',
      expert: 'expert.html',
      phoneval: '+7 (499) 714-70-07',
      phonehref: 'tel:(499)714-70-07',
    }
  },
  template: '<nav class="navmobile"><div class="row"><div class="col"><img class="logo p-2" src="img/logo.png" alt=""></div><div onclick="menuMobile()" class="col align-self-end px-4 navbrand" style="border: none; font-size: 1.8rem;"><div class="text-end"><svg class="ham hamRotate ham4" viewBox="0 0 100 100" width="80"> <path class="line top" d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" /> <path class="line middle" d="m 70,50 h -40" /> <path class="line bottom" d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" /></svg></div></div><div class="collapsemenu menutoggle" ><div class="firstmenu text-white text-center"><a :href="phone" style="text-decoration: none;"><p class="my-1 py-2 text-white">Оставить заявку</p></a></div><div class="row"><div class="col menutext text-nowrap"><a :href="license">Лицензии</a></div><div class="col px-5 mt-1"><div class="text-end"><i class="fa-solid fa-angle-down"></i></div></div><hr><div class="col menutext text-nowrap"><a :href="company">Готовые фирмы</a></div><div class="col px-5 mt-1"><div class="text-end"><i class="fa-solid fa-angle-down"></i></div></div><hr><div class="col menutext text-nowrap"><a :href="special">Услуги</a></div><div class="col px-5 mt-1"><div class="text-end"><i class="fa-solid fa-angle-down"></i></div></div><hr><div class="col menutext text-nowrap"><a :href="expert">Эксперты</a></div><div class="col px-5 mt-1"><div class="text-end"><i class="fa-solid fa-angle-down"></i></div></div><hr><div class="col menutext text-nowrap"><a :href="together">Сотрудничество</a></div><div class="col px-5 mt-1"><div class="text-end"><i class="fa-solid fa-angle-down"></i></div></div><hr><div class="col menutext text-nowrap"><a :href="contact">Контакты</a></div><div class="col px-5 mt-1"><div class="text-end"><i class="fa-solid fa-angle-down"></i></div></div><hr><div class="col px-5 mt-1 mb-4"><a class="phone" :href="phonehref">{{phoneval}}</a></div></div></div></div></nav>'
});

Vue.component ('footer-desktop',{
  data: function(){
    return {
      license: '/#license',
      company: 'company.html',
      special: 'service.html',
      together: 'cooperation.html',
      contact: 'contact.html',
      phone: '/#special',
      expert: 'expert.html',
      phoneval: '+7 (499) 714-70-07',
      phonehref: 'tel:(499)714-70-07',
    }
  },
  template: '<div style="background: #21232F;" class="desktopfooter"><div class="container"><div class="row align-items-center"><div class="col-6"><img style="width: 100px;" class="py-3" src="img/Group 10255.png" alt=""></div><div class="col-6 text-end py-5"><a style="text-decoration: none;" class="text-white" :href="phonehref">{{phoneval}} </a></div></div><div class="row"><hr style="background: white;"><div class="col-6"><div class="col menutext text-nowrap" style="margin-left: 0;"><a style="color: #ffffff; font-weight: 300;" :href="license">Лицензии</a></div><div class="col menutext text-nowrap" style="margin-left: 0;"><a style="color: #ffffff; font-weight: 300;" :href="company">Готовые фирмы</a></div><div class="col menutext text-nowrap" style="margin-left: 0;"><a style="color: #ffffff; font-weight: 300;" :href="special">Услуги</a></div><div class="col menutext text-nowrap" style="margin-left: 0;"><a style="color: #ffffff; font-weight: 300;" :href="expert">Эксперты</a></div><div class="col menutext text-nowrap" style="margin-left: 0;"><a style="color: #ffffff; font-weight: 300;" :href="together">Сотрудничество</a></div><div class="col menutext text-nowrap" style="margin-left: 0;"><a style="color: #ffffff; font-weight: 300;" :href="contact">Контакты</a></div><div class="col text-wrap" style="margin-left: 0;"><p class="text-white" style="font-size: 0.6rem;">© 2022 «ООО». Все права защищены законом об авторском праве.Копирование и использование любых информационных материалов размещенных на сайте ecert.ru разрешается только с письменного согласия руководства компании.</p></div></div><div class="col-6 text-end"><div class="row"><div class="col-4"></div><div class="col-8 text-end"><div style="color: #ffffff; font-weight: 300;" class="menutext text-wrap mt-3 text-end">Москва, 1410760, Даниловский переулок дом 5</div><div style="color: #ffffff; font-weight: 300;" class="menutext text-wrap text-end"></div></div></div><div class="mt-4"></div><a class="btn btn-primary my-5" style="width: 200px; padding: 10px; color: black; background: white; border-radius: 15.3858px; border: 0.354952px solid white;" :href="phone">Оставить заявку</a></div></div></div></div>'
});

Vue.component ('footer-mobile',{
  data: function(){
    return {
      license: '/#license',
      company: 'company.html',
      special: 'service.html',
      together: 'cooperation.html',
      contact: 'contact.html',
      phone: '/#special',
      expert: 'expert.html',
      phoneval: '+7 (499) 714-70-07',
      phonehref: 'tel:(499)714-70-07',
    }
  },
  template: '<div style="background: #21232F; overflow-x: hidden;" class="mobilefooter"><div class="row align-items-center"><div class="col-6"><img style="width: 100px; margin-left: 20px;" class="p-3" src="img/Group 10255.png" alt=""></div><div class="col-6 text-center"><a style="text-decoration: none;" class="text-white" :href="phonehref">{{phoneval}}</a></div></div><hr style="background: white;"><div class="row"><div class="col menutext text-nowrap"><a style="color: #ffffff;" :href="license">Лицензии</a></div><div class="col mt-1 mx-4"><div class="text-end" style="color: #ffffff;"><i class="fa-solid fa-angle-down"></i></div></div><hr style="background: white;"><div style="color: #ffffff;" class="col menutext text-nowrap"><a style="color: #ffffff;" :href="company">Готовые фирмы</a></div><div class="col mt-1 mx-4"><div class="text-end" style="color: #ffffff;"><i class="fa-solid fa-angle-down"></i></div></div><hr style="background: white;"><div style="color: #ffffff;" class="col menutext text-nowrap"><a style="color: #ffffff;" :href="special">Услуги</a></div><div class="col mt-1 mx-4"><div class="text-end" style="color: #ffffff;"><i class="fa-solid fa-angle-down"></i></div></div><hr style="background: white;"><div style="color: #ffffff;" class="col menutext text-nowrap"><a style="color: #ffffff;" :href="expert">Эксперты</a></div><div class="col mt-1 mx-4"><div class="text-end" style="color: #ffffff;"><i class="fa-solid fa-angle-down"></i></div></div><hr style="background: white;"><div style="color: #ffffff;" class="col menutext text-nowrap"><a style="color: #ffffff;" :href="together">Сотрудничество</a></div><div class="col mt-1 mx-4"><div class="text-end" style="color: #ffffff;"><i class="fa-solid fa-angle-down"></i></div></div><hr style="background: white;"><div style="color: #ffffff;" class="col menutext text-nowrap"><a style="color: #ffffff;" :href="contact">Контакты</a></div><div class="col mt-1 mx-4"><div class="text-end" style="color: #ffffff;"><i class="fa-solid fa-angle-down"></i></div></div><hr style="background: white;"><div style="color: #ffffff;" class="col menutext text-wrap mt-3">Москва, 1410760, Даниловский переулок дом 5</div><div style="color: #ffffff;" class="menutext text-wrap"></div><div class="col menutext"><a :href="phone" class="btn btn-primary my-5" style="width: 95%; padding: 15px; color: black; background: white; border-radius: 23.3858px; border: 0.354952px solid white;">Оставить заявку</a><p class="text-white" style="font-size: 0.6rem; line-height: 0.9rem; font-weight: 400;">© 2022 «ООО». Все права защищены законом об авторском праве.Копирование и использование любых информационных материалов размещенных на сайте ecert.ru разрешается только с письменного согласия руководства компании. </p></div></div></div>'
});

Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});

new Vue({
  el: '#app',
  data: {
    service: "",
    name: "",
    email: "",
    phone: "",
    comment: "",
    checked: false,
  },
  methods: {
   handleScroll: function(evt, el) {
    return window.scrollY > 6000;
    },
    menuStart: function (event) {
      document.querySelector('.collapsemenu').classList.toggle("menutoggle");
      document.querySelector('.ham4').classList.toggle("active");
    },
    Sendemail() {
      var service = this.service;
      var name = this.name;
      var email = this.email;
      var phone = this.phone;
      var comment = this.comment;
      var checked = this.checked;

      var error = false;

      if(!checked){
        error = 'Пожалуйста, подтвердите согласие на обработку персональных данных';
      }
      if (!validateEmail(email)){
        error = 'Некорректное значения email';
      }
      if(service.length == 0 || name.length == 0 || email.length == 0 || phone.length == 0 || comment.length == 0){
        error = 'Есть пустые значения';
      }

      if(!error){
        this.service = '';
        this.name = '';
        this.email = '';
        this.phone = '';
        this.comment = '';
        this.checked =false;
        var bodyFormData = JSON.stringify({ 'service': service,'name': name,'email': email,'phone': phone,'comment': comment });
              axios({
              method: "post",
              url: "sendemail.php", 
              data: bodyFormData,
              headers: { "Content-Type": "application/json" },
            })
              .then(function (response) {
                document.querySelector('#exampleInput1').value = '';
                document.querySelector('#exampleInput4').value = '';
                document.querySelector('#exampleInputEmail1').value = '';
                document.querySelector('#exampleInputphone1').value = '';
                document.querySelector('#exampleInputEmail7').value = '';
                console.log(response.data);
                if(response.data == '1' || response.data == 1){
                  alert('Данные успешно отправлены');
                }
                else{
                  alert(response.data);
                }
              })
              .catch(function (response) {
                document.querySelector('#exampleInput1').value = '';
                document.querySelector('#exampleInput4').value = '';
                document.querySelector('#exampleInputEmail1').value = '';
                document.querySelector('#exampleInputphone1').value = '';
                document.querySelector('#exampleInputEmail7').value = '';
                alert('Ошибка запроса ' + response);
              });
      }
      else{
        alert(error);
      }
      //console.log(this.comment);
    }
  }
});