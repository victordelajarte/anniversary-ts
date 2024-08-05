import { writeFile } from "fs";
import { data } from "./data";
import { DateObject, generateIcsCalendar, VAlarm, VEvent } from "ts-ics";

const now: DateObject = {
  date: new Date(),
};

const alarms: VAlarm[] = [
  {
    trigger: {
      type: "relative",
      value: {
        before: true,
        days: 1,
      },
    },
  },
  {
    trigger: {
      type: "relative",
      value: {
        before: true,
        weeks: 1,
      },
    },
  },
  {
    trigger: {
      type: "relative",
      value: {
        before: true,
        days: 30,
      },
    },
  },
];

const weddingDate = new Date();

const formatEvent = ({ gift, years }: (typeof data)[number]): VEvent => {
  const date = new Date(weddingDate);
  const startDate = new Date(date);
  startDate.setFullYear(startDate.getFullYear() + years);
  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + 4);

  const formattedYears = years === 1 ? "1 an" : `${years} ans`;
  const summary = `Noces de ${gift} - ${formattedYears} de mariage`;
  const description = `${summary}.\nPense à trouver un cadeau et réserver un bon restaurant !`;
  return {
    summary,
    categories: ["Anniversaire de mariage"],
    description,
    priority: "1",
    alarms,
    start: {
      date: startDate,
    },
    end: {
      date: endDate,
    },
    stamp: now,
    uid: `WEDDING_ANNIVERSARY_${years}---from-myself`,
  };
};

const calendar = generateIcsCalendar({
  prodId: "Myself",
  version: "2.0",
  events: data.map(formatEvent),
});

writeFile("calendar.ics", calendar, (err) => {
  if (err) {
    console.error(err);
  }
  console.log("File has been created");
});
