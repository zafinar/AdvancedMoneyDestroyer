This is a fully frontend Javascript application Utilizing React. This application runs in realtime by querying the IEX api, it works best when markets are open and does not report after-hours activity. It is purely text based but I plan on adding a backend/autofill and other features when I get finished learning some python(better libraries for these kinds of apps.)

To Run:
npm start in console.
open browser to localhost:3000 or whatever host you're set to.

To Utilize:
The application is modular and fully text based, it tracks U.S. equities and can take multiple queries. Searching for Ticker symbols will give you a basic interface.
------
Try searching for EA
------
Each of the segments in display are independent and can be pulled alone or in a different assortment.
------
Try searching for EA: financials,quote,spread,chart-daily
------
Identical layouts can be searched for multiple stocks
------
Try searching for EA,TTWO,ATVI: financials,quote,spread,chart-yearly
------
The application currently only supports one chart range at a time, and chart searches MUST BE INPUTED AT THE END OF THE SEARCH. 

Search Terms:
book
company
dividend
financials
news
quote
spread
chart
chart-daily
chart-weekly
chart-quarterly
chart-biannually
chart-yearly
chart-2year
chart-5year
