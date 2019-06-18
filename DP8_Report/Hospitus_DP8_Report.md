# CS374 DP8 Report - Iteration & Wrap Up

Team Hospitus

20130736 Andrew Kim

20130760 Junho Son

20150002 Dorjnyam

20160738 Van Hoang


## 1. Final Interface

Video Link: https://www.youtube.com/watch?v=T_QHuZ2hZRU

### Representative Screenshots:

#### Homepage

![1](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP8_Report/1.png)

User can select injury specifically according to body parts or not if he/she wishes not to be specific.

#### Search Results Page

![1](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP8_Report/2.png)

Page shows different hospitals in a sorted order set by the user with the radio buttons. Summarized information and hospital picture is shown.

#### Hospital Review Page

![1](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP8_Report/3.png)

User can view detailed information as well as past reviews left by fellow users. User can add to the evaluation if he/she desires.

#### Nearby Convenience Page

![1](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP8_Report/4.png)

Shows on Google Map of nearby conveniences that users might need while staying in the hospital.

### Quality Argument: 

#### 1. Homepage

Hospitus homepage is very well suited for the injured to use. Not only they are in big pictures to rid users of need to rid while they may be concussed, but it is very easy to click, even for users who might have injured one of their arms. It is easy to decide because we divided it into specific body parts of the injury instead of symptoms or injuries. If the user thinks that he/she is not in one of the categories that are provided to them, they can simply click “Show all” to see all hospital lists.

#### 2. Search page

Search page displays the hospitals that are relevant to the choice user has made before in the home page. It lists the hospitals in categories the user may choose with the radio buttons at the top. User can easily pick the best hospital according to his/her priority when deciding hospitals. Not only does this page show information about hospitals, it provides a simple navigation to the hospital. If the user click “Show on map” button, the website will provide a path from the user’s current position to the desired hospital.

#### 3. Review page

If the user is still not satisfied, we have more information for them. If the user click on the hospital that he/she wants, the user will be brought to the review page, where he/she can view past reviews on the hospital. Also if the user wants, he/she can book a room in advance so that there is a place for him/her. After staying at the hospital, the user may also leave a review or rating for the other patients to come. User can also click “Nearby Conveniences” to view what is around the hospital on the map.


## 2. Iteration Report
 
### Changes: 

**Show all button**: During the user testing, it became apparent that some users simply want to look at all hospitals without choosing injury type. Thus, we implemented a “Show All” button in homepage, that displays all available hospitals.  

**Sort by distance**: Users wanted to list hospitals based on distance as sometimes they just want to go to the closest hospital. This introduces a new sorting behavior on Search Result page.

### How the iteration period went: 

First, we identified functionalities to be added to our websites, and delegated the workload of implementation between each member. After the necessary changes were made, we went through user testing like in DP7 but in a different way. We added a new condition for the users: Use one hand as you navigate through Hospitus. This simulates injury to give us a view on how users might behave in real situations. We gave out drinks to the testers as incentive so they would participate in the user testing more actively. After the testing we added more specific questions about the functionalities we added to gauge their effectiveness.


### Lessons: 

After improving and repeating the process we did in DP7 we realized there is no finish line as to improve the program. No matter how many functionalities we add and refine it, there will always be new feedback on what could be different and what could be added. To perfect our program it needs constant maintenance and testing. Also things we thought were changes that improved the program might not be so for some users. Unnecessary functionalities that were deleted might be useful to some users and some functionalities we added are not sufficient or satisfying for different users.


## 3. Individual Reflections

### 20130736 Andrew Kim

For every DP session, I was mainly in charge of combining the report and submitting in md file. I also created the database for our project and also designed the database scheme. For the UI part, I created the homepage. For the final DP session, I was in charge of editing the video. 

What worked well in our team was the implementation of many functionalities. We had many goals of having a certain functionality in our website, and we achieved all of them. We were able to have “showing all the hospitals”, “sorting search results according to different category”, “show hospital location on Google Map”, “get user location and calculate distances from each hospital”, “nearby conveniences”, booking a room”, and many more. I feel proud that all of these functionalities were able to be included in our final version. 

