var zvonki = {};

zvonki["Понедельник"] = {
	1: {"begin":825,"end":905},
	2: {"begin":915,"end":955},
	3: {"begin":1005,"end":1045},
	4: {"begin":1105,"end":1145},
	5: {"begin":1205,"end":1245},
	6: {"begin":1300,"end":1340},
	7: {"begin":1350,"end":1430},
	8: {"begin":1435,"end":1515},
};

zvonki["Вторник"] = {
	1: {"begin":825,"end":910},
	2: {"begin":920,"end":1005},
	3: {"begin":1015,"end":1100},
	4: {"begin":1120,"end":1205},
	5: {"begin":1225,"end":1310},
	6: {"begin":1325,"end":1410},
	7: {"begin":1420,"end":1505},
	8: {"begin":1515,"end":1600},
};

zvonki['Четверг'] = zvonki['Понедельник'];
zvonki['Среда'] = zvonki['Вторник'];
zvonki['Пятница'] = zvonki['Вторник'];
zvonki['Суббота'] = {1: {"begin":100,"end":100}};
zvonki['Воскресенье'] = zvonki['Суббота'];

var days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
var daysi = [7,1,2,3,4,5,6];
var months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];