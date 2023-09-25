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
				week += `<td class="text-grey-lighter">${prevprevMonthDays - ii}</td>`;
			}
			for(var ii = daysi[prevMonthDate.getDay()]; ii <= 7; ii++) {
				if(ii == 6 || ii == 7) {
					week += `<td class="text-danger">${prevMonthLastDay}</td>`;
				} else {
					week += `<td>${prevMonthLastDay}</td>`;
				}
				prevMonthLastDay++;
			}
		} else {
			for(var ii = 1; ii <= 7; ii++) {
				if(prevMonthLastDay <= prevMonthDays) {
					if(ii == 6 || ii == 7) {
						week += `<td class="text-danger">${prevMonthLastDay}</td>`;
					} else {
						week += `<td>${prevMonthLastDay}</td>`;
					}
				} else {
					if(ii == 6 || ii == 7) {
						week += `<td class="text-danger-light">${nextMonthDaysGrey}</td>`;
					} else {
						week += `<td class="text-grey-lighter">${nextMonthDaysGrey}</td>`;
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
				week += `<td class="text-grey-lighter">${prevMonthDays - ii}</td>`;
			}
			for(var ii = daysi[curMonthDate.getDay()]; ii <= 7; ii++) {
				if(ii == 6 || ii == 7) {
					if(date.getDate() == curMonthLastDay) {
						week += `<td class="text-danger is-selected">${curMonthLastDay}</td>`;
					} else {
						week += `<td class="text-danger">${curMonthLastDay}</td>`;
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
							week += `<td class="is-selected text-danger">${curMonthLastDay}</td>`;
						} else {
							week += `<td class="text-danger">${curMonthLastDay}</td>`;
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
						week += `<td class="text-danger-light">${nextMonthDaysGrey}</td>`;
					} else {
						week += `<td class="text-grey-lighter">${nextMonthDaysGrey}</td>`;
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
				week += `<td class="text-grey-lighter">${curMonthDays - ii}</td>`;
			}
			for(var ii = daysi[nextMonthDate.getDay()]; ii <= 7; ii++) {
				if(ii == 6 || ii == 7) {
					week += `<td class="text-danger">${nextMonthLastDay}</td>`;
				} else {
					week += `<td>${nextMonthLastDay}</td>`;
				}
				nextMonthLastDay++;
			}
		} else {
			for(var ii = 1; ii <= 7; ii++) {
				if(nextMonthLastDay <= nextMonthDays) {
					if(ii == 6 || ii == 7) {
						week += `<td class="text-danger">${nextMonthLastDay}</td>`;
					} else {
						week += `<td>${nextMonthLastDay}</td>`;
					}
				} else {
					if(ii == 6 || ii == 7) {
						week += `<td class="text-danger-light">${nextMonthDaysGrey}</td>`;
					} else {
						week += `<td class="text-grey-lighter">${nextMonthDaysGrey}</td>`;
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
		timeBegin = Math.floor(timeBegin.getTime() / 1000);
		timeEnd = Math.floor(timeEnd.getTime() / 1000);
		currentTime = Math.floor(date.getTime() / 1000);

		var isCurrend = 0;
		if(currentTime >= timeBegin && currentTime <= timeEnd) {
			isCurrend = 1;
		}

		if(range.show == true) {
			$("#allLessons").append(`<div class="column"><div class="has-text-centered is-size-3">${range.title}</div><progress class="progress is-small is-success" value="${isCurrend}" max="1"></progress><div class="has-text-centered is-size-5">${range.begin}<br>${range.end}</div></div>`);
		} else {
			$("#allLessons").append(`<div class="column dot"><progress class="progress is-small is-success" value="${isCurrend}" max="1"></div>`);
		}

		if(currentTime >= timeBegin && currentTime <= timeEnd) {
			$("#lessonProgress").fadeIn("fast");
			$("#lessonProgress progress.is-large").attr("max", timeEnd - timeBegin);
			$("#lessonProgress progress.is-large").attr("value", currentTime - timeBegin);
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

	$("#themeBut").click(function() {
		$('html').toggleClass("darkmode");

		if($('html').hasClass("darkmode")) {
			$("#themeBut").html(`<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>`);
		} else {
			$("#themeBut").html(`<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>`);
		}
	});
});
