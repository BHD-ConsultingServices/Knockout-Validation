var site = function() {
    var page = {};
	var common = {};
	
    return {
        page: page,
		common: common
    };
}();

site.common = function() {		
	var defaultTimeZone = "+02:00";

	var date = function() {	
		var now = function() {			
			return moment(new Date()).utcOffset(defaultTimeZone).toDate();
		}
		
		var dateToString = function(date) {		
			if (!date || typeof date.getMonth !== "function") {
				throw "dateToString >> Valid date not provided";
			}
			
			return moment(date).format($.validation.dateFormat);
		};		
		
		return {
			dateToString: dateToString,
			now: now
		}		
	}();
	
	var time = function() {
		var now = function() {
			return moment(site.common.date.now()).format("HH:mm");
		}

		var dateTimeToString = function(date) {
			if ((!date || typeof date.getMonth !== 'function') && typeof date().getMonth !== "function") {
				throw "dateTimeToString >> Valid date not provided";
			}
			var dateValue = (date.getMonth !== "function") ? date: date();
			return moment().format("HH:mm");
		}
		
		return {
			now: now,
			dateTimeToString: dateTimeToString
		}
	}();
	
	return {
		defaultTimeZone: defaultTimeZone,
		date: date,
		time: time
	};	

}();