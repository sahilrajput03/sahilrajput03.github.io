Google's SRE-SWEs need to have exceptionally strong coding and algorithms skills. They're Software Engineers who are deeply involved in product design, acquire a deep understanding of how to develop large scale distributed systems, and end up with incredibly indepth knowledge of Google's services and systems infrastructure (more so than the typical SWE at Google). There are several other questions on Quora about the role that have been answered by Google SREs; here are a couple:[What is it like to be a Site Reliability Engineer (SRE) at Google?](https://www.quora.com/What-is-it-like-to-be-a-Site-Reliability-Engineer-SRE-at-Google)[Who is a Google SRE? What are the skills and requirements of this role?](https://www.quora.com/Who-is-a-Google-SRE-What-are-the-skills-and-requirements-of-this-role)Fwiw, for a number of years, there was no dedicated SRE recruiting team/process; SRE-SWEs were pulled directly out of the Google's general SWE hiring pipeline, and they typically scraped the best SWEs off of the top. The SWE and SRE-SWE ladders are identical, so transferring between the two roles is pretty much automatic (i.e. no additional interviews required) if one later decides they'd like to switch (typically engineers at Google are asked to remain with projects ~18 months before transferring, so that there isn't a lot of churn).Dedicated SRE support, incidentally, is only provided to Google's largest and most critical services and products, so *everything* a SRE works on will invariably be a big software project. :-)One final suggestion: ask your Google Recruiter to arrange for you to talk to a SRE Manager about the role; since the role is unknown to many candidates they are typically quite adept and more than willing to spend the time explaining the role to you (and ensuring it will be a good fit with your interests).

***

f you love coding and working on big software projects, you should choose SWE instead of SRE.

SREs do write code, but they tend to spend at least as much time on operational work. Officially, when the service is considered “healthy,” SREs are expected to spend up to 50% of their time on operational work. For services that aren’t so healthy, it can be even more.

Operational work is everything you do to maintain the health of your service that isn’t building software. That includes highly skilled, engaging work like troubleshooting outages in real time, and responding to problems detected by monitoring systems to prevent outages before they happen.

It also includes less skilled, tedious work like preparing for planned maintenance, tweaking the size or location of your service to handle additional users, rolling out new versions of code, rolling out config changes, configuring A/B tests to verify new code and configurations before they roll out, waiting for rollouts to finish, checking in on rollouts to see why they haven’t finished yet, and filing tickets with other teams whose bugs are keeping your rollouts from finishing.

When you do write code as an SRE, it probably won’t be big projects. It’ll be refactoring configurations, automating some of that tedious operational work, and tweaking tools you use frequently. Most of it won’t be visible to anyone outside your team, and none of it will be visible to anyone outside of Google.

Your involvement with big, user-facing applications will mostly take the form of *reviewing* new designs (and sometimes code) with an eye for reliability. Occasionally you might dig into your service’s code to track down a bug, but more likely you’ll hand that off to the developers once you suspect the bug exists.

***

If you join SRE, take Mark Shieh’s advice and make sure you’re hired as an SRE-SWE. That will make it easier to transfer to SWE, because you won’t have to go through the SWE interview again, but it won’t necessarily be *easy*. Google’s transfer process is designed to retain their star employees, not to help newbies find their feet. Transfers are dependent on your performance reviews, so if you apply for a transfer *after* you realize SRE isn’t working out for you, it may already be too late.

***

SRE is like the Marines. They deal with the real life, real time issues of running a super-high-reliability system. SWE are the people designing new things. There are plenty of coding positions in SRE. You should talk to your recruiter about what those positions actually are and what they involve.

If you want the best of both worlds, you can come work for Technical Infrastructure. Those are the SWEs and also the real (EE/ME) engineers who build the datacenters and the systems that run everything else.

***

## [Google's Approach on medium.com](https://medium.com/@jerub/googles-approach-4bcdc0533c0a),

***

Read the awesome book by google about sre's:- https://cloud.google.com/blog/products/devops-sre/how-to-start-and-assess-your-sre-journey ; 

__Browse other books on about SRE- lol:
- Building Secure & Reliable Systems, 
- The Site Reliability Workbook,
- Site Reliability Engineering [How Google Runs Production Systems], 

Get these books at https://landing.google.com/sre/books/ - (you can read them online.)

- The Site Reliability Workbook is the hands-on companion to the bestselling Site Reliability Engineering book and uses concrete examples to show how to put SRE principles and practices to work.
- Members of the SRE team explain how their engagement with the entire software lifecycle has enabled Google to build, deploy, monitor, and maintain some of the largest software systems in the world.

***

You may also refer to blog - https://baljeetsandhu.wordpress.com/

