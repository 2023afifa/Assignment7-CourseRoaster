Add at least 3 Project features

Ans: 1) In this website, there has 9 courses. You can add any course but not more than 20 credit hours. 2) You have to select one course only one time, you can't select a course more than once. 3) If you click the 'Select' button you will see the course title, your total credit and remaining credit hours on the right side.

Discuss how you managed the state in your assignment project.

Ans: I used 3 useState in this assignment. One is for setting the courses, another is for setting the credit hours and the other is for setting the remaining credit hours. First useState is an array because the courses will be listed like an array of objects. When a new course will be selected the useState will set the new course in the array. Second useState is a number where total credit hour is 0 in the first place. Whenever a new course will be added the credit hour of that course will be added to the previous total credit hours. It will not add any credit hours if the total credit hour exceed the limit. Last useState is also a number. The initial value is 20. When a new course will be added the remaining credit hours will show there. It will stop when the remaining credit hours is less than 0.
