---
title: "Hedges: Startup Dreams, Realities and Lessons"
date: 2023-06-09
---

## Introduction

During my final year at university, I was diving deeper into investing and the online community surrounding it. It was a time when people had assets in all sorts of different places: stocks, efts, crypto, property, and more. I was dabbling in a few of these assets and found it annoying to switch between all the different investment platforms to see how my portfolio was performing. After doing some research I found the only places to solve this problem in New Zealand were [Sharesight](https://www.sharesight.com/) which started at $20 a month and [Yahoo Finance](https://nz.finance.yahoo.com/portfolios/) which had a clunky and confusing user interface. After seeing this I decided to start work on a solution.

## Ticker Tracker

Ticker Tracker was the solution I had been looking for. A platform where you could view all of your assets together to see a snapshot of how they performed. I shared the platform with several subreddits ([PersonalFinanceNZ](https://www.reddit.com/r/PersonalFinanceNZ/comments/nfys7y/tracking_your_whole_portfolio_made_easier/), [fiaustralia](https://www.reddit.com/r/fiaustralia/comments/njoox7/tracking_your_whole_portfolio_made_easier/), [ausstocks](https://www.reddit.com/r/ausstocks/comments/njopbp/tracking_your_whole_portfolio_made_easier/)) and got really positive feedback! I resolved a bunch of feature requests and bugs from the comments as they came up.

![img](../images/hedges/tickertracker.png)

- The Managing Director of [BusinessDesk](https://businessdesk.co.nz/) reached out for a potential collaboration
- [Hatch Invest](https://www.hatchinvest.nz/) reached out in a [comment](https://www.reddit.com/r/PersonalFinanceNZ/comments/nfys7y/comment/gz7fhts/?utm_source=share&utm_medium=web2x&context=3) stating the project was shared around the office and the team thought it was 'very cool'.
- A number of software engineers reached out, offering their assistance in developing the platform.

I onboarded over 600 new users that week and garnered more than 10,000 page views. The feedback was exciting and really showcased the demand for a product like this.

One of the individuals that reached out took their proposal seriously. They outlined a vision for the project, how they could assist in realising that vision and their qualifications. They were an experienced designer with several successful entrepreneurial ventures. After the cofounder agreement was signed we jumped into the development of **Hedges**

## Hedges

Development began smoothly and I was making quick progress on the core platform. We were doing project management through Notion and Trello, held weekly catchups to discuss progress, and assigned responsibilities based on our skill sets.

The division of work boiled down to me handling software development while my partner took charge of everything else.

Hedges was a complex full-stack platform that used React Native, NodeJS, PostgreSQL, and Heroku as the tech stack.

![img](../images/hedges/hedges.png)

Within about six months we had something functional that looked great but had a few bugs left to iron out. However, before getting the MVP in front of users we dropped the project. What happened?

## Why it Didn't Work

It was a pretty multi-facilitated decision like it always is but I'll list a few reasons here

### Scope Creep

One of the primary reasons for the project's downfall was scope creep. As you may have seen earlier in the post, we had been working on this platform for 6 months without releasing anything to users. The scope of the MVP was just too big!

What we ended up deciding on was a fully functional portfolio tracker with Shares and ETF, Crypto, Property, Cash, and Custom assets. Shares, ETFs and Crypto would all have live prices, historical data, and fundamental data. All of these assets would be accounted for in a graph that showcased the historical value of your portfolio. There would also be multiple portfolios with custom ordering and sorting. The amount of complexity was insane.

Bugs were coming up left and right and development really slowed towards the tail end of the project.

**What we should have done**: Kept the scope small (e.g. just stocks and ETFs), got it in front of users, and iterated from there.

### Percived Inequity in Workload

As I outlined in the scope creep section the project got very complicated and time-consuming. Another point to note is that once the design work was done and the business plan was laid out it didn't seem like there was much for my business partner to do. This led to the weekly meeting consisting of me talking about all the work I was doing and my partner talking about areas of the app that needed to be improved.

This project was 50/50 so I just felt like our contributions weren't equal which made me pretty apathetic by the end.

**What we should have done**: Got users involved earlier which would create more non-technical work.

### Financial Data Headaches

All of the data that was required for the platform was going to cost hundreds of thousands of dollars a year. The stocks and ETFs licensing for NZX and ASX data was going to be over $100k alone. We would also require another broker to get the data in API form which would run thousands more. The cost was astronomical.

I now see why it's pretty much just ShareSight. The barrier to entry is too high.

**What we should have done**: The only way we could have solved this problem was to take the project extremely seriously and go for venture funding. No Indie Hacking allowed on this one.

### Life Got Busy

I started my graduate position and Xero and he had his second child. Our priorities moved away from being the next big startup founders and onto other things. We both deprioritised the project and with that, it faded away into obscurity.

**What we should have done**: Not much you can do. It just wasn't the right time or project.

## Conclusion

Working on Ticker Tracker and then Hedges was some of the most fun I've had. I learned so much about building something simple, getting feedback, expanding the vision, working with business partners, deciding when to end things, and so much more. It gave me an invaluable foundation for future opportunities and opened my eyes to the world of entrepreneurship. Who knows what's in store next!
