var model = {
	currentView: null,
	data:[
	{
		views: 10000,
		show: '10k',
		price: '$8'

		},
	
	{	
		views: 50000,
		show: '50k',
		price: '$12'
		
		},
{	
		views: 100000,
		show: '100k',
		price: '$16'
		
		},
{	
		views: 500000,
		show: '500k',
		price: '$24'
		
		},		
{	
		views: 1000000,
		show: '1M',
		price: '$36'
		
		},		
		]				
};

/*var octopus = {
	//let val = document.getElementById("cowbell").value;
	getprice: function() {
		this.val = document.getElementById("cowbell").value;
		for (i=0; i< model.data.length; i++) {
			if model.data[i].views =this.val;
		} document.getElementsByClassName("number_views").innerText = val
	}
};*/
var octopus = {
	getData: function() {
		return model.data
	},
	init: function() {
		model.currentView = model.data[0];
		
		
		PagePriceView.init();
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
		var currentView = octopus.getcurrentView();
		
		this.ViewsElem = document.getElementById("number_views");
		this.ViewsElem.innerText = currentView.show;
		//this.val = document.getElementById("cowbell").value;
		this.input = document.getElementById("cowbell");

		this.render();
	},

	render: function() {
		
		var data = octopus.getData();
		 
		this.input.onchange= function() {
			for (i=0; i<data.length; i++)
			{ if (data[i].views <= this.value )
				//|| data[i+1] >= this.value)
				{octopus.setcurrentView(data[i]);
					PagePriceView.init();
				};
			}
		}
	}

};

octopus.init();