$(function() {
	var url = 'https://restcountries.eu/rest/v1/name/';
	var countriesList = $('#countries-add');
    

	$('#search').click(searchCountries);
    
	function searchCountries() {
		var countryName = $('#country-name').val();
		if (!countryName.length) countryName = 'Poland'; 
		$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList 
		});
	}
	
	function showCountriesList(resp) {
		countriesList.empty(); 
		resp.forEach(function(item) {
			$('<li>').text(item.name).appendTo(countriesList);
            $('<li>').text(item.capital).appendTo(countriesList);
            $('<li>').text(item.subregion).appendTo(countriesList);
            $('<li>').text(item.population + ' people').appendTo(countriesList);
            $('<li>').text(item.currencies).appendTo(countriesList);
            $('<li>').text(item.topLevelDomain).appendTo(countriesList);
		});
	}
});