What didn’t work well in our team was the UI design. During the discussion, we didn’t agree to a common UI design tool such as Semantics UI, and also didn’t write a blueprint of the pages. We simply divided the work so that each person works on one page, and this led to non-unified UI look. We did this because of the professor’s requirement that every person should contribute to UI. If we assigned one person to be the ‘director’ of UI who holds the central idea of how UI should look like, our final UI might have looked more unified. 

Having DP session almost every week and writing presentation and report every time was a lot of work, but what I learned from this team project was that doing this ‘checkup’ every week really helped our team to stay on topic. Other team projects would often fail because of irregular team meeting and having people forgetting about the project from the long empty days, but this project was different. Meeting with the team every week helped everyone to remember the project and do their best in the project. 

What I learned as a user-centered UI designer in this course is that one must consider the resolution of user’s screen when designing the interface. Our team originally planned our website to be for PC, but changed our plan to make the website for smartphones. This created many problems when we tried to port the design into the smartphone resolution. The search results would be squashed, and the review page would suffer from having low horizontal space. I learned that the screen size is a must for starting a design of UI. 

### 20130760 Junho Son

I think all our team members contributed to the project somewhat equally on brain storming, designing, and implementing the actual website. For the most part I designed, the hospital review page. Important part of the job was to make the webpage look simple even though the review page contains a lot of information and functions. I tried the best to adapt all the information into mobile screen.

Every week that we had to work on a DP, we would gather up in a study room. First we would discuss the grading policy and the report content from the class webpage. This was one of the advantages we had as a team because, working alone I could have missed a lot of content that was vital to that project. But with teamwork, we could cover as much as possible with every DP. However, because everything was in teamwork discussion, the process was a lot slower than if I had worked alone. There were four times more ideas on the table to discuss, and also ideas that seemed obviously good were often refuted by other team members. Of course this was an advantage as well in the long run, because every project would become that much better.

When we finished discussing the plans for the specific DP, we would start working together on the presentation and the product if the DP required so together. Since we worked together, it was finished way faster than working alone. However, we had to do a lot of polishing later because everyone worked on different parts of the project. After, we finished drawing the big picture of the project, we would delegate leftover work equally as possible. Sometimes, we lacked time to finish most parts of the project with one meeting. Then, we would meet again before the presentation to finish the work.

With the user testings, we always switched roles so that everyone could experience all parts of the interviews. It was slower than having a fixed role for everyone, but I think overall, we gained more understanding from the user testing. There was more to learn that way.

To sum up, I had a great time working with my team members. During the discussion, I saw a lot of ideas or thoughts I could have never gotten to myself. This course was on opportunity to widen my perspective. It required much work, but I would gladly do it again. Thanks for the great course!

### 20150002 Dorjnyam
Our team had two Koreans and two foreigners. As such, we had different perspectives on various topics. But this variety brought many ideas during the project. We would decide on design and overall functions of each single page of our application first and divide the work between us. 

We always had a consistent meeting so we were in sync with one another’s progress and overall course progress. Consistent meeting and Git-based project is something I would definitely use in future. Cloud-based tools enabled us to work efficiently and collaborate in real time. 

User-centered design process helped us get user’s perspective on our design as early as possible. So that we could focus on features that users requested or wanted. I would have loved to spend more time in discovering problems.

As we divided our implementation based pages, we had some trouble implementing when our page needed data from previous page. It was hard to analyze others’ code and make changes without breaking the functionality. But we always had discussion and would solve the problem. This GUI implementation sparked an interest in front-end development and I aim to study on front-end webdev and use things I’ve learned in future projects. 

### 20160738 Van Hoang

I think each of our team member has given equal contribution to the project, from gathering idea to making the prototype, implementing our app, etc. Although sometimes our idea and opinions were conflicted to each other, we always tried to discuss and find the best way to solve our problem. Through teamwork, I learned a lot about how to implement a mobile application and use github to work with other team members. This skill would be useful for me to use in my next team project. 
 
Through team-based design project experience, I learned that user-centered design process is really effective and necessary since we could understand what users might need, thus be able to design our app to meet their requests. Also, through web-based GUI implementation, I learned how to fix and debug when our application breaks due to various reasons. Overall, through this course and team-based project, I could earn some experience and could learn a lot of new things that would be necessary for my future project.  
