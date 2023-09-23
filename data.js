var zvonki = {};

zvonki["Понедельник"] = {
	1: {"begin":"8:25","end":"9:05","show":true},
	"Перемена 1➔2": {"begin":"9:05","end":"9:15"},
	2: {"begin":"9:15","end":"9:55","show":true},
	"Перемена 2➔3": {"begin":"9:55","end":"10:05"},
	3: {"begin":"10:05","end":"10:45","show":true},
	"Перемена 3➔4": {"begin":"10:45","end":"11:05"},
	4: {"begin":"11:05","end":"11:45","show":true},
	"Перемена 4➔5": {"begin":"11:45","end":"12:05"},
	5: {"begin":"12:05","end":"12:45","show":true},
	"Перемена 5➔6": {"begin":"12:45","end":"13:00"},
	6: {"begin":"13:00","end":"13:40","show":true},
	"Перемена 6➔7": {"begin":"13:40","end":"13:50"},
	7: {"begin":"13:50","end":"14:30","show":true},
	"Перемена 7➔8": {"begin":"14:30","end":"14:35"},
	8: {"begin":"14:35","end":"15:15","show":true},
};

zvonki["Вторник"] = {
	1: {"begin":"8:25","end":"9:10","show":true},
	"Перемена 1➔2": {"begin":"9:10","end":"9:20"},
	2: {"begin":"9:20","end":"10:05","show":true},
	"Перемена 2➔3": {"begin":"10:05","end":"10:15"},
	3: {"begin":"10:15","end":"11:00","show":true},
	"Перемена 3➔4": {"begin":"11:00","end":"11:20"},
	4: {"begin":"11:20","end":"12:05","show":true},
	"Перемена 4➔5": {"begin":"12:05","end":"12:25"},
	5: {"begin":"12:25","end":"13:10","show":true},
	"Перемена 5➔6": {"begin":"13:10","end":"13:25"},
	6: {"begin":"13:25","end":"14:10","show":true},
	"Перемена 6➔7": {"begin":"14:10","end":"14:20"},
	7: {"begin":"14:20","end":"15:05","show":true},
	"Перемена 7➔8": {"begin":"15:05","end":"15:15"},
	8: {"begin":"15:15","end":"16:00","show":true},
};

zvonki['Четверг'] = zvonki['Понедельник'];
zvonki['Среда'] = zvonki['Вторник'];
zvonki['Пятница'] = zvonki['Вторник'];
// zvonki['Суббота'] = {1: {"begin":"1:00","end":"1:00"}};
// zvonki['Воскресенье'] = zvonki['Суббота'];

var days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
var daysi = [7,1,2,3,4,5,6];
var months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
var monthsRP = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];