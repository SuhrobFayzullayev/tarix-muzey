$(document).ready(function(){
	document.addEventListener('DOMContentLoaded', function() {
		var elems = document.querySelectorAll('.modal');
		var instances = M.Modal.init(elems, options);
	});
	
	// Or with jQuery
	
	$(document).ready(function(){
		$('.modal').modal();
	});

	document.addEventListener('DOMContentLoaded', function() {
		var elems = document.querySelectorAll('.modal2');
		var instances = M.Modal.init(elems, options);
	});
	
	// Or with jQuery
	
	$(document).ready(function(){
		$('.modal2').modal();
	});


	document.addEventListener('DOMContentLoaded', function() {
		var elems = document.querySelectorAll('.sidenav');
		var instances = M.Sidenav.init(elems, options);
	  });
	
	  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
	  // var collapsibleElem = document.querySelector('.collapsible');
	  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
	
	  // Or with jQuery
	
	  $(document).ready(function(){
		$('.sidenav').sidenav();
	  });
})    

var i=0;
	$(".galereya__item").each(function(){
  length
	i++;
	$(this).attr("class","galereya__item_"+i);
});

// -------------------------------===========-------------------------------

$(function(){
	let Catalog_max__pro__ul_link = document.querySelectorAll('.news__pagination__link');
  
	for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
		Catalog_max__pro__ul_link[i].addEventListener('click',function(){
			for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
				Catalog_max__pro__ul_link[j].classList.remove('active');
			}
			this.classList.add('active');
  
		})
	}
  });

// -------------------------------===========-------------------------------

$(function(){
	let Catalog_max__pro__ul_link = document.querySelectorAll('.fotogalereya_in__item2');
  
	for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
		Catalog_max__pro__ul_link[i].addEventListener('click',function(){
			for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
				Catalog_max__pro__ul_link[j].classList.remove('active');
			}
			this.classList.add('active');
  
		})
	}
  });

// -------------------------------===========-------------------------------

const buttons = document.querySelectorAll('.header__bottom__title__h4');
buttons.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('active');
    
    buttons.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('active');
      }
    });
  });
});

// =======------------------------------=======------------------------=======

var i=0;
	$(".galereya_in__menu__link").each(function(){
  length
	i++;
	$(this).attr("href","#mrx-"+i);
});

var i=0;
	$(".galereya_in__item").each(function(){
  length
	i++;
	$(this).attr("id","mrx-"+i);
});


// directions_in id end
$('.galereya_in__cart__list .galereya_in__item').hide();
$('.galereya_in__cart__list .galereya_in__item:first').show();
$('.galereya_in__menu li:first').addClass('active');

// Change tab class and display content
$('.galereya_in__menu a').on('click', function(event){
  event.preventDefault();
  $('.galereya_in__menu li').removeClass('active');
  $(this).parent().addClass('active');
  $('.galereya_in__cart__list .galereya_in__item').hide();
  $($(this).attr('href')).show();
});

// =======------------------------------=======------------------------=======


// =======------------------------------=======------------------------=======


const calculatePaymentAmounts = () => {
	const paymentAmounts = Array.from(document.querySelectorAll('.payment__title__h4'))
	const value = paymentAmounts.map((amount) => Number(amount.innerText)).reduce((prev, curr) => prev + curr)
	document.querySelector('#payment_sum span').innerHTML = value
}

const paymentIncriment_ui = document.querySelector('#paymentIncriment')
if (paymentIncriment_ui) {
  const internalProductTopItems = paymentIncriment_ui.querySelectorAll('.payment__list__item')
  internalProductTopItems.forEach(el => {
    const minusItem = el.querySelector('.payment__minus')
    const plusItem = el.querySelector('.payment__plus')
    const value = el.querySelector('.payment__value')
	const payment = el.querySelector('.payment__list__item h4')
	const paymentMax = el.querySelector('.payment__list__item h4')
	const payment_sum = document.querySelector('#payment_sum span');
	const payment_sum_button = document.querySelector('#payment_sum_button');
    minusItem.addEventListener('click', () => {

    if (Number(value.textContent) > 0) {
        value.textContent--
      }
    })

    plusItem.addEventListener('click', () => {
      value.textContent++

	    if(payment_sum.textContent > 0){
		    payment_sum_button.className = 'payment__button modal-trigger modal-close'
			payment_sum_button.style.cursor = "pointer"
	    }else{
			payment_sum_button.className = 'payment__button'
			payment_sum_button.style.cursor = "not-allowed"
		}
    });

	plusItem.addEventListener('click', () => {
		var paymentSum = value.textContent * payment.dataset.payment
		paymentMax.textContent = paymentSum
		calculatePaymentAmounts()

		if(payment_sum.textContent > 0){
		    payment_sum_button.className = 'payment__button modal-trigger modal-close'
			payment_sum_button.style.cursor = "pointer"
	    }else{
			payment_sum_button.className = 'payment__button'
			payment_sum_button.style.cursor = "not-allowed"
		}
	});
	
	minusItem.addEventListener('click', () => {
		var paymentSum = value.textContent * payment.dataset.payment
		paymentMax.textContent = paymentSum
		calculatePaymentAmounts()

		if(payment_sum.textContent > 0){
		    payment_sum_button.className = 'payment__button modal-trigger modal-close'
			payment_sum_button.style.cursor = "pointer"
	    }else{
			payment_sum_button.className = 'payment__button'
			payment_sum_button.style.cursor = "not-allowed"
		}
    });
	
  })
}


// -------------------------------===========-------------------------------

$( ".leadership__button__open" ).click(function() {
	$(this ).each(function( i ) {
	  if ( this.style.position !== "relative" ) {
		this.style.position = "relative";
		let Catalog_max__pro__ul_link = document.querySelectorAll('.leadership__item');
		for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
			Catalog_max__pro__ul_link[i].addEventListener('click',function(){
				for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
					Catalog_max__pro__ul_link[j].classList.remove('leadership__active');
				}
				this.classList.add('leadership__active');
			})
		}
		
	  } else {
		this.style.position = "";
		let Catalog_max__pro__ul_link = document.querySelectorAll('.leadership__item');
		for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
			Catalog_max__pro__ul_link[i].addEventListener('click',function(){
				for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
					Catalog_max__pro__ul_link[j].classList.remove('leadership__active');
				}
				this.classList.add('leadership__active_12');
			})
		}
	  }
	});
  });
  
  // -------------------------------===========-------------------------------