var lastDayUpdated = -1;

function ZeroBelow(chislo) {
	chislo = String(chislo)
	if(chislo.length < 2) {
		chislo = "0" + chislo;
	}
	return chislo;
}

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function UpdateEveryDay(date) {
	var prevprevMonthDays = daysInMonth(date.getFullYear(), date.getMonth() - 1);
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
		var nextMonthDaysGrey = 1;
		var week = "<tr>";
		if(i == 0) {
			for(var ii = daysi[prevMonthDate.getDay()] - 2; ii >= 0; ii--) {
				week += `<td class="has-text-grey-lighter">${prevprevMonthDays - ii}</td>`;
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
					if(ii == 6 || ii == 7) {
						week += `<td class="has-text-danger-light">${nextMonthDaysGrey}</td>`;
					} else {
						week += `<td class="has-text-grey-lighter">${nextMonthDaysGrey}</td>`;
					}
					nextMonthDaysGrey++;
				}
				prevMonthLastDay++;
			}
		}
		week += "</tr>";
		$("#prevMonthCalendar").append(week);
	}

	for(var i = 0; i < Math.ceil(curMonthDaysUI / 7); i++) {
		var nextMonthDaysGrey = 1;
		var week = "<tr>";
		if(i == 0) {
			for(var ii = daysi[curMonthDate.getDay()] - 2; ii >= 0; ii--) {
				week += `<td class="has-text-grey-lighter">${prevMonthDays - ii}</td>`;
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
					if(ii == 6 || ii == 7) {
						week += `<td class="has-text-danger-light">${nextMonthDaysGrey}</td>`;
					} else {
						week += `<td class="has-text-grey-lighter">${nextMonthDaysGrey}</td>`;
					}
					nextMonthDaysGrey++;
				}
				curMonthLastDay++;
			}
		}
		week += "</tr>";
		$("#curMonthCalendar").append(week);
	}

	for(var i = 0; i < Math.ceil(nextMonthDaysUI / 7); i++) {
		var nextMonthDaysGrey = 1;
		var week = "<tr>";
		if(i == 0) {
			for(var ii = daysi[nextMonthDate.getDay()] - 2; ii >= 0; ii--) {
				week += `<td class="has-text-grey-lighter">${curMonthDays - ii}</td>`;
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
					if(ii == 6 || ii == 7) {
						week += `<td class="has-text-danger-light">${nextMonthDaysGrey}</td>`;
					} else {
						week += `<td class="has-text-grey-lighter">${nextMonthDaysGrey}</td>`;
					}
					nextMonthDaysGrey++;
				}
				nextMonthLastDay++;
			}
		}
		week += "</tr>";
		$("#nextMonthCalendar").append(week);
	}
}

function UpdateData() {
	var date = new Date();
	var day = date.getDay();
	if(lastDayUpdated != day) {
		UpdateEveryDay(date);
		lastDayUpdated = day;
	}
	var minutes = ZeroBelow(String(date.getMinutes()));

	var foundLessin = false;

	$("#allLessons").empty();

	for(let k in zvonki[days[day]]) {
		var range = zvonki[days[day]][k];
		var rangeEnd = range.end.split(":")[0] + ":" + String(Number(range.end.split(":")[1]) - 1);
		if(String(Number(range.end.split(":")[1]) - 1) == "-1") {
			rangeEnd = range.end.split(":")[0] + ":00";
		} else if (String(Number(range.end.split(":")[1]) - 1).length == 1) {
			rangeEnd = range.end.split(":")[0] + ":0" + String(Number(range.end.split(":")[1]) - 1);
		}

		var timeBegin = new Date();
		var timeEnd = new Date();
		timeBegin.setHours(range.begin.split(":")[0], range.begin.split(":")[1], 0);
		timeEnd.setHours(range.end.split(":")[0], range.end.split(":")[1], 0);
		timeBegin = timeBegin.getTime();
		timeEnd = timeEnd.getTime();

		var isCurrend = 0;
		if(date.getTime() >= timeBegin && date.getTime() <= timeEnd) {
			isCurrend = 1;
		}

		if(range.show == true) {
			$("#allLessons").append(`<div class="column"><div class="has-text-centered is-size-3">${k}</div><progress class="progress is-small is-success" value="${isCurrend}" max="1"></progress><div class="has-text-centered is-size-5">${range.begin} - ${range.end}</div></div>`);
		} else {
			$("#allLessons").append(`<div class="column dot"><progress class="progress is-small is-success" value="${isCurrend}" max="1"></div>`);
		}

		if(date.getTime() >= timeBegin && date.getTime() <= timeEnd) {
			$("#lessonProgress").fadeIn("fast");
			$("#lessonProgress progress.is-large").attr("max", Math.round((timeEnd - timeBegin) / 1000));
			$("#lessonProgress progress.is-large").attr("value", (date.getTime() - timeBegin) / 1000 + date.getSeconds());
			$("#lessonBegin").text(range.begin);
			$("#lessonEnd").text(range.end);
			foundLessin = true;
		}
	}

	if(!foundLessin) {
		$("#lessonProgress").fadeOut("fast");
	}

	$("#currentTime").html(`${ZeroBelow(date.getHours())}:${ZeroBelow(date.getMinutes())}:${ZeroBelow(date.getSeconds())}`);
	
}

$(document).ready(function() {
	UpdateData();
	setInterval("UpdateData()", 1000);
});

