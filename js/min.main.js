(function(){'use strict';let a=document.querySelector('.form-control.contacts-fio'),b=document.querySelector('.form-control.contacts-email'),c=document.querySelector('.form-control.contacts-text'),d=document.querySelector('input[name=personal-data]'),f=document.querySelector('.personal-data__checkbox-text'),g=document.querySelector('.contacts-form'),h=!0,i='',j='';try{i=localStorage.getItem('fio'),j=localStorage.getItem('email')}catch(k){h=!1}i&&(a.value=i),j&&(b.value=j),g.addEventListener('submit',function(k){a.value&&b.value&&d.checked?(h&&(localStorage.setItem('fio',a.value),localStorage.setItem('email',b.value)),a.classList.remove('control-error'),b.classList.remove('control-error'),f.classList.remove('error')):(k.preventDefault(),d.checked?f.classList.remove('error'):f.classList.add('error'),a.value?a.classList.remove('control-error'):a.classList.add('control-error'),b.value?b.classList.remove('control-error'):b.classList.add('control-error'))}),$(document).ready(function(){$('.nav').on('click','a',function(k){k.preventDefault();var l=$(this).attr('href'),m=$(l).offset().top;$('body,html').animate({scrollTop:m},1e3)})})})();
