var curDate = '2023, September, 04 08:25';

function ZeroBelow(chislo) {
	chislo = String(chislo)
	if(chislo.length < 2) {
		chislo = "0" + chislo
	}
	return chislo;
}

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function UpdateData() {
	var date = new Date();
	var day = date.getDay();
	var minutes = ZeroBelow(String(date.getMinutes()));

	var curTime = Number(String(date.getHours()) + minutes);

	for(let k in zvonki[days[day]]) {
		var range = zvonki[days[day]][k];

		if(curTime >= range.begin && curTime <= range.end) {
			$("#currentLesson").text(k);
			break;
		}

		$("#currentLesson").text("Уроки закончились =)");
	}

	$("#currentTime").html(days[day] + "<br>" + date.getFullYear() + "-" + ZeroBelow(date.getMonth() + 1) + "-" + ZeroBelow(date.getDate()) + " " + date.getHours());
	$("#currentTime").html(`${days[day]}<br>${date.getFullYear()}-${ZeroBelow(date.getMonth() + 1)}-${ZeroBelow(date.getDate())} ${ZeroBelow(date.getHours())}:${ZeroBelow(date.getMinutes())}:${ZeroBelow(date.getSeconds())}`);

	var prevMonthDays = daysInMonth(date.getFullYear(), date.getMonth());
	var curMonthDays = daysInMonth(date.getFullYear(), date.getMonth() + 1);
	var nextMonthDays = daysInMonth(date.getFullYear(), date.getMonth() + 2);

	$("#prevMonthCalendar").empty();
	$("#curMonthCalendar").empty();
	$("#nextMonthCalendar").empty();

	var prevMonthDate = new Date(`${date.getFullYear()}-${date.getMonth()}-01`);
	var curMonthDate = new Date(`${date.getFullYear()}-${date.getMonth() + 1}-01`);
	var nextMonthDate = new Date(`${date.getFullYear()}-${date.getMonth() + 2}-01`);

	var prevMonthDaysUI = prevMonthDays + daysi[prevMonthDate.getDay()];
	var curMonthDaysUI = curMonthDays + daysi[curMonthDate.getDay()];
	var nextMonthDaysUI = nextMonthDays + daysi[nextMonthDate.getDay()];

	prevMonthLastDay = 1;
	curMonthLastDay = 1;
	nextMonthLastDay = 1;

	$("#prevMonthName").text(months[prevMonthDate.getMonth()]);
	$("#curMonthName").text(months[curMonthDate.getMonth()]);
	$("#nextMonthName").text(months[nextMonthDate.getMonth()]);

	for(var i = 0; i < Math.ceil(prevMonthDaysUI / 7); i++) {
		var week = "<tr>";
		if(i == 0) {
			for(var ii = 1; ii < daysi[prevMonthDate.getDay()]; ii++) {
				week += "<td></td>";
			}
			for(var ii = daysi[prevMonthDate.getDay()]; ii <= 7; ii++) {
				if(ii == 6 || ii == 7) {
					week += `<td class="has-text-danger">${prevMonthLastDay}</td>`;
				} else {
					week += `<td>${prevMonthLastDay}</td>`;
				}
				prevMonthLastDay++;
			}
		} else {
			for(var ii = 1; ii <= 7; ii++) {
				if(prevMonthLastDay <= prevMonthDays) {
					if(ii == 6 || ii == 7) {
						week += `<td class="has-text-danger">${prevMonthLastDay}</td>`;
					} else {
						week += `<td>${prevMonthLastDay}</td>`;
					}
				} else {
					week += `<td></td>`;
				}
				prevMonthLastDay++;
			}
		}
		week += "</tr>";
		$("#prevMonthCalendar").append(week);
	}

	for(var i = 0; i < Math.ceil(curMonthDaysUI / 7); i++) {
		var week = "<tr>";
		if(i == 0) {
			for(var ii = 1; ii < daysi[curMonthDate.getDay()]; ii++) {
				week += "<td></td>";
			}
			for(var ii = daysi[curMonthDate.getDay()]; ii <= 7; ii++) {
				if(ii == 6 || ii == 7) {
					if(date.getDate() == curMonthLastDay) {
						week += `<td class="has-text-danger is-selected">${curMonthLastDay}</td>`;
					} else {
						week += `<td class="has-text-danger">${curMonthLastDay}</td>`;
					}
					
				} else {
					if(date.getDate() == curMonthLastDay) {
						week += `<td class="is-selected">${curMonthLastDay}</td>`;
					} else {
						week += `<td>${curMonthLastDay}</td>`;
					}
					
				}
				curMonthLastDay++;
			}
		} else {
			for(var ii = 1; ii <= 7; ii++) {
				if(curMonthLastDay <= curMonthDays) {
					if(ii == 6 || ii == 7) {
						if(date.getDate() == curMonthLastDay) {
							week += `<td class="is-selected has-text-danger">${curMonthLastDay}</td>`;
						} else {
							week += `<td class="has-text-danger">${curMonthLastDay}</td>`;
						}
					} else {
						if(date.getDate() == curMonthLastDay) {
							week += `<td class="is-selected">${curMonthLastDay}</td>`;
						} else {
							week += `<td>${curMonthLastDay}</td>`;
						}
					}
				} else {
					week += `<td></td>`;
				}
				curMonthLastDay++;
			}
		}
		week += "</tr>";
		$("#curMonthCalendar").append(week);
	}

	for(var i = 0; i < Math.ceil(nextMonthDaysUI / 7); i++) {
		var week = "<tr>";
		if(i == 0) {
			for(var ii = 1; ii < daysi[nextMonthDate.getDay()]; ii++) {
				week += "<td></td>";
			}
			for(var ii = daysi[nextMonthDate.getDay()]; ii <= 7; ii++) {
				if(ii == 6 || ii == 7) {
					week += `<td class="has-text-danger">${nextMonthLastDay}</td>`;
				} else {
					week += `<td>${nextMonthLastDay}</td>`;
				}
				nextMonthLastDay++;
			}
		} else {
			for(var ii = 1; ii <= 7; ii++) {
				if(nextMonthLastDay <= nextMonthDays) {
					if(ii == 6 || ii == 7) {
						week += `<td class="has-text-danger">${nextMonthLastDay}</td>`;
					} else {
						week += `<td>${nextMonthLastDay}</td>`;
					}
				} else {
					week += `<td></td>`;
				}
				nextMonthLastDay++;
			}
		}
		week += "</tr>";
		$("#nextMonthCalendar").append(week);
	}
}

$(document).ready(function() {
	UpdateData();
	setInterval("UpdateData()", 1000);
});