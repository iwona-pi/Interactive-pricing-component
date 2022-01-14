var model = {
	currentView: null,
	data:[
	{
		views: 10000,
		show: '10K',
		price: 8

		},
	
	{	
		views: 50000,
		show: '50K',
		price: 12
		
		},
{	
		views: 100000,
		show: '100K',
		price: 16
		
		},
{	
		views: 500000,
		show: '500K',
		price: 24
		
		},		
{	
		views: 1000000,
		show: '1M',
		price: 36
		
		},		
		]				
};


var octopus = {
	getData: function() {
		return model.data
	},
	init: function() {
		model.currentView = model.data[2];
		
		View.init();
		PagePriceView.init();
		YearlyBillingView.init();
		
},
	setcurrentView: function(data) {
		model.currentView = data;
	},
	getcurrentView: function() {
		return model.currentView;
	}
}

var PagePriceView = {
	init: function() {
		
		this.YearlyBilling = document.getElementById("year_price");
		this.input = document.getElementById("cowbell");

		this.render();
	},

	render: function() {
		var currentView = octopus.getcurrentView();
		
		var data = octopus.getData();
		 
			this.input.onchange= function() {
			
				for (i=0; i<data.length; i++)
					{ if (data[i].views <= this.value )
						
						{octopus.setcurrentView(data[i]);
					 
						View.render();
						YearlyBillingView.render();					
				}
			}
		}
	}

}

var View = {
	init: function() {
		var currentView = octopus.getcurrentView();
		this.ViewsElem = document.getElementById("number_views");
		this.PriceElem = document.getElementById("price");
		this.YearlyBilling = document.getElementById("year_price");
		this.render();
	},

	render: function() {
		var currentView = octopus.getcurrentView();
		this.ViewsElem.innerText = currentView.show;
		this.PriceElem.innerText = '$' + currentView.price.toFixed(2) ;

		this.YearlyBilling.onchange = function () {
			if (this.checked) {
				YearlyBillingView.render();
			} else {
				View.render();
			}
		}
	}
}

var YearlyBillingView = {
	init: function() {
		
		this.YearlyBilling = document.getElementById("year_price");
		
		this.render();
	},

	render: function() {

		var discount = 0.75;
		this.PriceElemOff = document.getElementById("price");	
		
		if (this.YearlyBilling.checked == true) {
			this.PriceElemOff.innerText = '$' + (model.currentView.price*discount).toFixed(2);			
		}
	}
};

octopus.init();