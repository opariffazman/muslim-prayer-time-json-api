# muslim-prayer-time-json-api

Simple prayer time API based on [PrayTimes.org](http://praytimes.org) calculation

# usage

request query: **latitude**, **longitude**, **timezone** & **method**

| Method  | Description                                   |
| ------- | --------------------------------------------- |
| MWL     | Muslim World League                           |
| ISNA    | Islamic Society of North America              |
| Egypt   | Egyptian General Authority of Survey          |
| Makkah  | Umm al-Qura University, Makkah                |
| Karachi | University of Islamic Sciences, Karachi       |
| Tehran  | Institute of Geophysics, University of Tehran |
| Jafari  | Shia Ithna Ashari (Ja`fari)                   |

## example
```
curl https://muslim-prayer-times.cyclic.app/api/today?latitude=3&longitude=101&timezone=8&method=Egypt
```
